import { DOMEvent, isString, EventsController, useState } from './chunks/vidstack-Wn3NH5Sg.js';
export { appendTriggerEvent, findTriggerEvent, hasTriggerEvent, isKeyboardClick, isKeyboardEvent, isPointerEvent, walkTriggerEventChain } from './chunks/vidstack-Wn3NH5Sg.js';
export { AudioProviderLoader, AudioTrackList, DASHProviderLoader, FullscreenController, HLSProviderLoader, List, LocalMediaStorage, MEDIA_KEY_SHORTCUTS, MediaControls, MediaPlayer, MediaProvider, MediaRemoteControl, ScreenOrientationController, ShakaProviderLoader, TextRenderers, TextTrackList, TimeRange, VideoProviderLoader, VideoQualityList, VimeoProviderLoader, YouTubeProviderLoader, boundTime, canChangeVolume, canFullscreen, canOrientScreen, canPlayHLSNatively, canRotateScreen, canUsePictureInPicture, canUseVideoPresentation, getTimeRangesEnd, getTimeRangesStart, isAudioProvider, isDASHProvider, isGoogleCastProvider, isHLSProvider, isHTMLAudioElement, isHTMLIFrameElement, isHTMLMediaElement, isHTMLVideoElement, isShakaProvider, isVideoProvider, isVideoQualitySrc, isVimeoProvider, isYouTubeProvider, mediaState, normalizeTimeIntervals, softResetMediaState, updateTimeIntervals } from './chunks/vidstack-C7cOO99t.js';
export { AUDIO_EXTENSIONS, AUDIO_TYPES, DASH_VIDEO_EXTENSIONS, DASH_VIDEO_TYPES, HLS_VIDEO_EXTENSIONS, HLS_VIDEO_TYPES, VIDEO_EXTENSIONS, VIDEO_TYPES, canGoogleCastSrc, findActiveCue, getDownloadFile, isAudioSrc, isCueActive, isDASHSrc, isHLSSrc, isMediaStream, isVideoSrc, mediaContext, watchActiveTextTrack, watchCueTextChange } from './chunks/vidstack-DLU3cjcp.js';
import { TextTrackSymbol } from './chunks/vidstack-Bs028Qqo.js';
export { TextTrack, isTrackCaptionKind, parseJSONCaptionsFile } from './chunks/vidstack-Bs028Qqo.js';
export { sortVideoQualities } from './chunks/vidstack-BOTZD4tC.js';
import { Thumbnail, Slider } from './chunks/vidstack-CExq7Mod.js';
export { ARIAKeyShortcuts, AirPlayButton, AudioRadioGroup, CaptionButton, CaptionsRadioGroup, DEFAULT_PLAYBACK_RATES, FullscreenButton, LiveButton, Menu, MenuButton, MenuItem, MenuItems, MenuPortal, MuteButton, PIPButton, PlayButton, Poster, QualityRadioGroup, Radio, SeekButton, SliderController, SliderPreview, SliderValue, SpeedRadioGroup, ThumbnailsLoader, Time, TimeSlider, VolumeSlider, formatSpokenTime, formatTime, menuPortalContext, sliderContext, sliderState, updateSliderPreviewPlacement } from './chunks/vidstack-CExq7Mod.js';
export { AudioGainRadioGroup, AudioGainSlider, Captions, ChaptersRadioGroup, Controls, ControlsGroup, DEFAULT_AUDIO_GAINS, Gesture, GoogleCastButton, MediaAnnouncer, QualitySlider, RadioGroup, SliderChapters, SliderVideo, SpeedSlider, ToggleButton, Tooltip, TooltipContent, TooltipTrigger } from './chunks/vidstack-Dhu9ZITt.js';
export { usePlyrLayoutClasses } from './chunks/vidstack-DCNhZo_1.js';
import '@floating-ui/dom';

const GROUPED_LOG = Symbol(0);
class GroupedLog {
  constructor(logger, level, title, root, parent) {
    this.logger = logger;
    this.level = level;
    this.title = title;
    this.root = root;
    this.parent = parent;
  }
  [GROUPED_LOG] = true;
  logs = [];
  log(...data) {
    this.logs.push({ data });
    return this;
  }
  labelledLog(label, ...data) {
    this.logs.push({ label, data });
    return this;
  }
  groupStart(title) {
    return new GroupedLog(this.logger, this.level, title, this.root ?? this, this);
  }
  groupEnd() {
    this.parent?.logs.push(this);
    return this.parent ?? this;
  }
  dispatch() {
    return this.logger.dispatch(this.level, this.root ?? this);
  }
}

class Logger {
  #target = null;
  error(...data) {
    return this.dispatch("error", ...data);
  }
  warn(...data) {
    return this.dispatch("warn", ...data);
  }
  info(...data) {
    return this.dispatch("info", ...data);
  }
  debug(...data) {
    return this.dispatch("debug", ...data);
  }
  errorGroup(title) {
    return new GroupedLog(this, "error", title);
  }
  warnGroup(title) {
    return new GroupedLog(this, "warn", title);
  }
  infoGroup(title) {
    return new GroupedLog(this, "info", title);
  }
  debugGroup(title) {
    return new GroupedLog(this, "debug", title);
  }
  setTarget(newTarget) {
    this.#target = newTarget;
  }
  dispatch(level, ...data) {
    return this.#target?.dispatchEvent(
      new DOMEvent("vds-log", {
        bubbles: true,
        composed: true,
        detail: { level, data }
      })
    ) || false;
  }
}

class LibASSTextRenderer {
  constructor(loader, config) {
    this.loader = loader;
    this.config = config;
  }
  priority = 1;
  #instance = null;
  #track = null;
  #typeRE = /(ssa|ass)$/;
  canRender(track, video) {
    return !!video && !!track.src && (isString(track.type) && this.#typeRE.test(track.type) || this.#typeRE.test(track.src));
  }
  attach(video) {
    if (!video) return;
    this.loader().then(async (mod) => {
      this.#instance = new mod.default({
        ...this.config,
        video,
        subUrl: this.#track?.src || ""
      });
      new EventsController(this.#instance).add("ready", () => {
        const canvas = this.#instance?._canvas;
        if (canvas) canvas.style.pointerEvents = "none";
      }).add("error", (event) => {
        if (!this.#track) return;
        this.#track[TextTrackSymbol.readyState] = 3;
        this.#track.dispatchEvent(
          new DOMEvent("error", {
            trigger: event,
            detail: event.error
          })
        );
      });
    });
  }
  changeTrack(track) {
    if (!track || track.readyState === 3) {
      this.#freeTrack();
    } else if (this.#track !== track) {
      this.#instance?.setTrackByUrl(track.src);
      this.#track = track;
    }
  }
  detach() {
    this.#freeTrack();
  }
  #freeTrack() {
    this.#instance?.freeTrack();
    this.#track = null;
  }
}

class SliderThumbnail extends Thumbnail {
  #slider;
  onAttach(el) {
    this.#slider = useState(Slider.state);
  }
  getTime() {
    const { duration, clipStartTime } = this.media.$state;
    return clipStartTime() + this.#slider.pointerRate() * duration();
  }
}

export { LibASSTextRenderer, Logger, Slider, SliderThumbnail, Thumbnail };
