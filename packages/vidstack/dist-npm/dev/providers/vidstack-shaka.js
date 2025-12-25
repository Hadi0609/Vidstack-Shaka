import { loadScript, preconnect } from '../chunks/vidstack-WPqG_DWb.js';
import { IS_CHROME, isShakaSupported } from '../chunks/vidstack-vIAU-deh.js';
import { VideoProvider } from './vidstack-video.js';
import { isUndefined, isString, DOMEvent, isFunction, listenEvent, effect, camelToKebabCase, peek } from '../chunks/vidstack-Bu2kfzUd.js';
import { coerceToError } from '../chunks/vidstack-DbBJlz7I.js';
import { QualitySymbol } from '../chunks/vidstack-Bpr4fI4n.js';
import { TextTrack, TextTrackSymbol } from '../chunks/vidstack-ABsPNAYn.js';
import { ListSymbol } from '../chunks/vidstack-Dv_LIPFu.js';
import { RAFLoop } from '../chunks/vidstack-qh1N5_f_.js';
import { getLangName } from '../chunks/vidstack-CT-hFnQH.js';
import './vidstack-html.js';
import '../chunks/vidstack-Dihypf8P.js';
import '../chunks/vidstack-LQb0HwyK.js';
import '../chunks/vidstack-28cU2iGK.js';

class ShakaLibLoader {
  #lib;
  #ctx;
  #callback;
  constructor(lib, ctx, callback) {
    this.#lib = lib;
    this.#ctx = ctx;
    this.#callback = callback;
    this.#startLoading();
  }
  async #startLoading() {
    this.#ctx.logger?.info("\u{1F3D7}\uFE0F Loading Shaka Player Library");
    const callbacks = {
      onLoadStart: this.#onLoadStart.bind(this),
      onLoaded: this.#onLoaded.bind(this),
      onLoadError: this.#onLoadError.bind(this)
    };
    let ctor = await loadShakaScript(this.#lib, callbacks);
    if (isUndefined(ctor) && !isString(this.#lib)) ctor = await importShaka(this.#lib, callbacks);
    if (!ctor) return null;
    if (typeof MediaSource === "undefined") {
      const message = "[vidstack] Shaka Player is not supported in this environment";
      this.#ctx.logger?.error(message);
      this.#ctx.player.dispatch(new DOMEvent("shaka-unsupported"));
      this.#ctx.notify("error", { message, code: 4 });
      return null;
    }
    return ctor;
  }
  #onLoadStart() {
    {
      this.#ctx.logger?.infoGroup("Starting to load Shaka Player").labelledLog("URL", this.#lib).dispatch();
    }
    this.#ctx.player.dispatch(new DOMEvent("shaka-lib-load-start"));
  }
  #onLoaded(ctor) {
    {
      this.#ctx.logger?.infoGroup("Loaded Shaka Player").labelledLog("Library", this.#lib).labelledLog("Constructor", ctor).dispatch();
    }
    this.#ctx.player.dispatch(
      new DOMEvent("shaka-lib-loaded", {
        detail: ctor
      })
    );
    this.#callback(ctor);
  }
  #onLoadError(e) {
    const error = coerceToError(e);
    {
      this.#ctx.logger?.errorGroup("[vidstack] Failed to load Shaka Player").labelledLog("Library", this.#lib).labelledLog("Error", e).dispatch();
    }
    this.#ctx.player.dispatch(
      new DOMEvent("shaka-lib-load-error", {
        detail: error
      })
    );
    this.#ctx.notify("error", {
      message: error.message,
      code: 4,
      error
    });
  }
}
async function importShaka(loader, callbacks = {}) {
  if (isUndefined(loader)) return void 0;
  callbacks.onLoadStart?.();
  if (isShakaNamespace(loader)) {
    loader.polyfill?.installAll?.();
    const ctor = loader.Player;
    callbacks.onLoaded?.(ctor);
    return ctor;
  }
  try {
    const result = await loader();
    const ns = result?.default;
    if (isShakaNamespace(ns)) {
      ns.polyfill?.installAll?.();
      callbacks.onLoaded?.(ns.Player);
      return ns.Player;
    }
    throw Error(
      true ? "[vidstack] failed importing Shaka Player. Dynamic import returned invalid object." : ""
    );
  } catch (err) {
    callbacks.onLoadError?.(err);
  }
  return void 0;
}
async function loadShakaScript(src, callbacks = {}) {
  if (!isString(src)) return void 0;
  callbacks.onLoadStart?.();
  try {
    await loadScript(src);
    const shaka = window.shaka;
    if (!shaka || !isFunction(shaka.Player)) {
      throw Error(
        true ? "[vidstack] failed loading Shaka Player. Could not find a valid `shaka.Player` constructor on window" : ""
      );
    }
    shaka.polyfill?.installAll?.();
    const ctor = shaka.Player;
    callbacks.onLoaded?.(ctor);
    return ctor;
  } catch (err) {
    callbacks.onLoadError?.(err);
  }
  return void 0;
}
function isShakaNamespace(value) {
  return value && "Player" in value && isFunction(value.Player);
}

const toDOMEventType = (type) => `shaka-${camelToKebabCase(type)}`;
class ShakaController {
  #video;
  #ctx;
  #instance = null;
  #callbacks = /* @__PURE__ */ new Set();
  #stopLiveSync = null;
  config = {};
  get instance() {
    return this.#instance;
  }
  constructor(video, ctx) {
    this.#video = video;
    this.#ctx = ctx;
  }
  setup(ctor) {
    this.#instance = new ctor(this.#video);
    const eventHandler = this.#dispatchShakaEvent.bind(this);
    const events = [
      "buffering",
      "loading",
      "loaded",
      "unloading",
      "adaptation",
      "trackschanged",
      "variantchanged",
      "textchanged",
      "texttrackvisibility",
      "streaming",
      "manifestparsed"
    ];
    for (const event of events) {
      this.#instance.addEventListener(event, eventHandler);
    }
    this.#instance.addEventListener(
      "error",
      this.#onError.bind(this)
    );
    for (const callback of this.#callbacks) callback(this.#instance);
    this.#ctx.player.dispatch("shaka-instance", {
      detail: this.#instance
    });
    if (this.config.config) {
      this.#instance.configure(this.config.config);
    }
    const networkingEngine = this.#instance.getNetworkingEngine();
    if (networkingEngine) {
      if (this.config.requestFilter) {
        networkingEngine.registerRequestFilter(this.config.requestFilter);
      }
      if (this.config.responseFilter) {
        networkingEngine.registerResponseFilter(this.config.responseFilter);
      }
    }
    this.#instance.addEventListener(
      "adaptation",
      this.#onAdaptation.bind(this)
    );
    this.#instance.addEventListener(
      "trackschanged",
      this.#onTracksChanged.bind(this)
    );
    this.#instance.addEventListener(
      "loaded",
      this.#onLoaded.bind(this)
    );
    this.#instance.addEventListener(
      "buffering",
      this.#onBuffering.bind(this)
    );
    this.#ctx.qualities[QualitySymbol.enableAuto] = this.#enableAutoQuality.bind(this);
    listenEvent(this.#ctx.qualities, "change", this.#onUserQualityChange.bind(this));
    listenEvent(this.#ctx.audioTracks, "change", this.#onUserAudioChange.bind(this));
    this.#stopLiveSync = effect(this.#liveSync.bind(this));
  }
  #createDOMEvent(type, data) {
    return new DOMEvent(toDOMEventType(type), { detail: data });
  }
  #liveSync() {
    if (!this.#ctx.$state.live()) return;
    const raf = new RAFLoop(this.#liveSyncPosition.bind(this));
    raf.start();
    return raf.stop.bind(raf);
  }
  #liveSyncPosition() {
    if (!this.#instance) return;
    const seekRange = this.#instance.seekRange();
    const position = seekRange.end - this.#video.currentTime;
    this.#ctx.$state.liveSyncPosition.set(!isNaN(position) ? position : Infinity);
  }
  #dispatchShakaEvent(event) {
    this.#ctx.player?.dispatch(this.#createDOMEvent(event.type, event));
  }
  #onBuffering(event) {
    const bufferingEvent = event;
    const trigger = this.#createDOMEvent("buffering", event);
    if (bufferingEvent.buffering) {
      this.#ctx.notify("waiting", void 0, trigger);
    }
  }
  #onLoaded() {
    if (this.#ctx.$state.canPlay() || !this.#instance) return;
    const trigger = this.#createDOMEvent("loaded", null);
    const isLive = this.#instance.isLive();
    this.#ctx.notify("stream-type-change", isLive ? "live" : "on-demand", trigger);
    if (isLive) {
      const seekRange = this.#instance.seekRange();
      const duration = seekRange.end - seekRange.start;
      if (duration > 0) {
        this.#ctx.notify("duration-change", duration, trigger);
      }
    }
    this.#ctx.qualities[QualitySymbol.setAuto](true, trigger);
    this.#updateQualityTracks(trigger);
    this.#updateAudioTracks(trigger);
    this.#updateTextTracks(trigger);
    this.#video.dispatchEvent(new DOMEvent("canplay", { trigger }));
  }
  #updateQualityTracks(trigger) {
    if (!this.#instance) return;
    const variantTracks = this.#instance.getVariantTracks();
    const uniqueQualities = /* @__PURE__ */ new Map();
    for (const track of variantTracks) {
      if (track.height && track.width) {
        const key = `${track.height}`;
        if (!uniqueQualities.has(key) || track.bandwidth > uniqueQualities.get(key).bandwidth) {
          uniqueQualities.set(key, track);
        }
      }
    }
    const sortedQualities = Array.from(uniqueQualities.values()).sort(
      (a, b) => (b.height || 0) - (a.height || 0)
    );
    for (let i = 0; i < sortedQualities.length; i++) {
      const track = sortedQualities[i];
      const quality = {
        id: `shaka-quality-${track.id}`,
        width: track.width || 0,
        height: track.height || 0,
        bitrate: track.bandwidth || 0,
        codec: track.videoCodec || track.codecs || "",
        index: i
      };
      this.#ctx.qualities[ListSymbol.add](quality, trigger);
    }
    const activeTrack = variantTracks.find((t) => t.active);
    if (activeTrack) {
      const activeQuality = this.#ctx.qualities.toArray().find((q) => q.height === activeTrack.height);
      if (activeQuality) {
        this.#ctx.qualities[ListSymbol.select](activeQuality, true, trigger);
      }
    }
  }
  #updateAudioTracks(trigger) {
    if (!this.#instance) return;
    const audioLanguagesAndRoles = this.#instance.getAudioLanguagesAndRoles();
    audioLanguagesAndRoles.forEach((langRole, index) => {
      const localTrack = {
        id: `shaka-audio-${index}`,
        label: langRole.label || getLangName(langRole.language) || langRole.language || "",
        language: langRole.language || "",
        kind: langRole.role || "main"
      };
      this.#ctx.audioTracks[ListSymbol.add](localTrack, trigger);
    });
  }
  #updateTextTracks(trigger) {
    if (!this.#instance) return;
    const textTracks = this.#instance.getTextTracks();
    textTracks.forEach((shakaTrack, index) => {
      const track = new TextTrack({
        id: `shaka-text-${shakaTrack.id}`,
        label: shakaTrack.label || getLangName(shakaTrack.language) || shakaTrack.language || "",
        language: shakaTrack.language || "",
        kind: shakaTrack.kind || "subtitles",
        default: shakaTrack.primary || false
      });
      track[TextTrackSymbol.readyState] = 2;
      track[TextTrackSymbol.onModeChange] = () => {
        if (!this.#instance) return;
        if (track.mode === "showing") {
          const shakaTextTracks = this.#instance.getTextTracks();
          const targetTrack = shakaTextTracks.find((t) => t.id === shakaTrack.id);
          if (targetTrack) {
            this.#instance.selectTextTrack(targetTrack);
            this.#instance.setTextTrackVisibility(true);
          }
        } else {
          this.#instance.setTextTrackVisibility(false);
        }
      };
      this.#ctx.textTracks.add(track, trigger);
    });
  }
  #onTracksChanged(event) {
    const trigger = this.#createDOMEvent("trackschanged", event);
    if (this.#ctx.qualities.length === 0) {
      this.#updateQualityTracks(trigger);
    }
  }
  #onAdaptation(event) {
    const adaptationEvent = event;
    const newTrack = adaptationEvent.newTrack;
    if (!newTrack || newTrack.type !== "variant") return;
    const quality = this.#ctx.qualities.toArray().find((q) => q.height === newTrack.height);
    if (quality) {
      const trigger = this.#createDOMEvent("adaptation", event);
      this.#ctx.qualities[ListSymbol.select](quality, true, trigger);
    }
  }
  #onError(event) {
    const errorEvent = event;
    const error = errorEvent.detail;
    if (!error) return;
    {
      this.#ctx.logger?.errorGroup(`[vidstack] Shaka error code: ${error.code}`).labelledLog("Media Element", this.#video).labelledLog("Shaka Instance", this.#instance).labelledLog("Error", error).labelledLog("Src", peek(this.#ctx.$state.source)).labelledLog("Media Store", { ...this.#ctx.$state }).dispatch();
    }
    this.#onFatalError(error);
  }
  #onFatalError(error) {
    this.#ctx.notify("error", {
      message: error.message || `Shaka error code: ${error.code}`,
      code: 1,
      error
    });
  }
  #enableAutoQuality() {
    if (!this.#instance) return;
    this.#instance.configure({
      abr: {
        enabled: true
      }
    });
  }
  #onUserQualityChange() {
    const { qualities } = this.#ctx;
    if (!this.#instance || qualities.auto || !qualities.selected) return;
    this.#instance.configure({
      abr: {
        enabled: false
      }
    });
    const variantTracks = this.#instance.getVariantTracks();
    const selectedQuality = qualities.selected;
    const matchingTrack = variantTracks.find((track) => track.height === selectedQuality.height);
    if (matchingTrack) {
      this.#instance.selectVariantTrack(matchingTrack, qualities.switch === "current");
    }
    if (IS_CHROME) {
      this.#video.currentTime = this.#video.currentTime;
    }
  }
  #onUserAudioChange() {
    if (!this.#instance) return;
    const { audioTracks } = this.#ctx;
    const selectedTrack = audioTracks.selected;
    if (selectedTrack) {
      const audioLanguagesAndRoles = this.#instance.getAudioLanguagesAndRoles();
      const index = audioTracks.selectedIndex;
      if (index >= 0 && index < audioLanguagesAndRoles.length) {
        const langRole = audioLanguagesAndRoles[index];
        this.#instance.selectAudioLanguage(langRole.language, langRole.role);
      }
    }
  }
  /**
   * Register a request filter with the networking engine.
   */
  registerRequestFilter(filter) {
    const networkingEngine = this.#instance?.getNetworkingEngine();
    if (networkingEngine) {
      networkingEngine.registerRequestFilter(filter);
    }
  }
  /**
   * Register a response filter with the networking engine.
   */
  registerResponseFilter(filter) {
    const networkingEngine = this.#instance?.getNetworkingEngine();
    if (networkingEngine) {
      networkingEngine.registerResponseFilter(filter);
    }
  }
  onInstance(callback) {
    this.#callbacks.add(callback);
    return () => this.#callbacks.delete(callback);
  }
  #reset() {
  }
  async loadSource(src) {
    this.#reset();
    if (!isString(src.src) || !this.#instance) return;
    try {
      await this.#instance.load(src.src);
    } catch (error) {
      {
        this.#ctx.logger?.errorGroup("[vidstack] Shaka load error").labelledLog("Error", error).labelledLog("Src", src).dispatch();
      }
      this.#ctx.notify("error", {
        message: error instanceof Error ? error.message : "Failed to load source",
        code: 1,
        error
      });
    }
  }
  async destroy() {
    this.#reset();
    if (this.#instance) {
      await this.#instance.destroy();
      this.#instance = null;
    }
    this.#stopLiveSync?.();
    this.#stopLiveSync = null;
    this.#ctx?.logger?.info("\u{1F3D7}\uFE0F Destroyed Shaka instance");
  }
}

const JS_DELIVR_CDN = "https://cdn.jsdelivr.net";
class ShakaProvider extends VideoProvider {
  $$PROVIDER_TYPE = "SHAKA";
  #ctor = null;
  #controller = new ShakaController(this.video, this.ctx);
  /**
   * The Shaka Player constructor.
   */
  get ctor() {
    return this.#ctor;
  }
  /**
   * The current Shaka Player instance. Use this to access Shaka's full API.
   *
   * **Important:** This is `null` until the Shaka library is loaded and the player
   * is initialized. Use `onInstance()` to safely access the instance.
   *
   * @example
   * ```ts
   * const shakaInstance = provider.instance;
   * if (shakaInstance) {
   *   // Get variant tracks (quality levels)
   *   const variants = shakaInstance.getVariantTracks();
   *
   *   // Get text tracks
   *   const textTracks = shakaInstance.getTextTracks();
   *
   *   // Access networking engine
   *   const networkingEngine = shakaInstance.getNetworkingEngine();
   * }
   * ```
   */
  get instance() {
    return this.#controller.instance;
  }
  /**
   * Whether Shaka Player is supported in this environment.
   * Requires MediaSource Extensions (MSE) support.
   */
  static supported = isShakaSupported();
  get type() {
    return "shaka";
  }
  get canLiveSync() {
    return true;
  }
  #library = `${JS_DELIVR_CDN}/npm/shaka-player@4.15.1/dist/shaka-player.compiled${".debug.js" }`;
  /**
   * The Shaka Player configuration object. Set this before the source is loaded
   * to configure DRM, streaming parameters, ABR settings, and network filters.
   *
   * @see {@link https://shaka-player-demo.appspot.com/docs/api/shaka.Player.html#configure}
   *
   * @example
   * ```ts
   * provider.config = {
   *   // Shaka player configuration
   *   config: {
   *     drm: {
   *       servers: {
   *         'com.widevine.alpha': 'https://license.example.com/widevine',
   *         'com.microsoft.playready': 'https://license.example.com/playready'
   *       },
   *       advanced: {
   *         'com.widevine.alpha': {
   *           videoRobustness: 'SW_SECURE_CRYPTO',
   *           audioRobustness: 'SW_SECURE_CRYPTO'
   *         }
   *       }
   *     },
   *     streaming: {
   *       bufferingGoal: 30,
   *       rebufferingGoal: 2
   *     },
   *     abr: {
   *       enabled: true,
   *       defaultBandwidthEstimate: 5000000
   *     }
   *   },
   *   // Request filter for authentication
   *   requestFilter: (type, request) => {
   *     request.headers['X-Custom-Header'] = 'value';
   *   },
   *   // Response filter for processing
   *   responseFilter: (type, response) => {
   *     console.log('Response received:', response.status);
   *   }
   * };
   * ```
   */
  get config() {
    return this.#controller.config;
  }
  set config(config) {
    this.#controller.config = config;
  }
  /**
   * The Shaka Player library source. Can be:
   * - A URL string to load from CDN
   * - The Shaka namespace object (pre-loaded)
   * - A dynamic import function
   *
   * @defaultValue `https://cdn.jsdelivr.net/npm/shaka-player@4.15.1/dist/shaka-player.compiled.js`
   *
   * @example
   * ```ts
   * // Load from custom CDN
   * provider.library = 'https://cdn.example.com/shaka-player.js';
   *
   * // Use pre-loaded Shaka
   * provider.library = window.shaka;
   *
   * // Dynamic import (for bundlers)
   * provider.library = () => import('shaka-player');
   * ```
   */
  get library() {
    return this.#library;
  }
  set library(library) {
    this.#library = library;
  }
  preconnect() {
    if (!isString(this.#library)) return;
    preconnect(this.#library);
  }
  setup() {
    super.setup();
    new ShakaLibLoader(this.#library, this.ctx, (ctor) => {
      this.#ctor = ctor;
      this.#controller.setup(ctor);
      this.ctx.notify("provider-setup", this);
      const src = peek(this.ctx.$state.source);
      if (src) this.loadSource(src);
    });
  }
  async loadSource(src, preload) {
    if (!isString(src.src)) {
      this.removeSource();
      return;
    }
    this.media.preload = preload || "";
    this.appendSource(src, src.type || "application/dash+xml");
    await this.#controller.loadSource(src);
    this.currentSrc = src;
  }
  /**
   * Register a callback to be invoked when the Shaka Player instance is created.
   * This is the recommended way to access and configure the Shaka instance.
   *
   * @param callback - Function called with the Shaka Player instance
   * @returns A dispose function to remove the callback
   *
   * @example
   * ```ts
   * const dispose = provider.onInstance((shaka) => {
   *   // Configure DRM
   *   shaka.configure({
   *     drm: {
   *       servers: {
   *         'com.widevine.alpha': 'https://license.example.com'
   *       }
   *     }
   *   });
   *
   *   // Add network filters
   *   const networkingEngine = shaka.getNetworkingEngine();
   *   networkingEngine?.registerRequestFilter((type, request) => {
   *     request.headers['Authorization'] = 'Bearer ' + token;
   *   });
   *
   *   // Listen to Shaka events
   *   shaka.addEventListener('error', (event) => {
   *     console.error('Shaka error:', event.detail);
   *   });
   * });
   *
   * // Later: remove the callback
   * dispose();
   * ```
   */
  onInstance(callback) {
    const instance = this.#controller.instance;
    if (instance) callback(instance);
    return this.#controller.onInstance(callback);
  }
  /**
   * Register a request filter with the Shaka networking engine.
   * This allows you to modify requests before they are sent.
   *
   * **Common use cases:**
   * - Adding authentication headers to DRM license requests
   * - Adding CDN tokens to segment URLs
   * - Logging requests for debugging
   *
   * @param filter - The request filter function
   *
   * @see {@link https://shaka-player-demo.appspot.com/docs/api/shaka.net.NetworkingEngine.html#registerRequestFilter}
   *
   * @example
   * ```ts
   * // Add auth token to license requests
   * provider.registerRequestFilter((type, request) => {
   *   if (type === 2) { // ShakaRequestType.LICENSE
   *     request.headers['Authorization'] = 'Bearer ' + authToken;
   *   }
   * });
   *
   * // Add CDN token to all requests
   * provider.registerRequestFilter((type, request) => {
   *   request.uris = request.uris.map(uri =>
   *     uri + (uri.includes('?') ? '&' : '?') + 'token=' + cdnToken
   *   );
   * });
   *
   * // Async filter (e.g., fetch fresh token)
   * provider.registerRequestFilter(async (type, request) => {
   *   if (type === 2) {
   *     const token = await fetchAuthToken();
   *     request.headers['Authorization'] = 'Bearer ' + token;
   *   }
   * });
   * ```
   */
  registerRequestFilter(filter) {
    this.#controller.registerRequestFilter(filter);
  }
  /**
   * Register a response filter with the Shaka networking engine.
   * This allows you to modify responses after they are received.
   *
   * **Common use cases:**
   * - Processing wrapped license responses
   * - Logging responses for debugging
   * - Modifying response data
   *
   * @param filter - The response filter function
   *
   * @see {@link https://shaka-player-demo.appspot.com/docs/api/shaka.net.NetworkingEngine.html#registerResponseFilter}
   *
   * @example
   * ```ts
   * // Process wrapped license response
   * provider.registerResponseFilter((type, response) => {
   *   if (type === 2) { // ShakaRequestType.LICENSE
   *     // Server wraps license in JSON
   *     const wrapper = JSON.parse(new TextDecoder().decode(response.data));
   *     // Extract and decode the actual license
   *     response.data = Uint8Array.from(atob(wrapper.license), c => c.charCodeAt(0)).buffer;
   *   }
   * });
   *
   * // Log all responses
   * provider.registerResponseFilter((type, response) => {
   *   console.log(`Response for type ${type}:`, {
   *     uri: response.uri,
   *     status: response.status,
   *     timeMs: response.timeMs
   *   });
   * });
   * ```
   */
  registerResponseFilter(filter) {
    this.#controller.registerResponseFilter(filter);
  }
  destroy() {
    this.#controller.destroy();
  }
}

export { ShakaProvider };
