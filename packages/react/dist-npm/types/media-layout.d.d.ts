import * as React from 'react';
import { FileDownloadInfo, MediaPlayerQuery, ThumbnailSrc, DefaultLayoutTranslations } from './vidstack.js';
import { PrimitivePropsWithRef } from './nodes.d.js';

declare const defaultLayoutIcons: DefaultLayoutIcons;
interface DefaultLayoutIconProps extends React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> {
}
interface DefaultLayoutIcon {
    (props: DefaultLayoutIconProps): React.ReactNode;
}
interface DefaultAirPlayButtonIcons {
    Default: DefaultLayoutIcon;
    Connecting?: DefaultLayoutIcon;
    Connected?: DefaultLayoutIcon;
}
interface DefaultGoogleCastButtonIcons {
    Default: DefaultLayoutIcon;
    Connecting?: DefaultLayoutIcon;
    Connected?: DefaultLayoutIcon;
}
interface DefaultPlayButtonIcons {
    Play: DefaultLayoutIcon;
    Pause: DefaultLayoutIcon;
    Replay: DefaultLayoutIcon;
}
interface DefaultMuteButtonIcons {
    Mute: DefaultLayoutIcon;
    VolumeLow: DefaultLayoutIcon;
    VolumeHigh: DefaultLayoutIcon;
}
interface DefaultCaptionButtonIcons {
    On: DefaultLayoutIcon;
    Off: DefaultLayoutIcon;
}
interface DefaultPIPButtonIcons {
    Enter: DefaultLayoutIcon;
    Exit: DefaultLayoutIcon;
}
interface DefaultFullscreenButtonIcons {
    Enter: DefaultLayoutIcon;
    Exit: DefaultLayoutIcon;
}
interface DefaultSeekButtonIcons {
    Backward: DefaultLayoutIcon;
    Forward: DefaultLayoutIcon;
}
interface DefaultDownloadButtonIcons {
    Default: DefaultLayoutIcon;
}
interface DefaultMenuIcons {
    Accessibility: DefaultLayoutIcon;
    ArrowLeft: DefaultLayoutIcon;
    ArrowRight: DefaultLayoutIcon;
    Audio: DefaultLayoutIcon;
    AudioBoostUp: DefaultLayoutIcon;
    AudioBoostDown: DefaultLayoutIcon;
    Chapters: DefaultLayoutIcon;
    Captions: DefaultLayoutIcon;
    Playback: DefaultLayoutIcon;
    Settings: DefaultLayoutIcon;
    SpeedUp: DefaultLayoutIcon;
    SpeedDown: DefaultLayoutIcon;
    QualityUp: DefaultLayoutIcon;
    QualityDown: DefaultLayoutIcon;
    FontSizeUp: DefaultLayoutIcon;
    FontSizeDown: DefaultLayoutIcon;
    OpacityUp: DefaultLayoutIcon;
    OpacityDown: DefaultLayoutIcon;
    RadioCheck: DefaultLayoutIcon;
}
interface DefaultKeyboardDisplayIcons {
    Play: DefaultLayoutIcon;
    Pause: DefaultLayoutIcon;
    Mute: DefaultLayoutIcon;
    VolumeUp: DefaultLayoutIcon;
    VolumeDown: DefaultLayoutIcon;
    EnterFullscreen: DefaultLayoutIcon;
    ExitFullscreen: DefaultLayoutIcon;
    EnterPiP: DefaultLayoutIcon;
    ExitPiP: DefaultLayoutIcon;
    CaptionsOn: DefaultLayoutIcon;
    CaptionsOff: DefaultLayoutIcon;
    SeekForward: DefaultLayoutIcon;
    SeekBackward: DefaultLayoutIcon;
}
interface DefaultLayoutIcons {
    AirPlayButton: DefaultAirPlayButtonIcons;
    GoogleCastButton: DefaultGoogleCastButtonIcons;
    PlayButton: DefaultPlayButtonIcons;
    MuteButton: DefaultMuteButtonIcons;
    CaptionButton: DefaultCaptionButtonIcons;
    PIPButton: DefaultPIPButtonIcons;
    FullscreenButton: DefaultFullscreenButtonIcons;
    SeekButton: DefaultSeekButtonIcons;
    DownloadButton?: DefaultDownloadButtonIcons;
    Menu: DefaultMenuIcons;
    KeyboardDisplay?: Partial<DefaultKeyboardDisplayIcons>;
}

interface DefaultLayoutProps<Slots = unknown> extends PrimitivePropsWithRef<'div'> {
    children?: React.ReactNode;
    /**
     * The icons to be rendered and displayed inside the layout.
     */
    icons: DefaultLayoutIcons;
    /**
     * Whether light or dark color theme should be active. Defaults to user operating system
     * preference.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme}
     */
    colorScheme?: 'light' | 'dark' | 'system' | 'default';
    /**
     * Sets the download URL and filename for the download button.
     */
    download?: FileDownloadInfo;
    /**
     * Specifies the number of milliseconds to wait before tooltips are visible after interacting
     * with a control.
     *
     * @defaultValue 700
     */
    showTooltipDelay?: number;
    /**
     * Specifies the number of milliseconds to wait before menus are visible after opening them.
     *
     * @defaultValue 0
     */
    showMenuDelay?: number;
    /**
     * Whether the bitrate should be hidden in the settings quality menu next to each option.
     *
     * @defaultValue false
     */
    hideQualityBitrate?: boolean;
    /**
     * Determines when the small (e.g., mobile) UI should be displayed.
     *
     * @defaultValue `({ width, height }) => width < 576 || height < 380`
     */
    smallLayoutWhen?: boolean | MediaPlayerQuery;
    /**
     * The thumbnails resource.
     *
     * @see {@link https://www.vidstack.io/docs/wc/player/core-concepts/loading#thumbnails}
     */
    thumbnails?: ThumbnailSrc;
    /**
     * Translation map from english to your desired language for words used throughout the layout.
     */
    translations?: Partial<DefaultLayoutTranslations> | null;
    /**
     * A document query selector string or `HTMLElement` to mount menus inside.
     *
     * @defaultValue `document.body`
     */
    menuContainer?: string | HTMLElement | null;
    /**
     * Specifies whether menu buttons should be placed in the top or bottom controls group. This
     * only applies to the large video layout.
     */
    menuGroup?: 'top' | 'bottom';
    /**
     * Disable audio boost slider in the settings menu.
     */
    noAudioGain?: boolean;
    /**
     * The audio gain options to be displayed in the settings menu.
     */
    audioGains?: number[] | {
        min: number;
        max: number;
        step: number;
    };
    /**
     * Whether modal menus should be disabled when the small layout is active. A modal menu is
     * a floating panel that floats up from the bottom of the screen (outside of the player). It's
     * enabled by default as it provides a better user experience for touch devices.
     */
    noModal?: boolean;
    /**
     * Whether to disable scrubbing by touch swiping left or right on the player canvas.
     */
    noScrubGesture?: boolean;
    /**
     * The minimum width of the slider to start displaying slider chapters when available.
     */
    sliderChaptersMinWidth?: number;
    /**
     * Whether the time slider should be disabled.
     */
    disableTimeSlider?: boolean;
    /**
     * Whether all gestures such as press to play or seek should not be active.
     */
    noGestures?: boolean;
    /**
     * Whether keyboard actions should not be displayed.
     */
    noKeyboardAnimations?: boolean;
    /**
     * The playback rate options to be displayed in the settings menu.
     */
    playbackRates?: number[] | {
        min: number;
        max: number;
        step: number;
    };
    /**
     * The number of seconds to seek forward or backward when pressing the seek button or using
     * keyboard shortcuts.
     */
    seekStep?: number;
    /**
     * Provide additional content to be inserted in specific positions.
     */
    slots?: Slots;
}

export { defaultLayoutIcons };
export type { DefaultAirPlayButtonIcons, DefaultCaptionButtonIcons, DefaultDownloadButtonIcons, DefaultFullscreenButtonIcons, DefaultGoogleCastButtonIcons, DefaultKeyboardDisplayIcons, DefaultLayoutIcon, DefaultLayoutIconProps, DefaultLayoutIcons, DefaultLayoutProps, DefaultMenuIcons, DefaultMuteButtonIcons, DefaultPIPButtonIcons, DefaultPlayButtonIcons, DefaultSeekButtonIcons };
