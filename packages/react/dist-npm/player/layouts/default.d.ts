import * as React from 'react';
import { ReadSignal, WriteSignal, TooltipPlacement } from '../../types/vidstack.js';
export { DefaultLayoutTranslations, DefaultLayoutWord } from '../../types/vidstack.js';
import { DefaultLayoutProps, DefaultLayoutIcon, DefaultKeyboardDisplayIcons } from '../../types/media-layout.d.js';
export { DefaultAirPlayButtonIcons, DefaultCaptionButtonIcons, DefaultDownloadButtonIcons, DefaultFullscreenButtonIcons, DefaultGoogleCastButtonIcons, DefaultLayoutIconProps, DefaultLayoutIcons, DefaultMenuIcons, DefaultMuteButtonIcons, DefaultPIPButtonIcons, DefaultPlayButtonIcons, DefaultSeekButtonIcons, defaultLayoutIcons } from '../../types/media-layout.d.js';
import { PrimitivePropsWithRef } from '../../types/nodes.d.js';
import 'media-captions';
import 'dashjs';
import 'hls.js';

type SlotPositions<Name extends string> = `before${Capitalize<Name>}` | Name | `after${Capitalize<Name>}`;
type Slots<Names extends string> = {
    [slotName in SlotPositions<Names>]?: React.ReactNode;
};
type DefaultLayoutSlotName = 'bufferingIndicator' | 'captionButton' | 'captions' | 'title' | 'chapterTitle' | 'currentTime' | 'timeDivider' | 'endTime' | 'fullscreenButton' | 'liveButton' | 'livePlayButton' | 'muteButton' | 'pipButton' | 'airPlayButton' | 'googleCastButton' | 'downloadButton' | 'playButton' | 'loadButton' | 'seekBackwardButton' | 'seekForwardButton' | 'startDuration' | 'timeSlider' | 'volumeSlider' | 'topControlsGroupStart' | 'topControlsGroupCenter' | 'topControlsGroupEnd' | 'centerControlsGroupStart' | 'centerControlsGroupCenter' | 'centerControlsGroupEnd' | DefaultLayoutMenuSlotName;
type DefaultLayoutMenuSlotName = 'chaptersMenu' | 'settingsMenu'
/** @deprecated - use `settingsMenuItemsStart` */
 | 'settingsMenuStartItems'
/** @deprecated - use `settingsMenuItemsEnd` */
 | 'settingsMenuEndItems' | 'settingsMenuItemsStart' | 'settingsMenuItemsEnd' | 'playbackMenuItemsStart' | 'playbackMenuItemsEnd' | 'playbackMenuLoop' | 'accessibilityMenuItemsStart' | 'accessibilityMenuItemsEnd' | 'audioMenuItemsStart' | 'audioMenuItemsEnd' | 'captionsMenuItemsStart' | 'captionsMenuItemsEnd';
interface DefaultLayoutSlots extends Slots<DefaultLayoutSlotName> {
}
interface DefaultAudioLayoutSlots extends DefaultLayoutSlots {
}
interface DefaultVideoLayoutSlots extends DefaultLayoutSlots {
    smallLayout?: DefaultLayoutSlots;
    largeLayout?: DefaultLayoutSlots;
}

declare const DefaultLayoutContext: React.Context<DefaultLayoutContext>;
interface DefaultLayoutContext extends DefaultLayoutProps {
    layoutEl: ReadSignal<HTMLElement | null>;
    isSmallLayout: boolean;
    userPrefersAnnouncements: WriteSignal<boolean>;
    userPrefersKeyboardAnimations: WriteSignal<boolean>;
}
declare function useDefaultLayoutContext(): DefaultLayoutContext;
declare function useDefaultLayoutWord(word: string): any;
declare function i18n(translations: any, word: string): any;

interface DefaultAudioLayoutProps extends DefaultLayoutProps<DefaultAudioLayoutSlots> {
}
/**
 * The audio layout is our production-ready UI that's displayed when the media view type is set to
 * 'audio'. It includes support for audio tracks, slider chapters, captions, live streams
 * and more out of the box.
 *
 * @attr data-match - Whether this layout is being used.
 * @attr data-sm - The small layout is active
 * @attr data-lg - The large layout is active.
 * @attr data-size - The active layout size (sm or lg).
 * @example
 * ```tsx
 * <MediaPlayer src="audio.mp3">
 *   <MediaProvider />
 *   <DefaultAudioLayout icons={defaultLayoutIcons} />
 * </MediaPlayer>
 * ```
 */
declare function DefaultAudioLayout(props: DefaultAudioLayoutProps): React.JSX.Element;
declare namespace DefaultAudioLayout {
    var displayName: string;
}

interface DefaultVideoLayoutProps extends DefaultLayoutProps<DefaultVideoLayoutSlots> {
}
/**
 * The video layout is our production-ready UI that's displayed when the media view type is set to
 * 'video'. It includes support for picture-in-picture, fullscreen, slider chapters, slider
 * previews, captions, audio/quality settings, live streams, and more out of the box.
 *
 * @attr data-match - Whether this layout is being used.
 * @attr data-sm - The small layout is active
 * @attr data-lg - The large layout is active.
 * @attr data-size - The active layout size (sm or lg).
 * @example
 * ```tsx
 * <MediaPlayer src="video.mp4">
 *   <MediaProvider />
 *   <DefaultVideoLayout thumbnails="/thumbnails.vtt" icons={defaultLayoutIcons} />
 * </MediaPlayer>
 * ```
 */
declare function DefaultVideoLayout(props: DefaultVideoLayoutProps): React.JSX.Element;
declare namespace DefaultVideoLayout {
    var displayName: string;
}

declare function DefaultVideoLargeLayout(): React.JSX.Element;
declare namespace DefaultVideoLargeLayout {
    var displayName: string;
}

declare function DefaultVideoSmallLayout(): React.JSX.Element;
declare namespace DefaultVideoSmallLayout {
    var displayName: string;
}

declare function DefaultVideoGestures(): React.JSX.Element | null;
declare namespace DefaultVideoGestures {
    var displayName: string;
}

declare function DefaultBufferingIndicator(): React.JSX.Element;
declare namespace DefaultBufferingIndicator {
    var displayName: string;
}

interface DefaultMenuCheckboxProps {
    label: string;
    checked?: boolean;
    storageKey?: string;
    defaultChecked?: boolean;
    onChange?(checked: boolean, trigger?: Event): void;
}
declare function DefaultMenuCheckbox({ label, checked, storageKey, defaultChecked, onChange, }: DefaultMenuCheckboxProps): React.JSX.Element;
declare namespace DefaultMenuCheckbox {
    var displayName: string;
}

interface DefaultMenuSectionProps {
    label?: string;
    value?: string;
    children: React.ReactNode;
}
declare function DefaultMenuSection({ label, value, children }: DefaultMenuSectionProps): React.JSX.Element;
declare namespace DefaultMenuSection {
    var displayName: string;
}

interface DefaultMenuButtonProps {
    label: string;
    hint?: string;
    disabled?: boolean;
    Icon?: DefaultLayoutIcon;
}
declare function DefaultMenuButton({ label, hint, Icon, disabled }: DefaultMenuButtonProps): React.JSX.Element;
declare namespace DefaultMenuButton {
    var displayName: string;
}

interface DefaultMenuItemProps {
    label: string;
    children: React.ReactNode;
}
declare function DefaultMenuItem({ label, children }: DefaultMenuItemProps): React.JSX.Element;
declare namespace DefaultMenuItem {
    var displayName: string;
}

interface DefaultMenuRadioGroupProps {
    value: string;
    options: {
        label: string;
        value: string;
    }[];
    onChange?(newValue: string): void;
}
declare function DefaultMenuRadioGroup({ value, options, onChange }: DefaultMenuRadioGroupProps): React.JSX.Element;
declare namespace DefaultMenuRadioGroup {
    var displayName: string;
}

declare function createRadioOptions(entries: string[] | Record<string, string>): {
    label: string;
    value: string;
}[];

interface DefaultMenuSliderItemProps {
    label?: string;
    value?: string;
    UpIcon?: DefaultLayoutIcon;
    DownIcon?: DefaultLayoutIcon;
    children: React.ReactNode;
    isMin: boolean;
    isMax: boolean;
}
declare function DefaultMenuSliderItem({ label, value, UpIcon, DownIcon, children, isMin, isMax, }: DefaultMenuSliderItemProps): React.JSX.Element;
declare namespace DefaultMenuSliderItem {
    var displayName: string;
}

declare function DefaultSliderParts(): React.JSX.Element;
declare namespace DefaultSliderParts {
    var displayName: string;
}

declare function DefaultSliderSteps(): React.JSX.Element;
declare namespace DefaultSliderSteps {
    var displayName: string;
}

interface DefaultTooltipProps {
    content: string;
    placement?: TooltipPlacement;
    children: React.ReactNode;
}
declare function DefaultTooltip({ content, placement, children }: DefaultTooltipProps): React.JSX.Element;
declare namespace DefaultTooltip {
    var displayName: string;
}

interface DefaultKeyboardDisplayProps extends Omit<PrimitivePropsWithRef<'div'>, 'disabled'> {
    icons: Partial<DefaultKeyboardDisplayIcons>;
}
declare const DefaultKeyboardDisplay: React.ForwardRefExoticComponent<Omit<DefaultKeyboardDisplayProps, "ref"> & React.RefAttributes<HTMLElement>>;

export { DefaultAudioLayout, DefaultBufferingIndicator, DefaultKeyboardDisplay, DefaultKeyboardDisplayIcons, DefaultLayoutContext, DefaultLayoutIcon, DefaultLayoutProps, DefaultMenuButton, DefaultMenuCheckbox, DefaultMenuItem, DefaultMenuRadioGroup, DefaultMenuSection, DefaultMenuSliderItem, DefaultSliderParts, DefaultSliderSteps, DefaultTooltip, DefaultVideoGestures, DefaultVideoLargeLayout, DefaultVideoLayout, DefaultVideoSmallLayout, createRadioOptions, i18n, useDefaultLayoutContext, useDefaultLayoutWord };
export type { DefaultAudioLayoutProps, DefaultAudioLayoutSlots, DefaultKeyboardDisplayProps, DefaultLayoutMenuSlotName, DefaultLayoutSlotName, DefaultLayoutSlots, DefaultMenuButtonProps, DefaultMenuCheckboxProps, DefaultMenuItemProps, DefaultMenuRadioGroupProps, DefaultMenuSectionProps, DefaultMenuSliderItemProps, DefaultTooltipProps, DefaultVideoLayoutProps, DefaultVideoLayoutSlots };
