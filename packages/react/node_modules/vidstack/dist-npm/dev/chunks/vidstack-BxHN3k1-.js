import { Host, effect, setAttribute } from './vidstack-Bu2kfzUd.js';
import { Poster } from './vidstack-B6ABa56X.js';
import './vidstack-DFImIcIL.js';
import './vidstack-WPqG_DWb.js';
import './vidstack-vIAU-deh.js';

class MediaPosterElement extends Host(HTMLElement, Poster) {
  static tagName = "media-poster";
  static attrs = {
    crossOrigin: "crossorigin"
  };
  #img = document.createElement("img");
  onSetup() {
    this.$state.img.set(this.#img);
  }
  onConnect() {
    const { src, alt, crossOrigin } = this.$state;
    effect(() => {
      const { loading, hidden } = this.$state;
      this.#img.style.display = loading() || hidden() ? "none" : "";
    });
    effect(() => {
      setAttribute(this.#img, "alt", alt());
      setAttribute(this.#img, "crossorigin", crossOrigin());
      setAttribute(this.#img, "src", src());
    });
    if (this.#img.parentNode !== this) {
      this.prepend(this.#img);
    }
  }
}

export { MediaPosterElement };
