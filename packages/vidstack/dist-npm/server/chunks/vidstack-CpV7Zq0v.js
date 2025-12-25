import { createContext, useContext, prop, Component, computed, provideContext, signal, isBoolean, effect, setAttribute, uppercaseFirstChar, isNil, isString, noop, isFunction, unwrap, isArray, camelToKebabCase, tick, peek, isKeyboardClick, toggleClass, Host, listenEvent } from './vidstack-Wn3NH5Sg.js';
import { useMediaContext, watchColorScheme, useMediaState, getDownloadFile, appendParamsToURL, watchActiveTextTrack, useResizeObserver, useActive, useTransitionActive, isHTMLElement, createSlot } from './vidstack-DLU3cjcp.js';
import { $signal, LayoutIconsLoader, Icon, SlotManager } from './vidstack-BvWwluXZ.js';
import { LitElement } from './vidstack-CwTj4H1w.js';
import { html } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { keyed } from 'lit-html/directives/keyed.js';
import { $ariaBool, sortVideoQualities } from './vidstack-BOTZD4tC.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

const defaultLayoutContext = createContext();
function useDefaultLayoutContext() {
  return useContext(defaultLayoutContext);
}

const defaultLayoutProps = {
  colorScheme: "system",
  download: null,
  customIcons: false,
  disableTimeSlider: false,
  menuContainer: null,
  menuGroup: "bottom",
  noAudioGain: false,
  noGestures: false,
  noKeyboardAnimations: false,
  noModal: false,
  noScrubGesture: false,
  playbackRates: { min: 0, max: 2, step: 0.25 },
  audioGains: { min: 0, max: 300, step: 25 },
  seekStep: 10,
  sliderChaptersMinWidth: 325,
  hideQualityBitrate: false,
  smallWhen: false,
  thumbnails: null,
  translations: null,
  when: false
};

class DefaultLayout extends Component {
  static props = defaultLayoutProps;
  #media;
  #when = computed(() => {
    const when = this.$props.when();
    return this.#matches(when);
  });
  #smallWhen = computed(() => {
    const when = this.$props.smallWhen();
    return this.#matches(when);
  });
  get isMatch() {
    return this.#when();
  }
  get isSmallLayout() {
    return this.#smallWhen();
  }
  onSetup() {
    this.#media = useMediaContext();
    this.setAttributes({
      "data-match": this.#when,
      "data-sm": () => this.#smallWhen() ? "" : null,
      "data-lg": () => !this.#smallWhen() ? "" : null,
      "data-size": () => this.#smallWhen() ? "sm" : "lg",
      "data-no-scrub-gesture": this.$props.noScrubGesture
    });
    provideContext(defaultLayoutContext, {
      ...this.$props,
      when: this.#when,
      smallWhen: this.#smallWhen,
      userPrefersAnnouncements: signal(true),
      userPrefersKeyboardAnimations: signal(true),
      menuPortal: signal(null)
    });
  }
  onAttach(el) {
    watchColorScheme(el, this.$props.colorScheme);
  }
  #matches(query) {
    return query !== "never" && (isBoolean(query) ? query : computed(() => query(this.#media.player.state))());
  }
}
const defaultlayout__proto = DefaultLayout.prototype;
prop(defaultlayout__proto, "isMatch");
prop(defaultlayout__proto, "isSmallLayout");

let DefaultAudioLayout$1 = class DefaultAudioLayout extends DefaultLayout {
  static props = {
    ...super.props,
    when: ({ viewType }) => viewType === "audio",
    smallWhen: ({ width }) => width < 576
  };
};

function setLayoutName(name, isMatch) {
  effect(() => {
    const { player } = useMediaContext(), el = player.el;
    el && setAttribute(el, "data-layout", isMatch() && name);
    return () => el?.removeAttribute("data-layout");
  });
}

function i18n(translations, word) {
  return translations()?.[word] ?? word;
}

function DefaultAnnouncer() {
  return $signal(() => {
    const { translations, userPrefersAnnouncements } = useDefaultLayoutContext();
    if (!userPrefersAnnouncements()) return null;
    return html`<media-announcer .translations=${$signal(translations)}></media-announcer>`;
  });
}

function IconSlot(name, classes = "") {
  return html`<slot
    name=${`${name}-icon`}
    data-class=${`vds-icon vds-${name}-icon${classes ? ` ${classes}` : ""}`}
  ></slot>`;
}
function IconSlots(names) {
  return names.map((name) => IconSlot(name));
}

function $i18n(translations, word) {
  return $signal(() => i18n(translations, word));
}

function DefaultAirPlayButton({ tooltip }) {
  const { translations } = useDefaultLayoutContext(), { remotePlaybackState } = useMediaState(), $label = $signal(() => {
    const airPlayText = i18n(translations, "AirPlay"), stateText = uppercaseFirstChar(remotePlaybackState());
    return `${airPlayText} ${stateText}`;
  }), $airPlayText = $i18n(translations, "AirPlay");
  return html`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${$label}>
          ${IconSlot("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${tooltip}>
        <span class="vds-airplay-tooltip-text">${$airPlayText}</span>
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultGoogleCastButton({ tooltip }) {
  const { translations } = useDefaultLayoutContext(), { remotePlaybackState } = useMediaState(), $label = $signal(() => {
    const googleCastText = i18n(translations, "Google Cast"), stateText = uppercaseFirstChar(remotePlaybackState());
    return `${googleCastText} ${stateText}`;
  }), $googleCastText = $i18n(translations, "Google Cast");
  return html`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${$label}>
          ${IconSlot("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${tooltip}>
        <span class="vds-google-cast-tooltip-text">${$googleCastText}</span>
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultPlayButton({ tooltip }) {
  const { translations } = useDefaultLayoutContext(), $playText = $i18n(translations, "Play"), $pauseText = $i18n(translations, "Pause");
  return html`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${$i18n(translations, "Play")}
        >
          ${IconSlots(["play", "pause", "replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${tooltip}>
        <span class="vds-play-tooltip-text">${$playText}</span>
        <span class="vds-pause-tooltip-text">${$pauseText}</span>
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultMuteButton({
  tooltip,
  ref: ref$1 = noop
}) {
  const { translations } = useDefaultLayoutContext(), $muteText = $i18n(translations, "Mute"), $unmuteText = $i18n(translations, "Unmute");
  return html`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${$i18n(translations, "Mute")}
          ${ref(ref$1)}
        >
          ${IconSlots(["mute", "volume-low", "volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${tooltip}>
        <span class="vds-mute-tooltip-text">${$unmuteText}</span>
        <span class="vds-unmute-tooltip-text">${$muteText}</span>
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultCaptionButton({ tooltip }) {
  const { translations } = useDefaultLayoutContext(), $ccOnText = $i18n(translations, "Closed-Captions On"), $ccOffText = $i18n(translations, "Closed-Captions Off");
  return html`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${$i18n(translations, "Captions")}
        >
          ${IconSlots(["cc-on", "cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${tooltip}>
        <span class="vds-cc-on-tooltip-text">${$ccOffText}</span>
        <span class="vds-cc-off-tooltip-text">${$ccOnText}</span>
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultPIPButton() {
  const { translations } = useDefaultLayoutContext(), $enterText = $i18n(translations, "Enter PiP"), $exitText = $i18n(translations, "Exit PiP");
  return html`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${$i18n(translations, "PiP")}
        >
          ${IconSlots(["pip-enter", "pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${$enterText}</span>
        <span class="vds-pip-exit-tooltip-text">${$exitText}</span>
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultFullscreenButton({ tooltip }) {
  const { translations } = useDefaultLayoutContext(), $enterText = $i18n(translations, "Enter Fullscreen"), $exitText = $i18n(translations, "Exit Fullscreen");
  return html`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${$i18n(translations, "Fullscreen")}
        >
          ${IconSlots(["fs-enter", "fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${tooltip}>
        <span class="vds-fs-enter-tooltip-text">${$enterText}</span>
        <span class="vds-fs-exit-tooltip-text">${$exitText}</span>
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultSeekButton({
  backward,
  tooltip
}) {
  const { translations, seekStep } = useDefaultLayoutContext(), seekText = !backward ? "Seek Forward" : "Seek Backward", $label = $i18n(translations, seekText), $seconds = () => (backward ? -1 : 1) * seekStep();
  return html`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${$signal($seconds)}
          aria-label=${$label}
        >
          ${!backward ? IconSlot("seek-forward") : IconSlot("seek-backward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${tooltip}>
        ${$i18n(translations, seekText)}
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultLiveButton() {
  const { translations } = useDefaultLayoutContext(), { live } = useMediaState(), $label = $i18n(translations, "Skip To Live"), $liveText = $i18n(translations, "LIVE");
  return live() ? html`
        <media-live-button class="vds-live-button" aria-label=${$label}>
          <span class="vds-live-button-text">${$liveText}</span>
        </media-live-button>
      ` : null;
}
function DefaultDownloadButton() {
  return $signal(() => {
    const { download, translations } = useDefaultLayoutContext(), $download = download();
    if (isNil($download)) return null;
    const { source, title } = useMediaState(), $src = source(), file = getDownloadFile({
      title: title(),
      src: $src,
      download: $download
    });
    return isString(file?.url) ? html`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${$i18n(translations, "Download")}
                href=${appendParamsToURL(file.url, { download: file.name })}
                download=${file.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${$i18n(translations, "Download")}
            </media-tooltip-content>
          </media-tooltip>
        ` : null;
  });
}

function DefaultCaptions() {
  const { translations } = useDefaultLayoutContext();
  return html`
    <media-captions
      class="vds-captions"
      .exampleText=${$i18n(translations, "Captions look like this")}
    ></media-captions>
  `;
}

function DefaultControlsSpacer() {
  return html`<div class="vds-controls-spacer"></div>`;
}

function MenuPortal(container, template) {
  return html`
    <media-menu-portal .container=${$signal(container)} disabled="fullscreen">
      ${template}
    </media-menu-portal>
  `;
}
function createMenuContainer(layoutEl, rootSelector, className, isSmallLayout) {
  let root = isString(rootSelector) ? document.querySelector(rootSelector) : rootSelector;
  if (!root) root = layoutEl?.closest("dialog");
  if (!root) root = document.body;
  const container = document.createElement("div");
  container.style.display = "contents";
  container.classList.add(className);
  root.append(container);
  effect(() => {
    if (!container) return;
    const { viewType } = useMediaState(), isSmall = isSmallLayout();
    setAttribute(container, "data-view-type", viewType());
    setAttribute(container, "data-sm", isSmall);
    setAttribute(container, "data-lg", !isSmall);
    setAttribute(container, "data-size", isSmall ? "sm" : "lg");
  });
  const { colorScheme } = useDefaultLayoutContext();
  watchColorScheme(container, colorScheme);
  return container;
}

function DefaultChaptersMenu({
  placement,
  tooltip,
  portal
}) {
  const { textTracks } = useMediaContext(), { viewType, seekableStart, seekableEnd } = useMediaState(), {
    translations,
    thumbnails,
    menuPortal,
    noModal,
    menuGroup,
    smallWhen: smWhen
  } = useDefaultLayoutContext(), $disabled = computed(() => {
    const $startTime = seekableStart(), $endTime = seekableEnd(), $track = signal(null);
    watchActiveTextTrack(textTracks, "chapters", $track.set);
    const cues = $track()?.cues.filter(
      (cue) => cue.startTime <= $endTime && cue.endTime >= $startTime
    );
    return !cues?.length;
  });
  if ($disabled()) return null;
  const $placement = computed(
    () => noModal() ? unwrap(placement) : !smWhen() ? unwrap(placement) : null
  ), $offset = computed(
    () => !smWhen() && menuGroup() === "bottom" && viewType() === "video" ? 26 : 0
  ), $isOpen = signal(false);
  function onOpen() {
    $isOpen.set(true);
  }
  function onClose() {
    $isOpen.set(false);
  }
  const items = html`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${$signal($placement)}
      offset=${$signal($offset)}
    >
      ${$signal(() => {
    if (!$isOpen()) return null;
    return html`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${$signal(thumbnails)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `;
  })}
    </media-menu-items>
  `;
  return html`
    <media-menu class="vds-chapters-menu vds-menu" @open=${onOpen} @close=${onClose}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${$i18n(translations, "Chapters")}
          >
            ${IconSlot("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${isFunction(tooltip) ? $signal(tooltip) : tooltip}
        >
          ${$i18n(translations, "Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${MenuPortal(menuPortal, items) }
    </media-menu>
  `;
}

const FONT_COLOR_OPTION = {
  type: "color"
};
const FONT_FAMILY_OPTION = {
  type: "radio",
  values: {
    "Monospaced Serif": "mono-serif",
    "Proportional Serif": "pro-serif",
    "Monospaced Sans-Serif": "mono-sans",
    "Proportional Sans-Serif": "pro-sans",
    Casual: "casual",
    Cursive: "cursive",
    "Small Capitals": "capitals"
  }
};
const FONT_SIZE_OPTION = {
  type: "slider",
  min: 0,
  max: 400,
  step: 25,
  upIcon: null,
  downIcon: null
};
const FONT_OPACITY_OPTION = {
  type: "slider",
  min: 0,
  max: 100,
  step: 5,
  upIcon: null,
  downIcon: null
};
const FONT_TEXT_SHADOW_OPTION = {
  type: "radio",
  values: ["None", "Drop Shadow", "Raised", "Depressed", "Outline"]
};
const FONT_DEFAULTS = {
  fontFamily: "pro-sans",
  fontSize: "100%",
  textColor: "#ffffff",
  textOpacity: "100%",
  textShadow: "none",
  textBg: "#000000",
  textBgOpacity: "100%",
  displayBg: "#000000",
  displayBgOpacity: "0%"
};
const FONT_SIGNALS = Object.keys(FONT_DEFAULTS).reduce(
  (prev, type) => ({
    ...prev,
    [type]: signal(FONT_DEFAULTS[type])
  }),
  {}
);
function onFontReset() {
  for (const type of Object.keys(FONT_SIGNALS)) {
    const defaultValue = FONT_DEFAULTS[type];
    FONT_SIGNALS[type].set(defaultValue);
  }
}

let sectionId = 0;
function DefaultMenuSection({ label = "", value = "", children }) {
  if (!label) {
    return html`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${children}</div>
      </div>
    `;
  }
  const id = `vds-menu-section-${++sectionId}`;
  return html`
    <section class="vds-menu-section" role="group" aria-labelledby=${id}>
      <div class="vds-menu-section-title">
        <header id=${id}>${label}</header>
        ${value ? html`<div class="vds-menu-section-value">${value}</div>` : null}
      </div>
      <div class="vds-menu-section-body">${children}</div>
    </section>
  `;
}
function DefaultMenuItem({ label, children }) {
  return html`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${label}</div>
      ${children}
    </div>
  `;
}
function DefaultMenuButton({
  label,
  icon,
  hint
}) {
  return html`
    <media-menu-button class="vds-menu-item">
      ${IconSlot("menu-arrow-left", "vds-menu-close-icon")}
      ${icon ? IconSlot(icon, "vds-menu-item-icon") : null}
      <span class="vds-menu-item-label">${$signal(label)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${hint ? $signal(hint) : null} </span>
      ${IconSlot("menu-arrow-right", "vds-menu-open-icon")}
    </media-menu-button>
  `;
}
function DefaultRadioGroup({
  value = null,
  options,
  hideLabel = false,
  children = null,
  onChange = null
}) {
  function renderRadio(option) {
    const { value: value2, label: content } = option;
    return html`
      <media-radio class="vds-radio" value=${value2}>
        ${IconSlot("menu-radio-check")}
        ${!hideLabel ? html`
              <span class="vds-radio-label" data-part="label">
                ${isString(content) ? content : $signal(content)}
              </span>
            ` : null}
        ${isFunction(children) ? children(option) : children}
      </media-radio>
    `;
  }
  return html`
    <media-radio-group
      class="vds-radio-group"
      value=${isString(value) ? value : value ? $signal(value) : ""}
      @change=${onChange}
    >
      ${isArray(options) ? options.map(renderRadio) : $signal(() => options().map(renderRadio))}
    </media-radio-group>
  `;
}
function createRadioOptions(entries) {
  return isArray(entries) ? entries.map((entry) => ({ label: entry, value: entry.toLowerCase() })) : Object.keys(entries).map((label) => ({ label, value: entries[label] }));
}

function DefaultSliderParts() {
  return html`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `;
}
function DefaultSliderSteps() {
  return html`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `;
}
function DefaultMenuSliderItem({
  label = null,
  value = null,
  upIcon = "",
  downIcon = "",
  children,
  isMin,
  isMax
}) {
  const hasTitle = label || value, content = [
    downIcon ? IconSlot(downIcon, "down") : null,
    children,
    upIcon ? IconSlot(upIcon, "up") : null
  ];
  return html`
    <div
      class=${`vds-menu-item vds-menu-slider-item${hasTitle ? " group" : ""}`}
      data-min=${$signal(() => isMin() ? "" : null)}
      data-max=${$signal(() => isMax() ? "" : null)}
    >
      ${hasTitle ? html`
            <div class="vds-menu-slider-title">
              ${[
    label ? html`<div>${label}</div>` : null,
    value ? html`<div>${value}</div>` : null
  ]}
            </div>
            <div class="vds-menu-slider-body">${content}</div>
          ` : content}
    </div>
  `;
}

const FONT_SIZE_OPTION_WITH_ICONS = {
  ...FONT_SIZE_OPTION,
  upIcon: "menu-opacity-up",
  downIcon: "menu-opacity-down"
};
const FONT_OPACITY_OPTION_WITH_ICONS = {
  ...FONT_OPACITY_OPTION,
  upIcon: "menu-opacity-up",
  downIcon: "menu-opacity-down"
};
function DefaultFontMenu() {
  return $signal(() => {
    const { hasCaptions } = useMediaState(), { translations } = useDefaultLayoutContext();
    if (!hasCaptions()) return null;
    return html`
      <media-menu class="vds-font-menu vds-menu">
        ${DefaultMenuButton({
      label: () => i18n(translations, "Caption Styles")
    })}
        <media-menu-items class="vds-menu-items">
          ${[
      DefaultMenuSection({
        label: $i18n(translations, "Font"),
        children: [DefaultFontFamilyMenu(), DefaultFontSizeSlider()]
      }),
      DefaultMenuSection({
        label: $i18n(translations, "Text"),
        children: [
          DefaultTextColorInput(),
          DefaultTextShadowMenu(),
          DefaultTextOpacitySlider()
        ]
      }),
      DefaultMenuSection({
        label: $i18n(translations, "Text Background"),
        children: [DefaultTextBgInput(), DefaultTextBgOpacitySlider()]
      }),
      DefaultMenuSection({
        label: $i18n(translations, "Display Background"),
        children: [DefaultDisplayBgInput(), DefaultDisplayOpacitySlider()]
      }),
      DefaultMenuSection({
        children: [DefaultResetMenuItem()]
      })
    ]}
        </media-menu-items>
      </media-menu>
    `;
  });
}
function DefaultFontFamilyMenu() {
  return DefaultFontSetting({
    label: "Family",
    option: FONT_FAMILY_OPTION,
    type: "fontFamily"
  });
}
function DefaultFontSizeSlider() {
  return DefaultFontSetting({
    label: "Size",
    option: FONT_SIZE_OPTION_WITH_ICONS,
    type: "fontSize"
  });
}
function DefaultTextColorInput() {
  return DefaultFontSetting({
    label: "Color",
    option: FONT_COLOR_OPTION,
    type: "textColor"
  });
}
function DefaultTextOpacitySlider() {
  return DefaultFontSetting({
    label: "Opacity",
    option: FONT_OPACITY_OPTION_WITH_ICONS,
    type: "textOpacity"
  });
}
function DefaultTextShadowMenu() {
  return DefaultFontSetting({
    label: "Shadow",
    option: FONT_TEXT_SHADOW_OPTION,
    type: "textShadow"
  });
}
function DefaultTextBgInput() {
  return DefaultFontSetting({
    label: "Color",
    option: FONT_COLOR_OPTION,
    type: "textBg"
  });
}
function DefaultTextBgOpacitySlider() {
  return DefaultFontSetting({
    label: "Opacity",
    option: FONT_OPACITY_OPTION_WITH_ICONS,
    type: "textBgOpacity"
  });
}
function DefaultDisplayBgInput() {
  return DefaultFontSetting({
    label: "Color",
    option: FONT_COLOR_OPTION,
    type: "displayBg"
  });
}
function DefaultDisplayOpacitySlider() {
  return DefaultFontSetting({
    label: "Opacity",
    option: FONT_OPACITY_OPTION_WITH_ICONS,
    type: "displayBgOpacity"
  });
}
function DefaultResetMenuItem() {
  const { translations } = useDefaultLayoutContext(), $label = () => i18n(translations, "Reset");
  return html`
    <button class="vds-menu-item" role="menuitem" @click=${onFontReset}>
      <span class="vds-menu-item-label">${$signal($label)}</span>
    </button>
  `;
}
function DefaultFontSetting({ label, option, type }) {
  const { player } = useMediaContext(), { translations } = useDefaultLayoutContext(), $currentValue = FONT_SIGNALS[type], $label = () => i18n(translations, label);
  function notify() {
    tick();
    player.dispatchEvent(new Event("vds-font-change"));
  }
  if (option.type === "color") {
    let onColorChange2 = function(event) {
      $currentValue.set(event.target.value);
      notify();
    };
    return DefaultMenuItem({
      label: $signal($label),
      children: html`
        <input
          class="vds-color-picker"
          type="color"
          .value=${$signal($currentValue)}
          @input=${onColorChange2}
        />
      `
    });
  }
  if (option.type === "slider") {
    let onSliderValueChange2 = function(event) {
      $currentValue.set(event.detail + "%");
      notify();
    };
    const { min, max, step, upIcon, downIcon } = option;
    return DefaultMenuSliderItem({
      label: $signal($label),
      value: $signal($currentValue),
      upIcon,
      downIcon,
      isMin: () => $currentValue() === min + "%",
      isMax: () => $currentValue() === max + "%",
      children: html`
        <media-slider
          class="vds-slider"
          min=${min}
          max=${max}
          step=${step}
          key-step=${step}
          .value=${$signal(() => parseInt($currentValue()))}
          aria-label=${$signal($label)}
          @value-change=${onSliderValueChange2}
          @drag-value-change=${onSliderValueChange2}
        >
          ${DefaultSliderParts()}${DefaultSliderSteps()}
        </media-slider>
      `
    });
  }
  const radioOptions = createRadioOptions(option.values), $hint = () => {
    const value = $currentValue(), label2 = radioOptions.find((radio) => radio.value === value)?.label || "";
    return i18n(translations, isString(label2) ? label2 : label2());
  };
  return html`
    <media-menu class=${`vds-${camelToKebabCase(type)}-menu vds-menu`}>
      ${DefaultMenuButton({ label: $label, hint: $hint })}
      <media-menu-items class="vds-menu-items">
        ${DefaultRadioGroup({
    value: $currentValue,
    options: radioOptions,
    onChange({ detail: value }) {
      $currentValue.set(value);
      notify();
    }
  })}
      </media-menu-items>
    </media-menu>
  `;
}

function DefaultMenuCheckbox({
  label,
  checked,
  defaultChecked = false,
  storageKey,
  onChange
}) {
  const { translations } = useDefaultLayoutContext(), savedValue = storageKey ? localStorage.getItem(storageKey) : null, $checked = signal(!!(savedValue ?? defaultChecked)), $active = signal(false), $ariaChecked = $signal($ariaBool($checked)), $label = $i18n(translations, label);
  if (storageKey) onChange(peek($checked));
  if (checked) {
    effect(() => void $checked.set(checked()));
  }
  function onPress(event) {
    if (event?.button === 1) return;
    $checked.set((checked2) => !checked2);
    if (storageKey) localStorage.setItem(storageKey, $checked() ? "1" : "");
    onChange($checked(), event);
    $active.set(false);
  }
  function onKeyDown(event) {
    if (isKeyboardClick(event)) onPress();
  }
  function onActive(event) {
    if (event.button !== 0) return;
    $active.set(true);
  }
  return html`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${$label}
      aria-checked=${$ariaChecked}
      data-active=${$signal(() => $active() ? "" : null)}
      @pointerup=${onPress}
      @pointerdown=${onActive}
      @keydown=${onKeyDown}
    ></div>
  `;
}

function DefaultAccessibilityMenu() {
  return $signal(() => {
    const { translations } = useDefaultLayoutContext();
    return html`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${DefaultMenuButton({
      label: () => i18n(translations, "Accessibility"),
      icon: "menu-accessibility"
    })}
        <media-menu-items class="vds-menu-items">
          ${[
      DefaultMenuSection({
        children: [
          DefaultAnnouncementsMenuCheckbox(),
          DefaultKeyboardAnimationsMenuCheckbox()
        ]
      }),
      DefaultMenuSection({
        children: [DefaultFontMenu()]
      })
    ]}
        </media-menu-items>
      </media-menu>
    `;
  });
}
function DefaultAnnouncementsMenuCheckbox() {
  const { userPrefersAnnouncements, translations } = useDefaultLayoutContext(), label = "Announcements";
  return DefaultMenuItem({
    label: $i18n(translations, label),
    children: DefaultMenuCheckbox({
      label,
      storageKey: "vds-player::announcements",
      onChange(checked) {
        userPrefersAnnouncements.set(checked);
      }
    })
  });
}
function DefaultKeyboardAnimationsMenuCheckbox() {
  return $signal(() => {
    const { translations, userPrefersKeyboardAnimations, noKeyboardAnimations } = useDefaultLayoutContext(), { viewType } = useMediaState(), $disabled = computed(() => viewType() !== "video" || noKeyboardAnimations());
    if ($disabled()) return null;
    const label = "Keyboard Animations";
    return DefaultMenuItem({
      label: $i18n(translations, label),
      children: DefaultMenuCheckbox({
        label,
        defaultChecked: true,
        storageKey: "vds-player::keyboard-animations",
        onChange(checked) {
          userPrefersKeyboardAnimations.set(checked);
        }
      })
    });
  });
}

function DefaultAudioMenu() {
  return $signal(() => {
    const { noAudioGain, translations } = useDefaultLayoutContext(), { audioTracks, canSetAudioGain } = useMediaState(), $disabled = computed(() => {
      const hasGainSlider = canSetAudioGain() && !noAudioGain();
      return !hasGainSlider && audioTracks().length <= 1;
    });
    if ($disabled()) return null;
    return html`
      <media-menu class="vds-audio-menu vds-menu">
        ${DefaultMenuButton({
      label: () => i18n(translations, "Audio"),
      icon: "menu-audio"
    })}
        <media-menu-items class="vds-menu-items">
          ${[DefaultAudioTracksMenu(), DefaultAudioBoostSection()]}
        </media-menu-items>
      </media-menu>
    `;
  });
}
function DefaultAudioTracksMenu() {
  return $signal(() => {
    const { translations } = useDefaultLayoutContext(), { audioTracks } = useMediaState(), $defaultText = $i18n(translations, "Default"), $disabled = computed(() => audioTracks().length <= 1);
    if ($disabled()) return null;
    return DefaultMenuSection({
      children: html`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${DefaultMenuButton({
        label: () => i18n(translations, "Track")
      })}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${$defaultText}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `
    });
  });
}
function DefaultAudioBoostSection() {
  return $signal(() => {
    const { noAudioGain, translations } = useDefaultLayoutContext(), { canSetAudioGain } = useMediaState(), $disabled = computed(() => !canSetAudioGain() || noAudioGain());
    if ($disabled()) return null;
    const { audioGain } = useMediaState();
    return DefaultMenuSection({
      label: $i18n(translations, "Boost"),
      value: $signal(() => Math.round(((audioGain() ?? 1) - 1) * 100) + "%"),
      children: [
        DefaultMenuSliderItem({
          upIcon: "menu-audio-boost-up",
          downIcon: "menu-audio-boost-down",
          children: DefaultAudioGainSlider(),
          isMin: () => ((audioGain() ?? 1) - 1) * 100 <= getGainMin(),
          isMax: () => ((audioGain() ?? 1) - 1) * 100 === getGainMax()
        })
      ]
    });
  });
}
function DefaultAudioGainSlider() {
  const { translations } = useDefaultLayoutContext(), $label = $i18n(translations, "Boost"), $min = getGainMin, $max = getGainMax, $step = getGainStep;
  return html`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${$label}
      min=${$signal($min)}
      max=${$signal($max)}
      step=${$signal($step)}
      key-step=${$signal($step)}
    >
      ${DefaultSliderParts()}${DefaultSliderSteps()}
    </media-audio-gain-slider>
  `;
}
function getGainMin() {
  const { audioGains } = useDefaultLayoutContext(), gains = audioGains();
  return isArray(gains) ? gains[0] ?? 0 : gains.min;
}
function getGainMax() {
  const { audioGains } = useDefaultLayoutContext(), gains = audioGains();
  return isArray(gains) ? gains[gains.length - 1] ?? 300 : gains.max;
}
function getGainStep() {
  const { audioGains } = useDefaultLayoutContext(), gains = audioGains();
  return isArray(gains) ? gains[1] - gains[0] || 25 : gains.step;
}

function DefaultCaptionsMenu() {
  return $signal(() => {
    const { translations } = useDefaultLayoutContext(), { hasCaptions } = useMediaState(), $offText = $i18n(translations, "Off");
    if (!hasCaptions()) return null;
    return html`
      <media-menu class="vds-captions-menu vds-menu">
        ${DefaultMenuButton({
      label: () => i18n(translations, "Captions"),
      icon: "menu-captions"
    })}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${$offText}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `;
  });
}

function DefaultPlaybackMenu() {
  return $signal(() => {
    const { translations } = useDefaultLayoutContext();
    return html`
      <media-menu class="vds-playback-menu vds-menu">
        ${DefaultMenuButton({
      label: () => i18n(translations, "Playback"),
      icon: "menu-playback"
    })}
        <media-menu-items class="vds-menu-items">
          ${[
      DefaultMenuSection({
        children: DefaultLoopCheckbox()
      }),
      DefaultSpeedMenuSection(),
      DefaultQualityMenuSection()
    ]}
        </media-menu-items>
      </media-menu>
    `;
  });
}
function DefaultLoopCheckbox() {
  const { remote } = useMediaContext(), { translations } = useDefaultLayoutContext(), label = "Loop";
  return DefaultMenuItem({
    label: $i18n(translations, label),
    children: DefaultMenuCheckbox({
      label,
      storageKey: "vds-player::user-loop",
      onChange(checked, trigger) {
        remote.userPrefersLoopChange(checked, trigger);
      }
    })
  });
}
function DefaultSpeedMenuSection() {
  return $signal(() => {
    const { translations } = useDefaultLayoutContext(), { canSetPlaybackRate, playbackRate } = useMediaState();
    if (!canSetPlaybackRate()) return null;
    return DefaultMenuSection({
      label: $i18n(translations, "Speed"),
      value: $signal(
        () => playbackRate() === 1 ? i18n(translations, "Normal") : playbackRate() + "x"
      ),
      children: [
        DefaultMenuSliderItem({
          upIcon: "menu-speed-up",
          downIcon: "menu-speed-down",
          children: DefaultSpeedSlider(),
          isMin: () => playbackRate() === getSpeedMin(),
          isMax: () => playbackRate() === getSpeedMax()
        })
      ]
    });
  });
}
function getSpeedMin() {
  const { playbackRates } = useDefaultLayoutContext(), rates = playbackRates();
  return isArray(rates) ? rates[0] ?? 0 : rates.min;
}
function getSpeedMax() {
  const { playbackRates } = useDefaultLayoutContext(), rates = playbackRates();
  return isArray(rates) ? rates[rates.length - 1] ?? 2 : rates.max;
}
function getSpeedStep() {
  const { playbackRates } = useDefaultLayoutContext(), rates = playbackRates();
  return isArray(rates) ? rates[1] - rates[0] || 0.25 : rates.step;
}
function DefaultSpeedSlider() {
  const { translations } = useDefaultLayoutContext(), $label = $i18n(translations, "Speed"), $min = getSpeedMin, $max = getSpeedMax, $step = getSpeedStep;
  return html`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${$label}
      min=${$signal($min)}
      max=${$signal($max)}
      step=${$signal($step)}
      key-step=${$signal($step)}
    >
      ${DefaultSliderParts()}${DefaultSliderSteps()}
    </media-speed-slider>
  `;
}
function DefaultAutoQualityCheckbox() {
  const { remote, qualities } = useMediaContext(), { autoQuality, canSetQuality, qualities: $qualities } = useMediaState(), { translations } = useDefaultLayoutContext(), label = "Auto", $disabled = computed(() => !canSetQuality() || $qualities().length <= 1);
  if ($disabled()) return null;
  return DefaultMenuItem({
    label: $i18n(translations, label),
    children: DefaultMenuCheckbox({
      label,
      checked: autoQuality,
      onChange(checked, trigger) {
        if (checked) {
          remote.requestAutoQuality(trigger);
        } else {
          remote.changeQuality(qualities.selectedIndex, trigger);
        }
      }
    })
  });
}
function DefaultQualityMenuSection() {
  return $signal(() => {
    const { hideQualityBitrate, translations } = useDefaultLayoutContext(), { canSetQuality, qualities, quality } = useMediaState(), $disabled = computed(() => !canSetQuality() || qualities().length <= 1), $sortedQualities = computed(() => sortVideoQualities(qualities()));
    if ($disabled()) return null;
    return DefaultMenuSection({
      label: $i18n(translations, "Quality"),
      value: $signal(() => {
        const height = quality()?.height, bitrate = !hideQualityBitrate() ? quality()?.bitrate : null, bitrateText = bitrate && bitrate > 0 ? `${(bitrate / 1e6).toFixed(2)} Mbps` : null, autoText = i18n(translations, "Auto");
        return height ? `${height}p${bitrateText ? ` (${bitrateText})` : ""}` : autoText;
      }),
      children: [
        DefaultMenuSliderItem({
          upIcon: "menu-quality-up",
          downIcon: "menu-quality-down",
          children: DefaultQualitySlider(),
          isMin: () => $sortedQualities()[0] === quality(),
          isMax: () => $sortedQualities().at(-1) === quality()
        }),
        DefaultAutoQualityCheckbox()
      ]
    });
  });
}
function DefaultQualitySlider() {
  const { translations } = useDefaultLayoutContext(), $label = $i18n(translations, "Quality");
  return html`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${$label}>
      ${DefaultSliderParts()}${DefaultSliderSteps()}
    </media-quality-slider>
  `;
}

function DefaultSettingsMenu({
  placement,
  portal,
  tooltip
}) {
  return $signal(() => {
    const { viewType } = useMediaState(), {
      translations,
      menuPortal,
      noModal,
      menuGroup,
      smallWhen: smWhen
    } = useDefaultLayoutContext(), $placement = computed(
      () => noModal() ? unwrap(placement) : !smWhen() ? unwrap(placement) : null
    ), $offset = computed(
      () => !smWhen() && menuGroup() === "bottom" && viewType() === "video" ? 26 : 0
    ), $isOpen = signal(false);
    function onOpen() {
      $isOpen.set(true);
    }
    function onClose() {
      $isOpen.set(false);
    }
    const items = html`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${$signal($placement)}
        offset=${$signal($offset)}
      >
        ${$signal(() => {
      if (!$isOpen()) {
        return null;
      }
      return [
        DefaultPlaybackMenu(),
        DefaultAccessibilityMenu(),
        DefaultAudioMenu(),
        DefaultCaptionsMenu()
      ];
    })}
      </media-menu-items>
    `;
    return html`
      <media-menu class="vds-settings-menu vds-menu" @open=${onOpen} @close=${onClose}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${$i18n(translations, "Settings")}
            >
              ${IconSlot("menu-settings", "vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${isFunction(tooltip) ? $signal(tooltip) : tooltip}
          >
            ${$i18n(translations, "Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${MenuPortal(menuPortal, items) }
      </media-menu>
    `;
  });
}

function DefaultVolumePopup({
  orientation,
  tooltip
}) {
  return $signal(() => {
    const { pointer, muted, canSetVolume } = useMediaState();
    if (pointer() === "coarse" && !muted()) return null;
    if (!canSetVolume()) {
      return DefaultMuteButton({ tooltip });
    }
    const $rootRef = signal(void 0), $isRootActive = useActive($rootRef);
    return html`
      <div class="vds-volume" ?data-active=${$signal($isRootActive)} ${ref($rootRef.set)}>
        ${DefaultMuteButton({ tooltip })}
        <div class="vds-volume-popup">${DefaultVolumeSlider({ orientation })}</div>
      </div>
    `;
  });
}
function DefaultVolumeSlider({ orientation } = {}) {
  const { translations } = useDefaultLayoutContext(), $label = $i18n(translations, "Volume");
  return html`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${$label}
      orientation=${ifDefined(orientation)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `;
}
function DefaultTimeSlider() {
  const $ref = signal(void 0), $width = signal(0), {
    thumbnails,
    translations,
    sliderChaptersMinWidth,
    disableTimeSlider,
    seekStep,
    noScrubGesture
  } = useDefaultLayoutContext(), $label = $i18n(translations, "Seek"), $isDisabled = $signal(disableTimeSlider), $isChaptersDisabled = $signal(() => $width() < sliderChaptersMinWidth()), $thumbnails = $signal(thumbnails);
  useResizeObserver($ref, () => {
    const el = $ref();
    el && $width.set(el.clientWidth);
  });
  return html`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${$label}
      key-step=${$signal(seekStep)}
      ?disabled=${$isDisabled}
      ?no-swipe-gesture=${$signal(noScrubGesture)}
      ${ref($ref.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${$isChaptersDisabled}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${$thumbnails}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `;
}

function DefaultTimeGroup() {
  return html`
    <div class="vds-time-group">
      ${$signal(() => {
    const { duration } = useMediaState();
    if (!duration()) return null;
    return [
      html`<media-time class="vds-time" type="current"></media-time>`,
      html`<div class="vds-time-divider">/</div>`,
      html`<media-time class="vds-time" type="duration"></media-time>`
    ];
  })}
    </div>
  `;
}
function DefaultTimeInvert() {
  return $signal(() => {
    const { live, duration } = useMediaState();
    return live() ? DefaultLiveButton() : duration() ? html`<media-time class="vds-time" type="current" toggle remainder></media-time>` : null;
  });
}
function DefaultTimeInfo() {
  return $signal(() => {
    const { live } = useMediaState();
    return live() ? DefaultLiveButton() : DefaultTimeGroup();
  });
}

function DefaultTitle() {
  return $signal(() => {
    const { textTracks } = useMediaContext(), { title, started } = useMediaState(), $hasChapters = signal(null);
    watchActiveTextTrack(textTracks, "chapters", $hasChapters.set);
    return $hasChapters() && (started() || !title()) ? DefaultChapterTitle() : html`<media-title class="vds-chapter-title"></media-title>`;
  });
}
function DefaultChapterTitle() {
  return html`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`;
}

function DefaultAudioLayout() {
  return [
    DefaultAnnouncer(),
    DefaultCaptions(),
    html`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[
      DefaultSeekButton({ backward: true, tooltip: "top start" }),
      DefaultPlayButton({ tooltip: "top" }),
      DefaultSeekButton({ tooltip: "top" }),
      DefaultAudioTitle(),
      DefaultTimeSlider(),
      DefaultTimeInvert(),
      DefaultVolumePopup({ orientation: "vertical", tooltip: "top" }),
      DefaultCaptionButton({ tooltip: "top" }),
      DefaultDownloadButton(),
      DefaultAirPlayButton({ tooltip: "top" }),
      DefaultAudioMenus()
    ]}
        </media-controls-group>
      </media-controls>
    `
  ];
}
function DefaultAudioTitle() {
  return $signal(() => {
    let $ref = signal(void 0), $isTextOverflowing = signal(false), media = useMediaContext(), { title, started, currentTime, ended } = useMediaState(), { translations } = useDefaultLayoutContext(), $isTransitionActive = useTransitionActive($ref), $isContinued = () => started() || currentTime() > 0;
    const $title = () => {
      const word = ended() ? "Replay" : $isContinued() ? "Continue" : "Play";
      return `${i18n(translations, word)}: ${title()}`;
    };
    effect(() => {
      if ($isTransitionActive() && document.activeElement === document.body) {
        media.player.el?.focus({ preventScroll: true });
      }
    });
    function onResize() {
      const el = $ref(), isOverflowing = !!el && !$isTransitionActive() && el.clientWidth < el.children[0].clientWidth;
      el && toggleClass(el, "vds-marquee", isOverflowing);
      $isTextOverflowing.set(isOverflowing);
    }
    function Title() {
      return html`
        <span class="vds-title-text">
          ${$signal($title)}${$signal(() => $isContinued() ? DefaultChapterTitle() : null)}
        </span>
      `;
    }
    useResizeObserver($ref, onResize);
    return title() ? html`
          <span class="vds-title" title=${$signal($title)} ${ref($ref.set)}>
            ${[
      Title(),
      $signal(() => $isTextOverflowing() && !$isTransitionActive() ? Title() : null)
    ]}
          </span>
        ` : DefaultControlsSpacer();
  });
}
function DefaultAudioMenus() {
  const placement = "top end";
  return [
    DefaultChaptersMenu({ tooltip: "top", placement, portal: true }),
    DefaultSettingsMenu({ tooltip: "top end", placement, portal: true })
  ];
}

class DefaultLayoutIconsLoader extends LayoutIconsLoader {
  async loadIcons() {
    const paths = (await import('./vidstack-C26K8z_-.js')).icons, icons = {};
    for (const iconName of Object.keys(paths)) {
      icons[iconName] = Icon({ name: iconName, paths: paths[iconName] });
    }
    return icons;
  }
}

class MediaAudioLayoutElement extends Host(LitElement, DefaultAudioLayout$1) {
  static tagName = "media-audio-layout";
  static attrs = {
    smallWhen: {
      converter(value) {
        return value !== "never" && !!value;
      }
    }
  };
  #media;
  #scrubbing = signal(false);
  onSetup() {
    this.forwardKeepAlive = false;
    this.#media = useMediaContext();
    this.classList.add("vds-audio-layout");
    this.#setupWatchScrubbing();
  }
  onConnect() {
    setLayoutName("audio", () => this.isMatch);
    this.#setupMenuContainer();
  }
  render() {
    return $signal(this.#render.bind(this));
  }
  #render() {
    return this.isMatch ? DefaultAudioLayout() : null;
  }
  #setupMenuContainer() {
    const { menuPortal } = useDefaultLayoutContext();
    effect(() => {
      if (!this.isMatch) return;
      const container = createMenuContainer(
        this,
        this.menuContainer,
        "vds-audio-layout",
        () => this.isSmallLayout
      ), roots = container ? [this, container] : [this];
      const iconsManager = this.$props.customIcons() ? new SlotManager(roots) : new DefaultLayoutIconsLoader(roots);
      iconsManager.connect();
      menuPortal.set(container);
      return () => {
        container.remove();
        menuPortal.set(null);
      };
    });
  }
  #setupWatchScrubbing() {
    const { pointer } = this.#media.$state;
    effect(() => {
      if (pointer() !== "coarse") return;
      effect(this.#watchScrubbing.bind(this));
    });
  }
  #watchScrubbing() {
    if (!this.#scrubbing()) {
      listenEvent(this, "pointerdown", this.#onStartScrubbing.bind(this));
      return;
    }
    listenEvent(window, "pointerdown", this.#onStopScrubbing.bind(this));
  }
  #onStartScrubbing(event) {
    const { target } = event, hasTimeSlider = !!(isHTMLElement(target) && target.closest(".vds-time-slider"));
    if (!hasTimeSlider) return;
    event.stopImmediatePropagation();
    this.setAttribute("data-scrubbing", "");
    this.#scrubbing.set(true);
  }
  #onStopScrubbing() {
    this.#scrubbing.set(false);
    this.removeAttribute("data-scrubbing");
  }
}

class DefaultVideoLayout extends DefaultLayout {
  static props = {
    ...super.props,
    when: ({ viewType }) => viewType === "video",
    smallWhen: ({ width, height }) => width < 576 || height < 380
  };
}

function DefaultKeyboardDisplay() {
  return $signal(() => {
    const media = useMediaContext(), { noKeyboardAnimations, userPrefersKeyboardAnimations } = useDefaultLayoutContext(), $disabled = computed(() => noKeyboardAnimations() || !userPrefersKeyboardAnimations());
    if ($disabled()) {
      return null;
    }
    const visible = signal(false), { lastKeyboardAction } = media.$state;
    effect(() => {
      visible.set(!!lastKeyboardAction());
      const id = setTimeout(() => visible.set(false), 500);
      return () => {
        visible.set(false);
        window.clearTimeout(id);
      };
    });
    const $actionDataAttr = computed(() => {
      const action = lastKeyboardAction()?.action;
      return action && visible() ? camelToKebabCase(action) : null;
    });
    const $classList = computed(() => `vds-kb-action${!visible() ? " hidden" : ""}`), $text = computed(getText), $iconSlot = computed(() => {
      const name = getIconName();
      return name ? createSlot(name) : null;
    });
    function Icon() {
      const $slot = $iconSlot();
      if (!$slot) return null;
      return html`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${$slot}</div>
        </div>
      `;
    }
    return html`
      <div class=${$signal($classList)} data-action=${$signal($actionDataAttr)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${$signal($text)}</div>
        </div>
        ${$signal(() => keyed(lastKeyboardAction(), Icon()))}
      </div>
    `;
  });
}
function getText() {
  const { $state } = useMediaContext(), action = $state.lastKeyboardAction()?.action, audioGain = $state.audioGain() ?? 1;
  switch (action) {
    case "toggleMuted":
      return $state.muted() ? "0%" : getVolumeText($state.volume(), audioGain);
    case "volumeUp":
    case "volumeDown":
      return getVolumeText($state.volume(), audioGain);
    default:
      return "";
  }
}
function getVolumeText(volume, gain) {
  return `${Math.round(volume * gain * 100)}%`;
}
function getIconName() {
  const { $state } = useMediaContext(), action = $state.lastKeyboardAction()?.action;
  switch (action) {
    case "togglePaused":
      return !$state.paused() ? "kb-play-icon" : "kb-pause-icon";
    case "toggleMuted":
      return $state.muted() || $state.volume() === 0 ? "kb-mute-icon" : $state.volume() >= 0.5 ? "kb-volume-up-icon" : "kb-volume-down-icon";
    case "toggleFullscreen":
      return `kb-fs-${$state.fullscreen() ? "enter" : "exit"}-icon`;
    case "togglePictureInPicture":
      return `kb-pip-${$state.pictureInPicture() ? "enter" : "exit"}-icon`;
    case "toggleCaptions":
      return $state.hasCaptions() ? `kb-cc-${$state.textTrack() ? "on" : "off"}-icon` : null;
    case "volumeUp":
      return "kb-volume-up-icon";
    case "volumeDown":
      return "kb-volume-down-icon";
    case "seekForward":
      return "kb-seek-forward-icon";
    case "seekBackward":
      return "kb-seek-backward-icon";
    default:
      return null;
  }
}

function DefaultVideoLayoutLarge() {
  return [
    DefaultAnnouncer(),
    DefaultVideoGestures(),
    DefaultBufferingIndicator(),
    DefaultKeyboardDisplay(),
    DefaultCaptions(),
    html`<div class="vds-scrim"></div>`,
    html`
      <media-controls class="vds-controls">
        ${[
      DefaultControlsGroupTop(),
      DefaultControlsSpacer(),
      html`<media-controls-group class="vds-controls-group"></media-controls-group>`,
      DefaultControlsSpacer(),
      html`
            <media-controls-group class="vds-controls-group">
              ${DefaultTimeSlider()}
            </media-controls-group>
          `,
      html`
            <media-controls-group class="vds-controls-group">
              ${[
        DefaultPlayButton({ tooltip: "top start" }),
        DefaultVolumePopup({ orientation: "horizontal", tooltip: "top" }),
        DefaultTimeInfo(),
        DefaultTitle(),
        DefaultCaptionButton({ tooltip: "top" }),
        DefaultBottomMenuGroup(),
        DefaultAirPlayButton({ tooltip: "top" }),
        DefaultGoogleCastButton({ tooltip: "top" }),
        DefaultDownloadButton(),
        DefaultPIPButton(),
        DefaultFullscreenButton({ tooltip: "top end" })
      ]}
            </media-controls-group>
          `
    ]}
      </media-controls>
    `
  ];
}
function DefaultBottomMenuGroup() {
  return $signal(() => {
    const { menuGroup } = useDefaultLayoutContext();
    return menuGroup() === "bottom" ? DefaultVideoMenus() : null;
  });
}
function DefaultControlsGroupTop() {
  return html`
    <media-controls-group class="vds-controls-group">
      ${$signal(() => {
    const { menuGroup } = useDefaultLayoutContext();
    return menuGroup() === "top" ? [DefaultControlsSpacer(), DefaultVideoMenus()] : null;
  })}
    </media-controls-group>
  `;
}
function DefaultVideoLayoutSmall() {
  return [
    DefaultAnnouncer(),
    DefaultVideoGestures(),
    DefaultBufferingIndicator(),
    DefaultCaptions(),
    DefaultKeyboardDisplay(),
    html`<div class="vds-scrim"></div>`,
    html`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[
      DefaultAirPlayButton({ tooltip: "top start" }),
      DefaultGoogleCastButton({ tooltip: "bottom start" }),
      DefaultControlsSpacer(),
      DefaultCaptionButton({ tooltip: "bottom" }),
      DefaultDownloadButton(),
      DefaultVideoMenus(),
      DefaultVolumePopup({ orientation: "vertical", tooltip: "bottom end" })
    ]}
        </media-controls-group>

        ${DefaultControlsSpacer()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[
      DefaultControlsSpacer(),
      DefaultPlayButton({ tooltip: "top" }),
      DefaultControlsSpacer()
    ]}
        </media-controls-group>

        ${DefaultControlsSpacer()}

        <media-controls-group class="vds-controls-group">
          ${[DefaultTimeInfo(), DefaultTitle(), DefaultFullscreenButton({ tooltip: "top end" })]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${DefaultTimeSlider()}
        </media-controls-group>
      </media-controls>
    `,
    StartDuration()
  ];
}
function DefaultVideoLoadLayout() {
  return html`
    <div class="vds-load-container">
      ${[DefaultBufferingIndicator(), DefaultPlayButton({ tooltip: "top" })]}
    </div>
  `;
}
function StartDuration() {
  return $signal(() => {
    const { duration } = useMediaState();
    if (duration() === 0) return null;
    return html`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `;
  });
}
function DefaultBufferingIndicator() {
  return html`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `;
}
function DefaultVideoMenus() {
  const { menuGroup, smallWhen: smWhen } = useDefaultLayoutContext(), $side = () => menuGroup() === "top" || smWhen() ? "bottom" : "top", $tooltip = computed(() => `${$side()} ${menuGroup() === "top" ? "end" : "center"}`), $placement = computed(() => `${$side()} end`);
  return [
    DefaultChaptersMenu({ tooltip: $tooltip, placement: $placement, portal: true }),
    DefaultSettingsMenu({ tooltip: $tooltip, placement: $placement, portal: true })
  ];
}
function DefaultVideoGestures() {
  return $signal(() => {
    const { noGestures } = useDefaultLayoutContext();
    if (noGestures()) return null;
    return html`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `;
  });
}

class MediaVideoLayoutElement extends Host(LitElement, DefaultVideoLayout) {
  static tagName = "media-video-layout";
  static attrs = {
    smallWhen: {
      converter(value) {
        return value !== "never" && !!value;
      }
    }
  };
  #media;
  onSetup() {
    this.forwardKeepAlive = false;
    this.#media = useMediaContext();
    this.classList.add("vds-video-layout");
  }
  onConnect() {
    setLayoutName("video", () => this.isMatch);
    this.#setupMenuContainer();
  }
  render() {
    return $signal(this.#render.bind(this));
  }
  #setupMenuContainer() {
    const { menuPortal } = useDefaultLayoutContext();
    effect(() => {
      if (!this.isMatch) return;
      const container = createMenuContainer(
        this,
        this.menuContainer,
        "vds-video-layout",
        () => this.isSmallLayout
      ), roots = container ? [this, container] : [this];
      const iconsManager = this.$props.customIcons() ? new SlotManager(roots) : new DefaultLayoutIconsLoader(roots);
      iconsManager.connect();
      menuPortal.set(container);
      return () => {
        container.remove();
        menuPortal.set(null);
      };
    });
  }
  #render() {
    const { load } = this.#media.$props, { canLoad, streamType, nativeControls } = this.#media.$state;
    return !nativeControls() && this.isMatch ? load() === "play" && !canLoad() ? DefaultVideoLoadLayout() : streamType() === "unknown" ? DefaultBufferingIndicator() : this.isSmallLayout ? DefaultVideoLayoutSmall() : DefaultVideoLayoutLarge() : null;
  }
}

export { MediaAudioLayoutElement, MediaVideoLayoutElement };
