import { useState, effect } from './chunks/vidstack-Wn3NH5Sg.js';
export { defineCustomElement } from './chunks/vidstack-Wn3NH5Sg.js';
export { MediaAnnouncerElement, MediaAudioGainRadioGroupElement, MediaAudioGainSliderElement, MediaCaptionsElement, MediaChapterTitleElement, MediaChaptersRadioGroupElement, MediaControlsElement, MediaControlsGroupElement, MediaGestureElement, MediaGoogleCastButtonElement, MediaLayoutElement, MediaMenuPortalElement, MediaQualitySliderElement, MediaRadioGroupElement, MediaSliderChaptersElement, MediaSliderElement, MediaSliderStepsElement, MediaSliderVideoElement, MediaSpeedSliderElement, MediaSpinnerElement, MediaTitleElement, MediaToggleButtonElement, MediaTooltipContentElement, MediaTooltipElement, MediaTooltipTriggerElement } from './chunks/vidstack-CmfRYoOT.js';
export { MediaPlayerElement, MediaProviderElement } from './chunks/vidstack-BycsxEtP.js';
import { MediaThumbnailElement } from './chunks/vidstack-DSPX35v_.js';
export { MediaAirPlayButtonElement, MediaAudioRadioGroupElement, MediaCaptionButtonElement, MediaCaptionsRadioGroupElement, MediaFullscreenButtonElement, MediaLiveButtonElement, MediaMenuButtonElement, MediaMenuElement, MediaMenuItemElement, MediaMenuItemsElement, MediaMuteButtonElement, MediaPIPButtonElement, MediaPlayButtonElement, MediaPosterElement, MediaQualityRadioGroupElement, MediaRadioElement, MediaSeekButtonElement, MediaSliderPreviewElement, MediaSliderValueElement, MediaSpeedRadioGroupElement, MediaTimeElement, MediaTimeSliderElement, MediaVolumeSliderElement } from './chunks/vidstack-DSPX35v_.js';
export { MediaAudioLayoutElement, MediaVideoLayoutElement } from './chunks/vidstack-CpV7Zq0v.js';
export { MediaPlyrLayoutElement } from './chunks/vidstack-BINCQrRV.js';
import { Slider } from './chunks/vidstack-CExq7Mod.js';
import { useMediaContext } from './chunks/vidstack-DLU3cjcp.js';
import './chunks/vidstack-Dhu9ZITt.js';
import './chunks/vidstack-Bs028Qqo.js';
import './chunks/vidstack-BOTZD4tC.js';
import 'lit-html';
import './chunks/vidstack-CwTj4H1w.js';
import './chunks/vidstack-C7cOO99t.js';
import './chunks/vidstack-BvWwluXZ.js';
import 'lit-html/directives/if-defined.js';
import 'lit-html/directives/unsafe-svg.js';
import 'lit-html/async-directive.js';
import 'lit-html/directives/ref.js';
import 'lit-html/directives/keyed.js';
import './chunks/vidstack-DCNhZo_1.js';
import 'lit-html/directives/unsafe-html.js';
import '@floating-ui/dom';

class MediaSliderThumbnailElement extends MediaThumbnailElement {
  static tagName = "media-slider-thumbnail";
  #media;
  #slider;
  onSetup() {
    super.onSetup();
    this.#media = useMediaContext();
    this.#slider = useState(Slider.state);
  }
  onConnect() {
    super.onConnect();
    effect(this.#watchTime.bind(this));
  }
  #watchTime() {
    const { duration, clipStartTime } = this.#media.$state;
    this.time = clipStartTime() + this.#slider.pointerRate() * duration();
  }
}

export { MediaSliderThumbnailElement, MediaThumbnailElement };
