/// <reference path="./dom.d.ts" />
/// <reference path="./google-cast.d.ts" />

import { MediaPlayer as MediaPlayer$1, MediaAnnouncer as MediaAnnouncer$1, MediaProvider as MediaProvider$1, Controls, ControlsGroup, Tooltip, TooltipTrigger, TooltipContent, ToggleButton as ToggleButton$1, AirPlayButton as AirPlayButton$1, GoogleCastButton as GoogleCastButton$1, PlayButton as PlayButton$1, CaptionButton as CaptionButton$1, FullscreenButton as FullscreenButton$1, MuteButton as MuteButton$1, PIPButton as PIPButton$1, SeekButton as SeekButton$1, LiveButton as LiveButton$1, Slider, SliderPreview, SliderValue, VolumeSlider, QualitySlider, AudioGainSlider, SpeedSlider, TimeSlider, SliderThumbnail, SliderVideo, SliderChapters, RadioGroup, Radio, Menu, MenuButton, MenuPortal, MenuItems, MenuItem, Gesture as Gesture$1, Captions as Captions$1, Poster as Poster$1, Time as Time$1, Thumbnail as Thumbnail$1, PlayerSrc as PlayerSrc$1, Component, InferEventDetail, WordSeparators, IsNumeric, IsLowerCase, IsUpperCase, InferComponentEvents, InferComponentProps, InferComponentCSSVars, MediaProviderLoader, VTTContent, AnyRecord, State, MediaContext, MediaProviderAdapter, MediaRemoteControl, MediaState, ThumbnailSrc, MediaCrossOrigin, ThumbnailImage, SliderState, SliderOrientation, TextTrack, TextTrackInit, AudioTrack, VideoQuality } from './types/vidstack.js';
export { ARIAKeyShortcuts, AUDIO_EXTENSIONS, AUDIO_TYPES, AirPlayButtonEvents, AnyMediaProvider, AudioGainSliderEvents, AudioGainSliderState, AudioMimeType, AudioProvider, AudioProviderLoader, AudioSrc, AudioSrcMeta, AudioTrackAddEvent, AudioTrackChangeEvent, AudioTrackList, AudioTrackListEvent, AudioTrackListEvents, AudioTrackRemoveEvent, CaptionButtonEvents, ChangeAudioTrackEventDetail, ControlsChangeEvent, ControlsEvents, DASHAdaptationSetRemovedNoCapabilitiesEvent, DASHAllTextTracksAddedEvent, DASHAstInFutureEvent, DASHBaseUrlsUpdatedEvent, DASHBufferLevelUpdatedEvent, DASHBufferLoadedEvent, DASHBufferStalledEvent, DASHBufferStateChangedEvent, DASHCanPlayEvent, DASHCanPlayThroughEvent, DASHCaptionContainerResizeEvent, DASHCaptionRenderedEvent, DASHConformanceViolationEvent, DASHConstructor, DASHConstructorLoader, DASHContentSteeringRequestCompletedEvent, DASHCueEnterEvent, DASHCueExitEvent, DASHDvbFontDownloadAddedEvent, DASHDvbFontDownloadCompleteEvent, DASHDvbFontDownloadFailedEvent, DASHDynamicToStaticEvent, DASHErrorEvent, DASHEventModeOnReceiveEvent, DASHEventModeOnStartEvent, DASHFragmentLoadingAbandonedEvent, DASHFragmentLoadingCompletedEvent, DASHFragmentLoadingProgressEvent, DASHFragmentLoadingStartedEvent, DASHInbandPrftEvent, DASHInstanceCallback, DASHInstanceEvent, DASHLibLoadErrorEvent, DASHLibLoadStartEvent, DASHLibLoadedEvent, DASHLibrary, DASHLogEvent, DASHManagedMediaSourceEndStreamingEvent, DASHManagedMediaSourceStartStreamingEvent, DASHManifestLoadedEvent, DASHManifestLoadingFinishedEvent, DASHManifestLoadingStartedEvent, DASHManifestValidityChangedEvent, DASHMediaEvent, DASHMetricAddedEvent, DASHMetricChangedEvent, DASHMetricUpdatedEvent, DASHMetricsChangedEvent, DASHMimeType, DASHNamespace, DASHNamespaceLoader, DASHPeriodSwitchCompletedEvent, DASHPeriodSwitchStartedEvent, DASHPlaybackEndedEvent, DASHPlaybackErrorEvent, DASHPlaybackLoadedDataEvent, DASHPlaybackMetaDataLoadedEvent, DASHPlaybackNotAllowedEvent, DASHPlaybackPausedEvent, DASHPlaybackPlayingEvent, DASHPlaybackProgressEvent, DASHPlaybackRateChangedEvent, DASHPlaybackSeekedEvent, DASHPlaybackSeekingEvent, DASHPlaybackStalledEvent, DASHPlaybackStartedEvent, DASHPlaybackTimeUpdatedEvent, DASHPlaybackVolumeChangedEvent, DASHPlaybackWaitingEvent, DASHProvider, DASHProviderEvents, DASHProviderLoader, DASHQualityChangeRenderedEvent, DASHQualityChangeRequestedEvent, DASHRepresentationSwitchEvent, DASHSrc, DASHStreamActivatedEvent, DASHStreamDeactivatedEvent, DASHStreamInitializedEvent, DASHStreamInitializingEvent, DASHStreamTeardownCompleteEvent, DASHStreamUpdatedEvent, DASHTextTrackAddedEvent, DASHThroughputMeasurementStoredEvent, DASHTrackChangeRenderedEvent, DASHTtmlParsedEvent, DASHTtmlToParseEvent, DASHUnsupportedEvent, DASH_VIDEO_EXTENSIONS, DASH_VIDEO_TYPES, DEFAULT_AUDIO_GAINS, DEFAULT_PLAYBACK_RATES, FileDownloadInfo, FindMediaPlayerEvent, FindMediaPlayerEventDetail, FullscreenAdapter, FullscreenButtonEvents, FullscreenChangeEvent, FullscreenController, FullscreenErrorEvent, FullscreenEvents, GestureAction, GestureEvent, GestureEventType, GestureEvents, GestureTriggerEvent, GestureWillTriggerEvent, GoogleCastButtonEvents, GoogleCastEvent, GoogleCastEvents, GoogleCastLoadStartEvent, GoogleCastLoadedEvent, GoogleCastLoader, GoogleCastPromptError, GoogleCastPromptErrorCode, GoogleCastPromptErrorEvent, GoogleCastPromptEvent, GoogleCastProvider, HLSAudioTrackLoadedEvent, HLSAudioTrackLoadingEvent, HLSAudioTrackSwitchedEvent, HLSAudioTrackSwitchingEvent, HLSAudioTracksUpdatedEvent, HLSBackBufferReachedEvent, HLSBufferAppendedEvent, HLSBufferAppendingEvent, HLSBufferCodecsEvent, HLSBufferCreatedEvent, HLSBufferEosEvent, HLSBufferFlushedEvent, HLSBufferFlushingEvent, HLSBufferResetEvent, HLSConstructor, HLSConstructorLoader, HLSCuesParsedEvent, HLSDestroyingEvent, HLSErrorEvent, HLSFpsDropEvent, HLSFpsDropLevelCappingEvent, HLSFragBufferedDataEvent, HLSFragChangedEvent, HLSFragDecryptedEvent, HLSFragLoadEmergencyAbortedEvent, HLSFragLoadedEvent, HLSFragLoadingEvent, HLSFragParsedEvent, HLSFragParsingInitSegmentEvent, HLSFragParsingMetadataEvent, HLSFragParsingUserdataEvent, HLSInitPtsFoundEvent, HLSInstanceCallback, HLSInstanceEvent, HLSKeyLoadedEvent, HLSKeyLoadingEvent, HLSLevelLoadedEvent, HLSLevelLoadingEvent, HLSLevelPtsUpdatedEvent, HLSLevelSwitchedEvent, HLSLevelSwitchingEvent, HLSLevelUpdatedEvent, HLSLevelsUpdatedEvent, HLSLibLoadErrorEvent, HLSLibLoadStartEvent, HLSLibLoadedEvent, HLSLibrary, HLSManifestLoadedEvent, HLSManifestLoadingEvent, HLSManifestParsedEvent, HLSMediaAttachedEvent, HLSMediaAttachingEvent, HLSMediaDetachedEvent, HLSMediaDetachingEvent, HLSMediaEvent, HLSMimeType, HLSNonNativeTextTracksFoundEvent, HLSProvider, HLSProviderEvents, HLSProviderLoader, HLSSrc, HLSSubtitleFragProcessedEvent, HLSSubtitleTrackLoadedEvent, HLSSubtitleTrackLoadingEvent, HLSSubtitleTrackSwitchEvent, HLSSubtitleTracksClearedEvent, HLSSubtitleTracksUpdatedEvent, HLSUnsupportedEvent, HLS_VIDEO_EXTENSIONS, HLS_VIDEO_TYPES, HTMLMediaSrc, LibASSConfig, LibASSConstructor, LibASSErrorEvent, LibASSInstance, LibASSInstanceEvents, LibASSModuleLoader, LibASSReadyEvent, LibASSTextRenderer, List, ListAddEvent, ListEvents, ListItem, ListReadonlyChangeEvent, ListRemoveEvent, LocalMediaStorage, LogEvent, LogEventDetail, Logger, LoggerEvents, MEDIA_KEY_SHORTCUTS, MediaAbortEvent, MediaAirPlayRequestEvent, MediaAnnouncerEvents, MediaAnnouncerState, MediaAnnouncerTranslations, MediaAnnouncerWord, MediaAudioGainChangeEvent, MediaAudioGainChangeRequestEvent, MediaAudioTrackChangeEvent, MediaAudioTrackChangeRequestEvent, MediaAudioTracksChangeEvent, MediaAutoPlayChangeEvent, MediaAutoPlayEvent, MediaAutoPlayEventDetail, MediaAutoPlayFailEvent, MediaAutoPlayFailEventDetail, MediaCanLoadEvent, MediaCanLoadPosterEvent, MediaCanPlayDetail, MediaCanPlayEvent, MediaCanPlayThroughEvent, MediaClipEndChangeRequestEvent, MediaClipStartChangeRequestEvent, MediaControls, MediaControlsChangeEvent, MediaDestroyEvent, MediaDurationChangeEvent, MediaDurationChangeRequestEvent, MediaEmptiedEvent, MediaEndEvent, MediaEndedEvent, MediaEnterFullscreenRequestEvent, MediaEnterPIPRequestEvent, MediaErrorCode, MediaErrorDetail, MediaErrorEvent, MediaEvent, MediaEvents, MediaExitFullscreenRequestEvent, MediaExitPIPRequestEvent, MediaFullscreenAdapter, MediaFullscreenChangeEvent, MediaFullscreenErrorEvent, MediaFullscreenRequestTarget, MediaGoogleCastRequestEvent, MediaHidePosterRequestEvent, MediaKeyShortcut, MediaKeyShortcuts, MediaKeyTarget, MediaKeysCallback, MediaLiveChangeEvent, MediaLiveEdgeChangeEvent, MediaLiveEdgeRequestEvent, MediaLoadStartEvent, MediaLoadedDataEvent, MediaLoadedMetadataEvent, MediaLoadingStrategy, MediaLoopChangeEvent, MediaLoopRequestEvent, MediaMuteRequestEvent, MediaOrientationChangeEvent, MediaOrientationLockRequestEvent, MediaOrientationUnlockRequestEvent, MediaPIPChangeEvent, MediaPIPErrorEvent, MediaPauseControlsRequestEvent, MediaPauseEvent, MediaPauseRequestEvent, MediaPlayEvent, MediaPlayFailEvent, MediaPlayRequestEvent, MediaPlayerConnectEvent, MediaPlayerEvents, MediaPlayerQuery, MediaPlayerState, MediaPlayingEvent, MediaPlaysInlineChangeEvent, MediaPosterChangeEvent, MediaPosterLoadingStrategy, MediaPosterStartLoadingRequestEvent, MediaProgressEvent, MediaProgressEventDetail, MediaProviderChangeEvent, MediaProviderLoaderChangeEvent, MediaProviderSetupEvent, MediaProviderState, MediaQualitiesChangeEvent, MediaQualityChangeEvent, MediaQualityChangeRequestEvent, MediaRateChangeEvent, MediaRateChangeRequestEvent, MediaRemotePlaybackChangeEvent, MediaRemotePlaybackChangeEventDetail, MediaReplayEvent, MediaRequestEvents, MediaResumeControlsRequestEvent, MediaSeekRequestEvent, MediaSeekedEvent, MediaSeekingEvent, MediaSeekingRequestEvent, MediaShowPosterRequestEvent, MediaSourceChangeEvent, MediaSourcesChangeEvent, MediaSrc, MediaSrcObject, MediaStalledEvent, MediaStartLoadingRequestEvent, MediaStartedEvent, MediaStateAccessors, MediaStorage, MediaStore, MediaStreamType, MediaStreamTypeChangeEvent, MediaSuspendEvent, MediaTextTrackChangeEvent, MediaTextTrackChangeRequestEvent, MediaTextTracksChangeEvent, MediaTimeChangeEvent, MediaTimeUpdateEvent, MediaTimeUpdateEventDetail, MediaTitleChangeEvent, MediaType, MediaTypeChangeEvent, MediaUnmuteRequestEvent, MediaUserEvents, MediaUserLoopChangeRequestEvent, MediaViewType, MediaViewTypeChangeEvent, MediaVolumeChange, MediaVolumeChangeEvent, MediaVolumeChangeRequestEvent, MediaWaitingEvent, MenuPlacement, MenuPlacementAlign, MenuPlacementSide, MuteButtonEvents, PIPButtonEvents, PlayButtonEvents, PlayerStore, PosterState, QualitySliderEvents, QualitySliderState, RadioChangeEvent, RadioSelectEvent, RemotePlaybackInfo, RemotePlaybackType, ScreenOrientationChangeEvent, ScreenOrientationChangeEventDetail, ScreenOrientationController, ScreenOrientationEvents, ScreenOrientationLockType, ScreenOrientationType, SeekButtonEvents, SerializedVideoQuality, ShakaAdaptationEvent, ShakaBufferingEvent, ShakaConstructor, ShakaConstructorLoader, ShakaError, ShakaErrorEvent, ShakaEvent, ShakaInstanceCallback, ShakaInstanceEvent, ShakaLanguageRole, ShakaLibLoadErrorEvent, ShakaLibLoadStartEvent, ShakaLibLoadedEvent, ShakaLibrary, ShakaLoadedEvent, ShakaLoadingEvent, ShakaManifestParsedEvent, ShakaMediaEvent, ShakaNamespace, ShakaNetworkingEngine, ShakaPlayer, ShakaPlayerAdaptationEvent, ShakaPlayerBufferingEvent, ShakaPlayerErrorEvent, ShakaPlayerLoadedEvent, ShakaPlayerTextChangedEvent, ShakaPlayerTextTrackVisibilityEvent, ShakaPlayerTracksChangedEvent, ShakaPlayerUnloadingEvent, ShakaPlayerVariantChangedEvent, ShakaProvider, ShakaProviderConfig, ShakaProviderEvents, ShakaProviderLoader, ShakaRequest, ShakaRequestFilter, ShakaRequestType, ShakaResponse, ShakaResponseFilter, ShakaStreamingEvent, ShakaTextChangedEvent, ShakaTextTrack, ShakaTextTrackVisibilityEvent, ShakaTracksChangedEvent, ShakaUnloadingEvent, ShakaUnsupportedEvent, ShakaVariantChangedEvent, ShakaVariantTrack, SliderCSSVars, SliderDragEndEvent, SliderDragStartEvent, SliderDragValueChangeEvent, SliderEvent, SliderEvents, SliderPointerValueChangeEvent, SliderValueChangeEvent, SliderVideoCanPlayEvent, SliderVideoErrorEvent, SliderVideoEvents, SliderVideoState, SpeedSliderEvents, SpeedSliderState, Src, TextRenderer, TextRenderers, TextTrackAddCueEvent, TextTrackAddEvent, TextTrackCueChangeEvent, TextTrackErrorEvent, TextTrackEvent, TextTrackEvents, TextTrackList, TextTrackListEvent, TextTrackListEvents, TextTrackListModeChangeEvent, TextTrackLoadEvent, TextTrackLoadStartEvent, TextTrackModeChangeEvent, TextTrackReadyState, TextTrackRemoveCueEvent, TextTrackRemoveEvent, ThumbnailState, TimeInterval, TimeRange, TimeSliderEvents, TimeSliderState, TimeState, TooltipPlacement, TooltipPlacementAlign, TooltipPlacementSide, VIDEO_EXTENSIONS, VIDEO_TYPES, VTTCueInit, VTTRegionInit, VideoMimeType, VideoPresentationChangeEvent, VideoPresentationEvents, VideoProvider, VideoProviderLoader, VideoQualityAddEvent, VideoQualityAutoChangeEvent, VideoQualityChangeEvent, VideoQualityChangeEventDetail, VideoQualityList, VideoQualityListEvent, VideoQualityListEvents, VideoQualityRemoveEvent, VideoSrc, VideoSrcMeta, VimeoProvider, VimeoProviderLoader, VimeoSrc, VolumeSliderEvents, VolumeSliderState, YouTubeProvider, YouTubeProviderLoader, YouTubeSrc, appendTriggerEvent, boundTime, canChangeVolume, canFullscreen, canGoogleCastSrc, canOrientScreen, canPlayHLSNatively, canRotateScreen, canUsePictureInPicture, canUseVideoPresentation, findActiveCue, findTriggerEvent, formatSpokenTime, formatTime, getDownloadFile, getTimeRangesEnd, getTimeRangesStart, hasTriggerEvent, isAudioProvider, isAudioSrc, isCueActive, isDASHProvider, isDASHSrc, isGoogleCastProvider, isHLSProvider, isHLSSrc, isHTMLAudioElement, isHTMLIFrameElement, isHTMLMediaElement, isHTMLVideoElement, isKeyboardClick, isKeyboardEvent, isMediaStream, isPointerEvent, isShakaProvider, isTrackCaptionKind, isVideoProvider, isVideoQualitySrc, isVideoSrc, isVimeoProvider, isYouTubeProvider, mediaContext, mediaState, normalizeTimeIntervals, parseJSONCaptionsFile, sliderState, softResetMediaState, sortVideoQualities, updateTimeIntervals, walkTriggerEventChain, watchActiveTextTrack, watchCueTextChange } from './types/vidstack.js';
import { RemotionSrc } from './types/types.d.js';
import * as React from 'react';
export { Icon, IconComponent, IconProps } from './types/icon.d.js';
import { CaptionsFileFormat, CaptionsParserFactory, VTTCue } from 'media-captions';
import { PrimitivePropsWithRef } from './types/nodes.d.js';
export { DefaultLayoutProps } from './types/media-layout.d.js';
export { PlyrLayoutProps } from './types/props.d.js';
import 'dashjs';
import 'hls.js';

declare class MediaPlayerInstance extends MediaPlayer$1 {
}
declare class MediaProviderInstance extends MediaProvider$1 {
}
declare class MediaAnnouncerInstance extends MediaAnnouncer$1 {
}
declare class ControlsInstance extends Controls {
}
declare class ControlsGroupInstance extends ControlsGroup {
}
declare class ToggleButtonInstance extends ToggleButton$1 {
}
declare class CaptionButtonInstance extends CaptionButton$1 {
}
declare class FullscreenButtonInstance extends FullscreenButton$1 {
}
declare class LiveButtonInstance extends LiveButton$1 {
}
declare class MuteButtonInstance extends MuteButton$1 {
}
declare class PIPButtonInstance extends PIPButton$1 {
}
declare class PlayButtonInstance extends PlayButton$1 {
}
declare class AirPlayButtonInstance extends AirPlayButton$1 {
}
declare class GoogleCastButtonInstance extends GoogleCastButton$1 {
}
declare class SeekButtonInstance extends SeekButton$1 {
}
declare class TooltipInstance extends Tooltip {
}
declare class TooltipTriggerInstance extends TooltipTrigger {
}
declare class TooltipContentInstance extends TooltipContent {
}
declare class SliderInstance extends Slider {
}
declare class TimeSliderInstance extends TimeSlider {
}
declare class VolumeSliderInstance extends VolumeSlider {
}
declare class AudioGainSliderInstance extends AudioGainSlider {
}
declare class SpeedSliderInstance extends SpeedSlider {
}
declare class QualitySliderInstance extends QualitySlider {
}
declare class SliderThumbnailInstance extends SliderThumbnail {
}
declare class SliderValueInstance extends SliderValue {
}
declare class SliderVideoInstance extends SliderVideo {
}
declare class SliderPreviewInstance extends SliderPreview {
}
declare class SliderChaptersInstance extends SliderChapters {
}
declare class MenuInstance extends Menu {
}
declare class MenuButtonInstance extends MenuButton {
}
declare class MenuItemsInstance extends MenuItems {
}
declare class MenuItemInstance extends MenuItem {
}
declare class MenuPortalInstance extends MenuPortal {
}
declare class RadioGroupInstance extends RadioGroup {
}
declare class RadioInstance extends Radio {
}
declare class CaptionsInstance extends Captions$1 {
}
declare class GestureInstance extends Gesture$1 {
}
declare class PosterInstance extends Poster$1 {
}
declare class ThumbnailInstance extends Thumbnail$1 {
}
declare class TimeInstance extends Time$1 {
}

type PlayerSrc = PlayerSrc$1 | RemotionSrc;

type SkipEmptyWord<Word extends string> = Word extends '' ? [] : [Word];

type RemoveLastCharacter<Sentence extends string, Character extends string> = Sentence extends `${infer LeftSide}${Character}`
	? SkipEmptyWord<LeftSide>
	: never;

/**
Split a string (almost) like Lodash's `_.words()` function.

- Split on each word that begins with a capital letter.
- Split on each {@link WordSeparators}.
- Split on numeric sequence.

@example
```
type Words0 = SplitWords<'helloWorld'>; // ['hello', 'World']
type Words1 = SplitWords<'helloWORLD'>; // ['hello', 'WORLD']
type Words2 = SplitWords<'hello-world'>; // ['hello', 'world']
type Words3 = SplitWords<'--hello the_world'>; // ['hello', 'the', 'world']
type Words4 = SplitWords<'lifeIs42'>; // ['life', 'Is', '42']
```

@internal
@category Change case
@category Template literal
*/
type SplitWords<
	Sentence extends string,
	LastCharacter extends string = '',
	CurrentWord extends string = '',
> = Sentence extends `${infer FirstCharacter}${infer RemainingCharacters}`
	? FirstCharacter extends WordSeparators
		// Skip word separator
		? [...SkipEmptyWord<CurrentWord>, ...SplitWords<RemainingCharacters>]
		: LastCharacter extends ''
			// Fist char of word
			? SplitWords<RemainingCharacters, FirstCharacter, FirstCharacter>
			// Case change: non-numeric to numeric, push word
			: [false, true] extends [IsNumeric<LastCharacter>, IsNumeric<FirstCharacter>]
				? [...SkipEmptyWord<CurrentWord>, ...SplitWords<RemainingCharacters, FirstCharacter, FirstCharacter>]
				// Case change: numeric to non-numeric, push word
				: [true, false] extends [IsNumeric<LastCharacter>, IsNumeric<FirstCharacter>]
					? [...SkipEmptyWord<CurrentWord>, ...SplitWords<RemainingCharacters, FirstCharacter, FirstCharacter>]
					// No case change: concat word
					: [true, true] extends [IsNumeric<LastCharacter>, IsNumeric<FirstCharacter>]
						? SplitWords<RemainingCharacters, FirstCharacter, `${CurrentWord}${FirstCharacter}`>
					// Case change: lower to upper, push word
						: [true, true] extends [IsLowerCase<LastCharacter>, IsUpperCase<FirstCharacter>]
							? [...SkipEmptyWord<CurrentWord>, ...SplitWords<RemainingCharacters, FirstCharacter, FirstCharacter>]
						// Case change: upper to lower, brings back the last character, push word
							: [true, true] extends [IsUpperCase<LastCharacter>, IsLowerCase<FirstCharacter>]
								? [...RemoveLastCharacter<CurrentWord, LastCharacter>, ...SplitWords<RemainingCharacters, FirstCharacter, `${LastCharacter}${FirstCharacter}`>]
							// No case change: concat word
								: SplitWords<RemainingCharacters, FirstCharacter, `${CurrentWord}${FirstCharacter}`>
	: [...SkipEmptyWord<CurrentWord>];

/**
CamelCase options.

@see {@link CamelCase}
*/
type CamelCaseOptions = {
	/**
	Whether to preserved consecutive uppercase letter.

	@default true
	*/
	preserveConsecutiveUppercase?: boolean;
};

/**
Convert an array of words to camel-case.
*/
type CamelCaseFromArray<
	Words extends string[],
	Options extends CamelCaseOptions,
	OutputString extends string = '',
> = Words extends [
	infer FirstWord extends string,
	...infer RemainingWords extends string[],
]
	? Options['preserveConsecutiveUppercase'] extends true
		? `${Capitalize<FirstWord>}${CamelCaseFromArray<RemainingWords, Options>}`
		: `${Capitalize<Lowercase<FirstWord>>}${CamelCaseFromArray<RemainingWords, Options>}`
	: OutputString;

/**
Convert a string literal to camel-case.

This can be useful when, for example, converting some kebab-cased command-line flags or a snake-cased database result.

By default, consecutive uppercase letter are preserved. See {@link CamelCaseOptions.preserveConsecutiveUppercase preserveConsecutiveUppercase} option to change this behaviour.

@example
```
import type {CamelCase} from 'type-fest';

// Simple

const someVariable: CamelCase<'foo-bar'> = 'fooBar';

// Advanced

type CamelCasedProperties<T> = {
	[K in keyof T as CamelCase<K>]: T[K]
};

interface RawOptions {
	'dry-run': boolean;
	'full_family_name': string;
	foo: number;
	BAR: string;
	QUZ_QUX: number;
	'OTHER-FIELD': boolean;
}

const dbResult: CamelCasedProperties<RawOptions> = {
	dryRun: true,
	fullFamilyName: 'bar.js',
	foo: 123,
	bar: 'foo',
	quzQux: 6,
	otherField: false
};
```

@category Change case
@category Template literal
*/
type CamelCase<Type, Options extends CamelCaseOptions = {preserveConsecutiveUppercase: true}> = Type extends string
	? string extends Type
		? Type
		: Uncapitalize<CamelCaseFromArray<SplitWords<Type extends Uppercase<Type> ? Lowercase<Type> : Type>, Options>>
	: Type;

/**
Converts a string literal to pascal-case.

@example
```
import type {PascalCase} from 'type-fest';

// Simple

const someVariable: PascalCase<'foo-bar'> = 'FooBar';

// Advanced

type PascalCaseProps<T> = {
	[K in keyof T as PascalCase<K>]: T[K]
};

interface RawOptions {
	'dry-run': boolean;
	'full_family_name': string;
	foo: number;
}

const dbResult: CamelCasedProperties<ModelProps> = {
	DryRun: true,
	FullFamilyName: 'bar.js',
	Foo: 123
};
```

@category Change case
@category Template literal
*/
type PascalCase<Value, Options extends CamelCaseOptions = {preserveConsecutiveUppercase: true}> = CamelCase<Value, Options> extends string
	? Capitalize<CamelCase<Value, Options>>
	: CamelCase<Value, Options>;
type ReactProps<C extends Component, E = ReactEventCallbacks<InferComponentEvents<C>>> = Optional<InferComponentProps<C>> & E & {
    style?: ((React.CSSProperties & {
        [name: `--${string}`]: string | number | null | undefined;
    }) & Optional<InferComponentCSSVars<C>>) | undefined;
    part?: string | undefined;
};
type Optional<T> = {
    [P in keyof T]?: T[P] | undefined;
};
type ReactElementProps<C extends Component, T extends HTMLElement | SVGElement = HTMLElement, E = ReactEventCallbacks<InferComponentEvents<C>>> = ReactProps<C, E> & Omit<T extends HTMLElement ? React.HTMLAttributes<T> : React.SVGAttributes<T>, 'style' | keyof E>;
type ReactEventCallbacks<E> = {
    [Type in keyof E as `on${PascalCase<Type & string>}`]?: (InferEventDetail<E[Type]> extends void ? (nativeEvent: E[Type]) => void : (detail: InferEventDetail<E[Type]>, nativeEvent: E[Type]) => void) | undefined;
};

interface MediaPlayerProps extends Omit<ReactElementProps<MediaPlayerInstance>, 'src'> {
    /**
     * The URL or object of the current media resource/s to be considered for playback.
     *
     * @see {@link https://vidstack.io/docs/player/core-concepts/loading#sources}
     */
    src?: PlayerSrc;
    aspectRatio?: string;
    asChild?: boolean;
    children: React.ReactNode;
    ref?: React.Ref<MediaPlayerInstance>;
}
/**
 * All media components exist inside the `<MediaPlayer>` component. This component's main
 * responsibilities are to manage media state updates, dispatch media events, handle media
 * requests, and expose media state through HTML attributes and CSS properties for styling
 * purposes.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/media/player}
 * @example
 * ```tsx
 * <MediaPlayer src="...">
 *   <MediaProvider />
 * </MediaPlayer>
 * ```
 */
declare const MediaPlayer: React.ForwardRefExoticComponent<Omit<MediaPlayerProps, "ref"> & React.RefAttributes<MediaPlayerInstance>>;

interface MediaAnnouncerProps extends ReactElementProps<MediaAnnouncerInstance> {
    ref?: React.Ref<HTMLElement>;
}
/**
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/display/announcer}
 * @example
 * ```tsx
 * <MediaAnnouncer />
 * ```
 */
declare const MediaAnnouncer: React.ForwardRefExoticComponent<Omit<MediaAnnouncerProps, "ref"> & React.RefAttributes<HTMLElement>>;

interface MediaProviderProps extends Omit<ReactElementProps<MediaProviderInstance>, 'loaders'> {
    loaders?: Array<{
        new (): MediaProviderLoader;
    }>;
    iframeProps?: React.IframeHTMLAttributes<HTMLIFrameElement>;
    mediaProps?: React.HTMLAttributes<HTMLMediaElement>;
    children?: React.ReactNode;
    ref?: React.Ref<MediaProviderInstance>;
}
/**
 * Renders the current provider at this component location.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/media/provider}
 * @example
 * ```tsx
 * <MediaPlayer src="...">
 *   <MediaProvider />
 * </MediaPlayer>
 * ```
 */
declare const MediaProvider: React.ForwardRefExoticComponent<Omit<MediaProviderProps, "ref"> & React.RefAttributes<MediaProviderInstance>>;

/**
 * Creates a new `TextTrack` object and adds it to the player.
 *
 * @see {@link https://www.vidstack.io/docs/player/api/text-tracks}
 * @example
 * ```tsx
 * <MediaPlayer>
 *   <MediaProvider>
 *     <Track
 *       src="english.vtt"
 *       kind="subtitles"
 *       label="English"
 *       lang="en-US"
 *       default
 *     />
 *   </MediaProvider>
 * </MediaPlayer>
 * ```
 */
declare function Track$2({ lang, ...props }: TrackProps$2): null;
declare namespace Track$2 {
    var displayName: string;
}
interface TrackProps$2 {
    /**
     * A unique identifier.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/id}
     */
    readonly id?: string;
    /**
     * URL of the text track resource. This attribute must be specified and its URL value must have
     * the same origin as the document — unless the <audio> or <video> parent element of the track
     * element has a `crossorigin` attribute.
     */
    readonly src?: string;
    /**
     * Used to directly pass in text track file contents.
     */
    readonly content?: string | VTTContent;
    /**
     * The captions file format to be parsed or a custom parser factory (functions that returns a
     * captions parser). Supported types include: 'vtt', 'srt', 'ssa', 'ass', and 'json'.
     *
     * @defaultValue 'vtt'
     */
    readonly type?: 'json' | CaptionsFileFormat | CaptionsParserFactory;
    /**
     * The text encoding type to be used when decoding data bytes to text.
     *
     * @defaultValue 'utf-8'
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API/Encodings}
     *
     */
    readonly encoding?: string;
    /**
     * Indicates that the track should be enabled unless the user's preferences indicate that
     * another track is more appropriate. This may only be used on one track element per media
     * element.
     *
     * @defaultValue false
     */
    readonly default?: boolean;
    /**
     * The kind of text track this object represents. This decides how the track will be handled
     * by the player.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/kind}
     */
    readonly kind: TextTrackKind;
    /**
     * A human-readable label for the text track. This will be displayed to the user.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/label}
     */
    readonly label?: string;
    /**
     * A string containing a language identifier. For example, `"en-US"` for United States English
     * or `"pt-BR"` for Brazilian Portuguese.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/language}
     * @see {@link https://datatracker.ietf.org/doc/html/rfc5646}
     */
    readonly language?: string;
    /**
     * A string containing a language identifier. For example, `"en-US"` for United States English
     * or `"pt-BR"` for Brazilian Portuguese. This is a short alias for `language`.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/language}
     * @see {@link https://datatracker.ietf.org/doc/html/rfc5646}
     */
    readonly lang?: TrackProps$2['language'];
    /**
     * React list key.
     */
    readonly key?: string;
}

interface RootProps$c extends ReactElementProps<ControlsInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
}
/**
 * This component creates a container for control groups.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/media/controls}
 * @example
 * ```tsx
 * <Controls.Root>
 *   <Controls.Group></Controls.Group>
 *   <Controls.Group></Controls.Group>
 * <Controls.Root>
 * ```
 */
declare const Root$c: React.ForwardRefExoticComponent<Omit<RootProps$c, "ref"> & React.RefAttributes<HTMLElement>>;
interface GroupProps extends ReactElementProps<ControlsGroupInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
}
/**
 * This component creates a container for media controls.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/media/controls#group}
 * @example
 * ```tsx
 * <Controls.Root>
 *   <Controls.Group></Controls.Group>
 *   <Controls.Group></Controls.Group>
 * <Controls.Root>
 * ```
 */
declare const Group: React.ForwardRefExoticComponent<Omit<GroupProps, "ref"> & React.RefAttributes<HTMLElement>>;

declare const controls_d_Group: typeof Group;
type controls_d_GroupProps = GroupProps;
declare namespace controls_d {
  export { controls_d_Group as Group, Root$c as Root };
  export type { controls_d_GroupProps as GroupProps, RootProps$c as RootProps };
}

interface RootProps$b extends ReactProps<TooltipInstance> {
    asChild?: boolean;
    children: React.ReactNode;
}
/**
 * A contextual text bubble that displays a description for an element that appears on pointer
 * hover or keyboard focus.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/tooltip}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role}
 * @example
 * ```tsx
 * <Tooltip.Root>
 *   <Tooltip.Trigger></Tooltip.Trigger>
 *   <Tooltip.Content></Tooltip.Content>
 * </Tooltip.Root>
 * ```
 */
declare function Root$b({ children, ...props }: RootProps$b): React.JSX.Element;
declare namespace Root$b {
    var displayName: string;
}
interface TriggerProps extends ReactElementProps<TooltipTriggerInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
/**
 * Wraps the element that will trigger showing/hiding the tooltip on hover or keyboard focus. The
 * tooltip content is positioned relative to this element.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/tooltip}
 * @example
 * ```tsx
 * <Tooltip.Root>
 *   <Tooltip.Trigger></Tooltip.Trigger>
 *   <Tooltip.Content></Tooltip.Content>
 * </Tooltip.Root>
 * ```
 */
declare const Trigger: React.ForwardRefExoticComponent<Omit<TriggerProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
interface ContentProps extends ReactElementProps<TooltipContentInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
}
/**
 * This component contains the content that is visible when the tooltip trigger is interacted with.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/tooltip}
 * @example
 * ```tsx
 * <Tooltip.Root>
 *   <Tooltip.Trigger></Tooltip.Trigger>
 *   <Tooltip.Content></Tooltip.Content>
 * </Tooltip.Root>
 * ```
 */
declare const Content: React.ForwardRefExoticComponent<Omit<ContentProps, "ref"> & React.RefAttributes<HTMLElement>>;

declare const tooltip_d_Content: typeof Content;
type tooltip_d_ContentProps = ContentProps;
declare const tooltip_d_Trigger: typeof Trigger;
type tooltip_d_TriggerProps = TriggerProps;
declare namespace tooltip_d {
  export { tooltip_d_Content as Content, Root$b as Root, tooltip_d_Trigger as Trigger };
  export type { tooltip_d_ContentProps as ContentProps, RootProps$b as RootProps, tooltip_d_TriggerProps as TriggerProps };
}

interface ToggleButtonProps extends ReactElementProps<ToggleButtonInstance, HTMLButtonElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
/**
 * A toggle button is a two-state button that can be either off (not pressed) or on (pressed).
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/buttons/toggle-button}
 * @example
 * ```tsx
 * <ToggleButton aria-label="...">
 *   <OnIcon />
 *   <OffIcon />
 * </ToggleButton>
 * ```
 */
declare const ToggleButton: React.ForwardRefExoticComponent<Omit<ToggleButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface AirPlayButtonProps extends ReactElementProps<AirPlayButtonInstance, HTMLButtonElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
/**
 * A button for requesting to connect to Apple AirPlay.
 *
 * @see {@link https://www.apple.com/au/airplay}
 * @docs {@link https://www.vidstack.io/docs/player/components/buttons/airplay-button}
 * @example
 * ```tsx
 * <AirPlayButton>
 *   <AirPlayIcon />
 * </AirPlayButton>
 * ```
 */
declare const AirPlayButton: React.ForwardRefExoticComponent<Omit<AirPlayButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface GoogleCastButtonProps extends ReactElementProps<GoogleCastButtonInstance, HTMLButtonElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
/**
 * A button for requesting Google Cast.
 *
 * @see {@link https://developers.google.com/cast/docs/overview}
 * @docs {@link https://www.vidstack.io/docs/player/components/buttons/google-cast-button}
 * @example
 * ```tsx
 * <GoogleCastButton>
 *   <ChromecastIcon />
 * </GoogleCastButton>
 * ```
 */
declare const GoogleCastButton: React.ForwardRefExoticComponent<Omit<GoogleCastButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface PlayButtonProps extends ReactElementProps<PlayButtonInstance, HTMLButtonElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
/**
 * A button for toggling the playback state (play/pause) of the current media.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/buttons/play-button}
 * @example
 * ```tsx
 * const isPaused = useMediaState('paused');
 *
 * <PlayButton>
 *   {isPaused ? <PlayIcon /> : <PauseIcon />}
 * </PlayButton>
 * ```
 */
declare const PlayButton: React.ForwardRefExoticComponent<Omit<PlayButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface CaptionButtonProps extends ReactElementProps<CaptionButtonInstance, HTMLButtonElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
/**
 * A button for toggling the showing state of the captions.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/buttons/caption-button}
 * @example
 * ```tsx
 * const track = useMediaState('textTrack'),
 *   isOn = track && isTrackCaptionKind(track);
 *
 * <CaptionButton>
 *   {isOn ? <OnIcon /> : <OffIcon />}
 * </CaptionButton>
 * ```
 */
declare const CaptionButton: React.ForwardRefExoticComponent<Omit<CaptionButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface FullscreenButtonProps extends ReactElementProps<FullscreenButtonInstance, HTMLButtonElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
/**
 * A button for toggling the fullscreen mode of the player.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/buttons/fullscreen-button}
 * @see {@link https://www.vidstack.io/docs/player/api/fullscreen}
 * @example
 * ```tsx
 * const isActive = useMediaState('fullscreen');
 *
 * <FullscreenButton>
 *   {!isActive ? <EnterIcon /> : <ExitIcon />}
 * </FullscreenButton>
 * ```
 */
declare const FullscreenButton: React.ForwardRefExoticComponent<Omit<FullscreenButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface MuteButtonProps extends ReactElementProps<MuteButtonInstance, HTMLButtonElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
/**
 * A button for toggling the muted state of the player.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/buttons/mute-button}
 * @example
 * ```tsx
 * const volume = useMediaState('volume'),
 *   isMuted = useMediaState('muted');
 *
 * <MuteButton>
 *   {isMuted || volume == 0 ? (
 *     <MuteIcon />
 *   ) : volume < 0.5 ? (
 *     <VolumeLowIcon />
 *   ) : (
 *     <VolumeHighIcon />
 *   )}
 * </MuteButton>
 * ```
 */
declare const MuteButton: React.ForwardRefExoticComponent<Omit<MuteButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface PIPButtonProps extends ReactElementProps<PIPButtonInstance, HTMLButtonElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
/**
 * A button for toggling the picture-in-picture (PIP) mode of the player.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/buttons/pip-button}
 * @see {@link https://www.vidstack.io/docs/player/api/picture-in-picture}
 * @example
 * ```tsx
 * const isActive = useMediaState('pictureInPicture');
 *
 * <PIPButton>
 *   {!isActive ? <EnterIcon /> : <ExitIcon />}
 * </PIPButton>
 * ```
 */
declare const PIPButton: React.ForwardRefExoticComponent<Omit<PIPButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface SeekButtonProps extends ReactElementProps<SeekButtonInstance, HTMLButtonElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
/**
 * A button for seeking the current media playback forwards or backwards by a specified amount.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/buttons/seek-button}
 * @example
 * ```tsx
 * <SeekButton seconds={-10}>
 *   <SeekBackwardIcon />
 * </SeekButton>
 *
 * <SeekButton seconds={10}>
 *   <SeekForwardIcon />
 * </SeekButton>
 * ```
 */
declare const SeekButton: React.ForwardRefExoticComponent<Omit<SeekButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface LiveButtonProps extends ReactElementProps<LiveButtonInstance, HTMLButtonElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
/**
 * This component displays the current live status of the stream. This includes whether it's
 * live, at the live edge, or not live. In addition, this component is a button during live streams
 * and will skip ahead to the live edge when pressed.
 *
 * 🚨 This component will have `aria-hidden="true"` applied when the current stream is _not_
 * live.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/buttons/live-button}
 * @example
 * ```tsx
 * <LiveButton>
 *   <LiveIcon />
 * </LiveButton>
 * ```
 */
declare const LiveButton: React.ForwardRefExoticComponent<Omit<LiveButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface SliderValueProps extends ReactElementProps<SliderValueInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
}

interface RootProps$a extends ReactElementProps<SliderInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<SliderInstance>;
}
/**
 * Versatile and user-friendly input control designed for seamless cross-browser compatibility and
 * accessibility with ARIA support. It offers a smooth user experience for both mouse and touch
 * interactions and is highly customizable in terms of styling. Users can effortlessly input numeric
 * values within a specified range, defined by a minimum and maximum value.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/sliders/slider}
 * @example
 * ```tsx
 * <Slider.Root>
 *   <Slider.Track>
 *     <Slider.TrackFill />
 *   </Slider.Track>
 *   <Slider.Thumb />
 * </Slider.Root>
 * ```
 */
declare const Root$a: React.ForwardRefExoticComponent<Omit<RootProps$a, "ref"> & React.RefAttributes<SliderInstance>>;
interface ThumbProps extends PrimitivePropsWithRef<'div'> {
}
/**
 * Purely visual element used to display a draggable handle to the user for adjusting the value
 * on the slider component.
 *
 * @example
 * ```tsx
 * <Slider.Root>
 *   <Slider.Thumb />
 * </Slider.Root>
 * ```
 */
declare const Thumb: React.ForwardRefExoticComponent<Omit<ThumbProps, "ref"> & React.RefAttributes<HTMLElement>>;
interface TrackProps$1 extends PrimitivePropsWithRef<'div'> {
}
/**
 * Visual element inside the slider that serves as a horizontal or vertical bar, providing a
 * visual reference for the range or values that can be selected by moving the slider thumb along
 * it. Users can interact with the slider by dragging the thumb along the track to set a specific
 * value.
 *
 * @example
 * ```tsx
 * <Slider.Root>
 *   <Slider.Track>
 *     <Slider.TrackFill />
 *   </Slider.Track>
 * </Slider.Root>
 * ```
 */
declare const Track$1: React.ForwardRefExoticComponent<Omit<TrackProps$1, "ref"> & React.RefAttributes<HTMLElement>>;
interface TrackFillProps$1 extends PrimitivePropsWithRef<'div'> {
}
/**
 * Portion of the slider track that is visually filled or highlighted to indicate the selected or
 * currently chosen range or value. As the slider thumb is moved along the track, the track
 * fill dynamically adjusts to visually represent the portion of the track that corresponds to the
 * selected value or range, providing users with a clear visual indication of their selection.
 *
 * @example
 * ```tsx
 * <Slider.Root>
 *   <Slider.Track>
 *     <Slider.TrackFill />
 *   </Slider.Track>
 * </Slider.Root>
 * ```
 */
declare const TrackFill$1: React.ForwardRefExoticComponent<Omit<TrackFillProps$1, "ref"> & React.RefAttributes<HTMLElement>>;
interface PreviewProps extends ReactElementProps<SliderPreviewInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
}
/**
 * Used to provide users with a real-time or interactive preview of the value or selection they
 * are making as they move the slider thumb. This can include displaying the current pointer
 * value numerically, or displaying a thumbnail over the time slider.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/slider#preview}
 * @example
 * ```tsx
 * <Slider.Root>
 *   <Slider.Preview>
 *     <Slider.Value />
 *   </Slider.Preview>
 * </Slider.Root>
 * ```
 */
declare const Preview: React.ForwardRefExoticComponent<Omit<PreviewProps, "ref"> & React.RefAttributes<HTMLElement>>;
interface ValueProps extends SliderValueProps {
}
/**
 * Displays the specific numeric representation of the current or pointer value of the slider.
 * When a user interacts with a slider by moving its thumb along the track, the slider value
 * changes accordingly.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/slider#preview}
 * @example
 * ```tsx
 * <Slider.Root>
 *   <Slider.Preview>
 *     <Slider.Value />
 *   </Slider.Preview>
 * </Slider.Root>
 * ```
 */
declare const Value: React.ForwardRefExoticComponent<Omit<ValueProps, "ref"> & React.RefAttributes<HTMLElement>>;
interface StepsProps extends Omit<PrimitivePropsWithRef<'div'>, 'children'> {
    children: (step: number) => React.ReactNode;
}
/**
 * Visual markers that can be used to indicate value steps on the slider track.
 *
 * @example
 * ```tsx
 * <Slider.Root>
 *   <Slider.Steps className="steps">
 *     {(step) => <div className="step" key={String(step)}></div>}
 *   </Slider.Steps>
 * </Slider.Root>
 * ```
 */
declare const Steps: React.ForwardRefExoticComponent<Omit<StepsProps, "ref"> & React.RefAttributes<HTMLElement>>;

declare const slider_d_Preview: typeof Preview;
type slider_d_PreviewProps = PreviewProps;
declare const slider_d_Steps: typeof Steps;
type slider_d_StepsProps = StepsProps;
declare const slider_d_Thumb: typeof Thumb;
type slider_d_ThumbProps = ThumbProps;
declare const slider_d_Value: typeof Value;
type slider_d_ValueProps = ValueProps;
declare namespace slider_d {
  export { slider_d_Preview as Preview, Root$a as Root, slider_d_Steps as Steps, slider_d_Thumb as Thumb, Track$1 as Track, TrackFill$1 as TrackFill, slider_d_Value as Value };
  export type { slider_d_PreviewProps as PreviewProps, RootProps$a as RootProps, slider_d_StepsProps as StepsProps, slider_d_ThumbProps as ThumbProps, TrackFillProps$1 as TrackFillProps, TrackProps$1 as TrackProps, slider_d_ValueProps as ValueProps };
}

interface RootProps$9 extends ReactElementProps<VolumeSliderInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<VolumeSliderInstance>;
}
/**
 * Versatile and user-friendly input volume control designed for seamless cross-browser and provider
 * compatibility and accessibility with ARIA support. It offers a smooth user experience for both
 * mouse and touch interactions and is highly customizable in terms of styling. Users can
 * effortlessly change the volume level within the range 0 (muted) to 100.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/sliders/volume-slider}
 * @example
 * ```tsx
 * <VolumeSlider.Root>
 *   <VolumeSlider.Track>
 *     <VolumeSlider.TrackFill />
 *   </VolumeSlider.Track>
 *   <VolumeSlider.Thumb />
 * </VolumeSlider.Root>
 * ```
 */
declare const Root$9: React.ForwardRefExoticComponent<Omit<RootProps$9, "ref"> & React.RefAttributes<VolumeSliderInstance>>;

declare const volumeSlider_d_Preview: typeof Preview;
type volumeSlider_d_PreviewProps = PreviewProps;
declare const volumeSlider_d_Steps: typeof Steps;
type volumeSlider_d_StepsProps = StepsProps;
declare const volumeSlider_d_Thumb: typeof Thumb;
type volumeSlider_d_ThumbProps = ThumbProps;
declare const volumeSlider_d_Value: typeof Value;
type volumeSlider_d_ValueProps = ValueProps;
declare namespace volumeSlider_d {
  export { volumeSlider_d_Preview as Preview, Root$9 as Root, volumeSlider_d_Steps as Steps, volumeSlider_d_Thumb as Thumb, Track$1 as Track, TrackFill$1 as TrackFill, volumeSlider_d_Value as Value };
  export type { volumeSlider_d_PreviewProps as PreviewProps, RootProps$9 as RootProps, volumeSlider_d_StepsProps as StepsProps, volumeSlider_d_ThumbProps as ThumbProps, TrackFillProps$1 as TrackFillProps, TrackProps$1 as TrackProps, volumeSlider_d_ValueProps as ValueProps };
}

interface RootProps$8 extends ReactElementProps<QualitySliderInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<QualitySliderInstance>;
}
/**
 * Versatile and user-friendly input video quality control designed for seamless cross-browser and
 * provider compatibility and accessibility with ARIA support. It offers a smooth user experience
 * for both mouse and touch interactions and is highly customizable in terms of styling.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/sliders/quality-slider}
 * @example
 * ```tsx
 * <QualitySlider.Root>
 *   <QualitySlider.Track>
 *     <QualitySlider.TrackFill />
 *   </QualitySlider.Track>
 *   <QualitySlider.Thumb />
 * </QualitySlider.Root>
 * ```
 */
declare const Root$8: React.ForwardRefExoticComponent<Omit<RootProps$8, "ref"> & React.RefAttributes<QualitySliderInstance>>;

declare const qualitySlider_d_Preview: typeof Preview;
type qualitySlider_d_PreviewProps = PreviewProps;
declare const qualitySlider_d_Steps: typeof Steps;
type qualitySlider_d_StepsProps = StepsProps;
declare const qualitySlider_d_Thumb: typeof Thumb;
type qualitySlider_d_ThumbProps = ThumbProps;
declare const qualitySlider_d_Value: typeof Value;
type qualitySlider_d_ValueProps = ValueProps;
declare namespace qualitySlider_d {
  export { qualitySlider_d_Preview as Preview, Root$8 as Root, qualitySlider_d_Steps as Steps, qualitySlider_d_Thumb as Thumb, Track$1 as Track, TrackFill$1 as TrackFill, qualitySlider_d_Value as Value };
  export type { qualitySlider_d_PreviewProps as PreviewProps, RootProps$8 as RootProps, qualitySlider_d_StepsProps as StepsProps, qualitySlider_d_ThumbProps as ThumbProps, TrackFillProps$1 as TrackFillProps, TrackProps$1 as TrackProps, qualitySlider_d_ValueProps as ValueProps };
}

interface RootProps$7 extends ReactElementProps<AudioGainSliderInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<AudioGainSliderInstance>;
}
/**
 * Versatile and user-friendly audio boost control designed for seamless cross-browser and provider
 * compatibility and accessibility with ARIA support. It offers a smooth user experience for both
 * mouse and touch interactions and is highly customizable in terms of styling. Users can
 * effortlessly change the audio gain within the range 0 to 100.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/sliders/audio-gain-slider}
 * @example
 * ```tsx
 * <AudioGainSlider.Root>
 *   <AudioGainSlider.Track>
 *     <AudioGainSlider.TrackFill />
 *   </AudioGainSlider.Track>
 *   <AudioGainSlider.Thumb />
 * </AudioGainSlider.Root>
 * ```
 */
declare const Root$7: React.ForwardRefExoticComponent<Omit<RootProps$7, "ref"> & React.RefAttributes<AudioGainSliderInstance>>;

declare const audioGainSlider_d_Preview: typeof Preview;
type audioGainSlider_d_PreviewProps = PreviewProps;
declare const audioGainSlider_d_Steps: typeof Steps;
type audioGainSlider_d_StepsProps = StepsProps;
declare const audioGainSlider_d_Thumb: typeof Thumb;
type audioGainSlider_d_ThumbProps = ThumbProps;
declare const audioGainSlider_d_Value: typeof Value;
type audioGainSlider_d_ValueProps = ValueProps;
declare namespace audioGainSlider_d {
  export { audioGainSlider_d_Preview as Preview, Root$7 as Root, audioGainSlider_d_Steps as Steps, audioGainSlider_d_Thumb as Thumb, Track$1 as Track, TrackFill$1 as TrackFill, audioGainSlider_d_Value as Value };
  export type { audioGainSlider_d_PreviewProps as PreviewProps, RootProps$7 as RootProps, audioGainSlider_d_StepsProps as StepsProps, audioGainSlider_d_ThumbProps as ThumbProps, TrackFillProps$1 as TrackFillProps, TrackProps$1 as TrackProps, audioGainSlider_d_ValueProps as ValueProps };
}

interface RootProps$6 extends ReactElementProps<SpeedSliderInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<SpeedSliderInstance>;
}
/**
 * Versatile and user-friendly input playback rate control designed for seamless cross-browser and
 * provider compatibility and accessibility with ARIA support. It offers a smooth user experience
 * for both mouse and touch interactions and is highly customizable in terms of styling.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/sliders/speed-slider}
 * @example
 * ```tsx
 * <SpeedSlider.Root>
 *   <SpeedSlider.Track>
 *     <SpeedSlider.TrackFill />
 *   </SpeedSlider.Track>
 *   <SpeedSlider.Thumb />
 * </SpeedSlider.Root>
 * ```
 */
declare const Root$6: React.ForwardRefExoticComponent<Omit<RootProps$6, "ref"> & React.RefAttributes<SpeedSliderInstance>>;

declare const speedSlider_d_Preview: typeof Preview;
type speedSlider_d_PreviewProps = PreviewProps;
declare const speedSlider_d_Steps: typeof Steps;
type speedSlider_d_StepsProps = StepsProps;
declare const speedSlider_d_Thumb: typeof Thumb;
type speedSlider_d_ThumbProps = ThumbProps;
declare const speedSlider_d_Value: typeof Value;
type speedSlider_d_ValueProps = ValueProps;
declare namespace speedSlider_d {
  export { speedSlider_d_Preview as Preview, Root$6 as Root, speedSlider_d_Steps as Steps, speedSlider_d_Thumb as Thumb, Track$1 as Track, TrackFill$1 as TrackFill, speedSlider_d_Value as Value };
  export type { speedSlider_d_PreviewProps as PreviewProps, RootProps$6 as RootProps, speedSlider_d_StepsProps as StepsProps, speedSlider_d_ThumbProps as ThumbProps, TrackFillProps$1 as TrackFillProps, TrackProps$1 as TrackProps, speedSlider_d_ValueProps as ValueProps };
}

interface RootProps$5 extends ReactElementProps<ThumbnailInstance, HTMLElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
}
/**
 * Used to load and display a preview thumbnail at the given `time`.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/display/thumbnail}
 * @example
 * ```tsx
 * <Thumbnail.Root src="thumbnails.vtt" time={10} >
 *   <Thumbnail.Img />
 * </Thumbnail.Root>
 * ```
 */
declare const Root$5: React.ForwardRefExoticComponent<Omit<RootProps$5, "ref"> & React.RefAttributes<HTMLElement>>;
interface ImgProps extends PrimitivePropsWithRef<'img'> {
    children?: React.ReactNode;
}
declare const Img: React.ForwardRefExoticComponent<Omit<ImgProps, "ref"> & React.RefAttributes<HTMLImageElement>>;

declare const thumbnail_d_Img: typeof Img;
type thumbnail_d_ImgProps = ImgProps;
declare namespace thumbnail_d {
  export { thumbnail_d_Img as Img, Root$5 as Root };
  export type { thumbnail_d_ImgProps as ImgProps, RootProps$5 as RootProps };
}

interface RootProps$4 extends ReactElementProps<TimeSliderInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<TimeSliderInstance>;
}
/**
 * Versatile and user-friendly input time control designed for seamless cross-browser and provider
 * compatibility and accessibility with ARIA support. It offers a smooth user experience for both
 * mouse and touch interactions and is highly customizable in terms of styling. Users can
 * effortlessly change the current playback time within the range 0 to seekable end.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/sliders/time-slider}
 * @example
 * ```tsx
 * <TimeSlider.Root>
 *   <TimeSlider.Track>
 *     <TimeSlider.TrackFill />
 *     <TimeSlider.Progress />
 *   </TimeSlider.Track>
 *   <TimeSlider.Thumb />
 * </TimeSlider.Root>
 * ```
 */
declare const Root$4: React.ForwardRefExoticComponent<Omit<RootProps$4, "ref"> & React.RefAttributes<TimeSliderInstance>>;
interface ChaptersProps extends Omit<ReactElementProps<SliderChaptersInstance>, 'children'> {
    children: (cues: VTTCue[], forwardRef: React.RefCallback<HTMLElement>) => React.ReactNode;
}
/**
 * Used to create predefined sections within a time slider interface based on the currently
 * active chapters text track.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/slider-chapters}
 * @example
 * ```tsx
 * <TimeSlider.Root>
 *   <TimeSlider.Chapters>
 *     {(cues, forwardRef) =>
 *       cues.map((cue) => (
 *         <div key={cue.startTime} ref={forwardRef}>
 *           <TimeSlider.Track>
 *             <TimeSlider.TrackFill />
 *             <TimeSlider.Progress />
 *           </TimeSlider.Track>
 *        </div>
 *     ))}
 *   </TimeSlider.Chapters>
 * </TimeSlider.Root>
 * ```
 */
declare const Chapters: React.ForwardRefExoticComponent<ChaptersProps & React.RefAttributes<HTMLDivElement>>;
interface ChapterTitleProps$1 extends PrimitivePropsWithRef<'div'> {
}
/**
 * Used to display the active cue text based on the slider value and preview value.
 *
 * @example
 * ```tsx
 * <TimeSlider.Root>
 *   <TimeSlider.Preview>
 *     <TimeSlider.Chapter />
 *   </TimeSlider.Preview>
 * </TimeSlider.Root>
 * ```
 */
declare const ChapterTitle$1: React.ForwardRefExoticComponent<Omit<ChapterTitleProps$1, "ref"> & React.RefAttributes<HTMLElement>>;
interface ProgressProps extends PrimitivePropsWithRef<'div'> {
}
/**
 * Visual element inside the slider that serves as a horizontal or vertical bar, providing a
 * visual reference for the range of playback that has buffered/loaded.
 *
 * @example
 * ```tsx
 * <TimeSlider.Root>
 *   <TimeSlider.Track>
 *     <TimeSlider.Progress />
 *   </TimeSlider.Track>
 * </TimeSlider.Root>
 * ```
 */
declare const Progress: React.ForwardRefExoticComponent<Omit<ProgressProps, "ref"> & React.RefAttributes<HTMLElement>>;
interface ThumbnailProps extends ReactElementProps<SliderThumbnailInstance, HTMLElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
}
type ThumbnailImgProps = ImgProps;
declare const Thumbnail: {
    readonly Root: React.ForwardRefExoticComponent<Omit<ThumbnailProps, "ref"> & React.RefAttributes<HTMLElement>>;
    readonly Img: React.ForwardRefExoticComponent<Omit<ImgProps, "ref"> & React.RefAttributes<HTMLImageElement>>;
};
interface VideoProps extends ReactElementProps<SliderVideoInstance, HTMLVideoElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLVideoElement>;
}
/**
 * Used to load a low-resolution video to be displayed when the user is hovering over or dragging
 * the time slider. The preview video will automatically be updated to be in-sync with the current
 * preview position, so ensure it has the same length as the original media (i.e., same duration).
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/sliders/slider-video}
 * @example
 * ```tsx
 * <TimeSlider.Root>
 *   <TimeSlider.Preview>
 *     <TimeSlider.Video src="preview.mp4" />
 *   </TimeSlider.Preview>
 * </TimeSlider.Root>
 * ```
 */
declare const Video: React.ForwardRefExoticComponent<Omit<VideoProps, "ref"> & React.RefAttributes<HTMLVideoElement>>;
interface VideoProviderProps {
    instance: SliderVideoInstance;
    children?: React.ReactNode;
}

declare const timeSlider_d_Chapters: typeof Chapters;
type timeSlider_d_ChaptersProps = ChaptersProps;
declare const timeSlider_d_Preview: typeof Preview;
type timeSlider_d_PreviewProps = PreviewProps;
declare const timeSlider_d_Progress: typeof Progress;
type timeSlider_d_ProgressProps = ProgressProps;
declare const timeSlider_d_Steps: typeof Steps;
type timeSlider_d_StepsProps = StepsProps;
declare const timeSlider_d_Thumb: typeof Thumb;
type timeSlider_d_ThumbProps = ThumbProps;
declare const timeSlider_d_Thumbnail: typeof Thumbnail;
type timeSlider_d_ThumbnailImgProps = ThumbnailImgProps;
type timeSlider_d_ThumbnailProps = ThumbnailProps;
declare const timeSlider_d_Value: typeof Value;
type timeSlider_d_ValueProps = ValueProps;
declare const timeSlider_d_Video: typeof Video;
type timeSlider_d_VideoProps = VideoProps;
type timeSlider_d_VideoProviderProps = VideoProviderProps;
declare namespace timeSlider_d {
  export { ChapterTitle$1 as ChapterTitle, timeSlider_d_Chapters as Chapters, timeSlider_d_Preview as Preview, timeSlider_d_Progress as Progress, Root$4 as Root, timeSlider_d_Steps as Steps, timeSlider_d_Thumb as Thumb, timeSlider_d_Thumbnail as Thumbnail, Track$1 as Track, TrackFill$1 as TrackFill, timeSlider_d_Value as Value, timeSlider_d_Video as Video };
  export type { ChapterTitleProps$1 as ChapterTitleProps, timeSlider_d_ChaptersProps as ChaptersProps, timeSlider_d_PreviewProps as PreviewProps, timeSlider_d_ProgressProps as ProgressProps, RootProps$4 as RootProps, timeSlider_d_StepsProps as StepsProps, timeSlider_d_ThumbProps as ThumbProps, timeSlider_d_ThumbnailImgProps as ThumbnailImgProps, timeSlider_d_ThumbnailProps as ThumbnailProps, TrackFillProps$1 as TrackFillProps, TrackProps$1 as TrackProps, timeSlider_d_ValueProps as ValueProps, timeSlider_d_VideoProps as VideoProps, timeSlider_d_VideoProviderProps as VideoProviderProps };
}

interface RootProps$3 extends ReactElementProps<RadioGroupInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<RadioGroupInstance>;
}
/**
 * A radio group consists of options where only one of them can be checked. Each option is
 * provided as a radio (i.e., a selectable element).
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/menu/radio-group}
 * @example
 * ```tsx
 * <RadioGroup.Root>
 *   <RadioGroup.Item value="1080">1080p</RadioGroup.Item>
 *   <RadioGroup.Item value="720">720p</RadioGroup.Item>
 * </RadioGroup.Root>
 * ```
 */
declare const Root$3: React.ForwardRefExoticComponent<Omit<RootProps$3, "ref"> & React.RefAttributes<RadioGroupInstance>>;
interface ItemProps$1 extends ReactElementProps<RadioInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
}
/**
 * A radio represents a option that a user can select inside of a radio group. Only one radio
 * can be checked in a group.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/menu/radio}
 * @example
 * ```tsx
 * <RadioGroup.Item value="1080">1080p</RadioGroup.Item>
 * ```
 */
declare const Item$1: React.ForwardRefExoticComponent<Omit<ItemProps$1, "ref"> & React.RefAttributes<HTMLElement>>;

declare namespace radioGroup_d {
  export { Item$1 as Item, Root$3 as Root };
  export type { ItemProps$1 as ItemProps, RootProps$3 as RootProps };
}

interface RootProps$2 extends ReactElementProps<MenuInstance> {
    asChild?: boolean;
    children: React.ReactNode;
    ref?: React.Ref<MenuInstance>;
}
/**
 * Root menu container used to hold and manage a menu button and menu items. This component is
 * used to display options in a floating panel. They can be nested to create submenus.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/menu/menu}
 * @example
 * ```tsx
 * <Menu.Root>
 *   <Menu.Button></Menu.Button>
 *   <Menu.Content placement="top end"></Menu.Content>
 * </Menu.Root>
 * ```
 */
declare const Root$2: React.ForwardRefExoticComponent<Omit<RootProps$2, "ref"> & React.RefAttributes<MenuInstance>>;
interface ButtonProps extends ReactElementProps<MenuButtonInstance, HTMLButtonElement> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
}
/**
 * A button that controls the opening and closing of a menu component. The button will become a
 * `menuitem` when used inside a submenu.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/menu/menu}
 * @example
 * ```tsx
 * <Menu.Root>
 *   <Menu.Button></Menu.Button>
 *   <Menu.Content placement="top end"></Menu.Content>
 * </Menu.Root>
 * ```
 */
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
interface PortalProps extends ReactElementProps<MenuPortalInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
}
/**
 * Portals menu items into the given container.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/menu#portal}
 * @example
 * ```tsx
 * <Menu.Root>
 *   <Menu.Button></Menu.Button>
 *   <Menu.Portal>
 *     <Menu.Content placement="top end"></Menu.Content>
 *   </Menu.Portal>
 * </Menu.Root>
 * ```
 */
declare const Portal: React.ForwardRefExoticComponent<Omit<PortalProps, "ref"> & React.RefAttributes<HTMLElement>>;
interface ItemsProps extends ReactElementProps<MenuItemsInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
}
/**
 * Used to group and display settings or arbitrary content in a floating panel.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/menu/menu}
 * @example
 * ```tsx
 * <Menu.Root>
 *   <Menu.Button></Menu.Button>
 *   <Menu.Items placement="top end"></Menu.Items>
 * </Menu.Root>
 * ```
 */
declare const Items: React.ForwardRefExoticComponent<Omit<ItemsProps, "ref"> & React.RefAttributes<HTMLElement>>;
interface ItemProps extends ReactElementProps<MenuItemInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
}
/**
 * Represents a specific option or action, typically displayed as a text label or icon, which
 * users can select to access or perform a particular function or view related content.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/menu/menu}
 * @example
 * ```tsx
 * <Menu.Root>
 *   <Menu.Button></Menu.Button>
 *   <Menu.Content placement="top end">
 *     <Menu.Item></Menu.Item>
 *   </Menu.Content>
 * </Menu.Root>
 * ```
 */
declare const Item: React.ForwardRefExoticComponent<Omit<ItemProps, "ref"> & React.RefAttributes<HTMLElement>>;

declare const menu_d_Button: typeof Button;
type menu_d_ButtonProps = ButtonProps;
declare const menu_d_Item: typeof Item;
type menu_d_ItemProps = ItemProps;
declare const menu_d_Items: typeof Items;
type menu_d_ItemsProps = ItemsProps;
declare const menu_d_Portal: typeof Portal;
type menu_d_PortalProps = PortalProps;
declare namespace menu_d {
  export { menu_d_Button as Button, Items as Content, menu_d_Item as Item, menu_d_Items as Items, menu_d_Portal as Portal, Item$1 as Radio, Root$3 as RadioGroup, Root$2 as Root };
  export type { menu_d_ButtonProps as ButtonProps, ItemsProps as ContentProps, menu_d_ItemProps as ItemProps, menu_d_ItemsProps as ItemsProps, menu_d_PortalProps as PortalProps, RootProps$3 as RadioGroupProps, ItemProps$1 as RadioProps, RootProps$2 as RootProps };
}

interface TitleProps extends PrimitivePropsWithRef<'span'> {
}
/**
 * This component is used to load and display the current media title.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/display/title}
 * @example
 * ```tsx
 * <Title />
 * ```
 */
declare const Title: React.ForwardRefExoticComponent<Omit<TitleProps, "ref"> & React.RefAttributes<HTMLElement>>;

interface ChapterTitleProps extends PrimitivePropsWithRef<'span'> {
    /**
     * Specify text to be displayed when no chapter title is available.
     */
    defaultText?: string;
}
/**
 * This component is used to load and display the current chapter title based on the text tracks
 * provided.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/display/chapter-title}
 * @example
 * ```tsx
 * <ChapterTitle />
 * ```
 */
declare const ChapterTitle: React.ForwardRefExoticComponent<Omit<ChapterTitleProps, "ref"> & React.RefAttributes<HTMLElement>>;

interface GestureProps extends ReactElementProps<GestureInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<GestureInstance>;
}
/**
 * This component enables actions to be performed on the media based on user gestures.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/media/gesture}
 * @example
 * ```tsx
 * <Gesture event="pointerup" action="toggle:paused" />
 * <Gesture event="dblpointerup" action="toggle:fullscreen" />
 * ```
 */
declare const Gesture: React.ForwardRefExoticComponent<Omit<GestureProps, "ref"> & React.RefAttributes<GestureInstance>>;

interface CaptionsProps extends ReactElementProps<CaptionsInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<CaptionsInstance>;
}
/**
 * Renders and displays captions/subtitles. This will be an overlay for video and a simple
 * captions box for audio.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/display/captions}
 * @example
 * ```tsx
 * <Captions />
 * ```
 */
declare const Captions: React.ForwardRefExoticComponent<Omit<CaptionsProps, "ref"> & React.RefAttributes<CaptionsInstance>>;

interface PosterProps extends ReactElementProps<PosterInstance, HTMLImageElement> {
    alt?: string;
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLImageElement>;
}
/**
 * Loads and displays the current media poster image. By default, the media provider's
 * loading strategy is respected meaning the poster won't load until the media can.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/media/poster}
 * @example
 * ```tsx
 * <MediaPlayer>
 *   <MediaProvider>
 *     <Poster src="..." alt="..." />
 *   </MediaProvider>
 * </MediaPlayer>
 * ```
 */
declare const Poster: React.ForwardRefExoticComponent<Omit<PosterProps, "ref"> & React.RefAttributes<HTMLImageElement>>;

interface TimeProps extends ReactElementProps<TimeInstance> {
    asChild?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
}
/**
 * Outputs a media duration (eg: `currentTime`, `duration`, `bufferedAmount`, etc.) value as time
 * formatted text.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/display/time}
 * @example
 * ```tsx
 * <Time type="current" />
 * ```
 */
declare const Time: React.ForwardRefExoticComponent<Omit<TimeProps, "ref"> & React.RefAttributes<HTMLElement>>;

interface RootProps$1 extends PrimitivePropsWithRef<'div'> {
    children?: React.ReactNode;
}
declare const Root$1: React.ForwardRefExoticComponent<Omit<RootProps$1, "ref"> & React.RefAttributes<HTMLElement>>;

interface TextProps extends PrimitivePropsWithRef<'span'> {
}
declare const Text: React.ForwardRefExoticComponent<Omit<TextProps, "ref"> & React.RefAttributes<HTMLElement>>;

declare const caption_d_Text: typeof Text;
type caption_d_TextProps = TextProps;
declare namespace caption_d {
  export { Root$1 as Root, caption_d_Text as Text };
  export type { RootProps$1 as RootProps, caption_d_TextProps as TextProps };
}

interface RootProps extends React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>, React.RefAttributes<SVGElement | SVGSVGElement> {
    /**
     * The horizontal (width) and vertical (height) length of the spinner.
     *
     * @defaultValue 96
     */
    size?: number;
}
/**
 * @docs {@link https://www.vidstack.io/docs/player/components/display/buffering-indicator}
 * @example
 * ```html
 * <Spinner.Root>
 *   <Spinner.Track />
 *   <Spinner.TrackFill />
 * </Spinner>
 * ```
 */
declare const Root: React.ForwardRefExoticComponent<Omit<RootProps, "ref"> & React.RefAttributes<SVGSVGElement | SVGElement>>;
interface TrackProps extends React.PropsWithoutRef<React.SVGProps<SVGCircleElement>>, React.RefAttributes<SVGCircleElement> {
}
declare const Track: React.ForwardRefExoticComponent<Omit<TrackProps, "ref"> & React.RefAttributes<SVGCircleElement>>;
interface TrackFillProps extends React.PropsWithoutRef<React.SVGProps<SVGCircleElement>>, React.RefAttributes<SVGCircleElement> {
    /**
     * The percentage of the track that should be filled.
     */
    fillPercent?: number;
}
declare const TrackFill: React.ForwardRefExoticComponent<Omit<TrackFillProps, "ref"> & React.RefAttributes<SVGCircleElement>>;

declare const spinner_d_Root: typeof Root;
type spinner_d_RootProps = RootProps;
declare const spinner_d_Track: typeof Track;
declare const spinner_d_TrackFill: typeof TrackFill;
type spinner_d_TrackFillProps = TrackFillProps;
type spinner_d_TrackProps = TrackProps;
declare namespace spinner_d {
  export { spinner_d_Root as Root, spinner_d_Track as Track, spinner_d_TrackFill as TrackFill };
  export type { spinner_d_RootProps as RootProps, spinner_d_TrackFillProps as TrackFillProps, spinner_d_TrackProps as TrackProps };
}

/**
 * This hook is used to subscribe to specific state on a component instance.
 *
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-state}
 */
declare function useState<T extends AnyRecord, R extends keyof T>(ctor: {
    state: State<T>;
}, prop: R, ref: React.RefObject<Component<any, T, any, any> | null>): T[R];
/**
 * This hook is used to subscribe to multiple states on a component instance.
 *
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-store}
 */
declare function useStore<T extends AnyRecord>(ctor: {
    state: State<T>;
}, ref: React.RefObject<Component<any, T, any, any> | null>): T;

declare function useMediaContext(): MediaContext;

/**
 * Returns the nearest parent player component.
 *
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-media-player}
 */
declare function useMediaPlayer(): MediaPlayerInstance | null;

/**
 * Returns the current parent media provider.
 *
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-media-provider}
 */
declare function useMediaProvider(): MediaProviderAdapter | null;

/**
 * A media remote provides a simple facade for dispatching media requests to the nearest media
 * player.
 *
 * @param target - The DOM event target to dispatch request events from. Defaults to player
 * if no target is provided.
 *
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-media-remote}
 */
declare function useMediaRemote(target?: EventTarget | null | React.RefObject<EventTarget | null>): MediaRemoteControl;

/**
 * This hook is used to subscribe to a specific media state.
 *
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-media-state}
 */
declare function useMediaState<T extends keyof MediaState>(prop: T, ref?: React.RefObject<MediaPlayerInstance | null>): MediaState[T];
/**
 * This hook is used to subscribe to the current media state on the nearest parent player.
 *
 * @docs {@link https://vidstack.io/docs/player/core-concepts/state-management#reading}
 */
declare function useMediaStore(ref?: React.RefObject<MediaPlayerInstance | null>): Readonly<MediaState>;

/**
 * The function will return the resolved thumbnail images given a thumbnail resource. It's safe to
 * call this hook in multiple places with the same `src` argument as work is de-duped and cached
 * internally.
 *
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-thumbnails}
 */
declare function useThumbnails(src: ThumbnailSrc, crossOrigin?: MediaCrossOrigin | null): ThumbnailImage[];
/**
 * Returns the active thumbnail image based on the given time.
 *
 * @param thumbnails - thumbnail images.
 * @param time - the current time to determine which thumbnail is active.
 */
declare function useActiveThumbnail(thumbnails: ThumbnailImage[], time: number): ThumbnailImage | null;

/**
 * This hook is used to subscribe to a specific slider state.
 *
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-slider-state}
 */
declare function useSliderState<T extends keyof SliderState>(prop: T, ref?: React.RefObject<SliderInstance | VolumeSliderInstance | TimeSliderInstance | null>): SliderState[T];
/**
 * This hook is used to subscribe to the current slider state on the given or nearest slider
 * component.
 *
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-slider-state#store}
 */
declare function useSliderStore(ref?: React.RefObject<SliderInstance | VolumeSliderInstance | TimeSliderInstance | null>): Readonly<SliderState>;

/**
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-slider-preview}
 */
declare function useSliderPreview({ clamp, offset, orientation, }?: UseSliderPreview): {
    previewRootRef: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    previewRef: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    previewValue: number;
    isPreviewVisible: boolean;
};
interface UseSliderPreview {
    /**
     * Whether the preview should be clamped to the start and end of the slider root. If `true` the
     * preview won't be placed outside the root bounds.
     */
    clamp?: boolean;
    /**
     * The distance in pixels between the preview and the slider root. You can also set
     * the CSS variable `--media-slider-preview-offset` to adjust this offset.
     */
    offset?: number;
    /**
     * The orientation of the slider.
     */
    orientation?: SliderOrientation;
}

/**
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-text-cues}
 */
declare function useTextCues(track: TextTrack | null): VTTCue[];

/**
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-active-text-cues}
 */
declare function useActiveTextCues(track: TextTrack | null): VTTCue[];

/**
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-active-text-track}
 */
declare function useActiveTextTrack(kind: TextTrackKind | TextTrackKind[]): TextTrack | null;

/**
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-chapter-title}
 */
declare function useChapterTitle(): string;

/**
 * Creates a new `TextTrack` object and adds it to the player.
 *
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/create-text-track}
 */
declare function createTextTrack(init: TextTrackInit): TextTrack;

/**
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-audio-gain-options}
 */
declare function useAudioGainOptions({ gains, disabledLabel, }?: UseAudioGainOptions): AudioGainOptions;
interface UseAudioGainOptions {
    gains?: (number | {
        label: string;
        gain: number;
    })[];
    disabledLabel?: string | null;
}
type AudioGainOptions = AudioGainOption[] & {
    readonly disabled: boolean;
    readonly selectedValue: string | undefined;
};
interface AudioGainOption {
    readonly label: string;
    readonly value: string;
    readonly gain: number;
    readonly selected: boolean;
    select(trigger?: Event): void;
}

/**
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-audio-options}
 */
declare function useAudioOptions(): AudioOptions;
type AudioOptions = AudioOption[] & {
    readonly disabled: boolean;
    readonly selectedTrack: AudioTrack | null;
    readonly selectedValue: string | undefined;
};
interface AudioOption {
    readonly track: AudioTrack;
    readonly label: string;
    readonly value: string;
    readonly selected: boolean;
    select(trigger?: Event): void;
}

/**
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-caption-options}
 */
declare function useCaptionOptions({ off }?: UseCaptionOptions): CaptionOptions;
interface UseCaptionOptions {
    /**
     * Whether an option should be included for turning off all captions. A string can be provided
     * to specify the label.
     */
    off?: boolean | string;
}
type CaptionOptions = CaptionOption[] & {
    readonly disabled: boolean;
    readonly selectedTrack: TextTrack | null;
    readonly selectedValue: string;
};
interface CaptionOption {
    readonly track: TextTrack | null;
    readonly label: string;
    readonly value: string;
    readonly selected: boolean;
    select(trigger?: Event): void;
}

/**
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-chapter-options}
 */
declare function useChapterOptions(): ChapterOptions;
type ChapterOptions = ChapterOption[] & {
    readonly selectedValue: string | undefined;
};
interface ChapterOption {
    readonly cue: VTTCue;
    readonly label: string;
    readonly value: string;
    readonly selected: boolean;
    readonly startTimeText: string;
    readonly durationText: string;
    select(trigger?: Event): void;
    setProgressVar(ref: HTMLElement | null): void;
}

/**
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-video-quality-options}
 */
declare function useVideoQualityOptions({ auto, sort, }?: UseVideoQualityOptions): VideoQualityOptions;
interface UseVideoQualityOptions {
    /**
     * Whether an auto option should be included. A string can be provided to specify the label.
     */
    auto?: boolean | string;
    /**
     * Specifies how the options should be sorted. The sorting algorithm looks at both the quality
     * resolution and bitrate.
     *
     * - Ascending: 480p, 720p, 720p (higher bitrate), 1080p
     * - Descending: 1080p, 720p (higher bitrate), 720p, 480p
     *
     * @default 'descending'
     */
    sort?: 'ascending' | 'descending';
}
type VideoQualityOptions = VideoQualityOption[] & {
    readonly disabled: boolean;
    readonly selectedQuality: VideoQuality | null;
    readonly selectedValue: string;
};
interface VideoQualityOption {
    readonly quality: VideoQuality | null;
    readonly label: string;
    readonly value: string;
    readonly selected: boolean;
    readonly autoSelected: boolean;
    readonly bitrateText: string | null;
    select(trigger?: Event): void;
}

/**
 * @docs {@link https://www.vidstack.io/docs/player/api/hooks/use-playback-rate-options}
 */
declare function usePlaybackRateOptions({ rates, normalLabel, }?: UsePlaybackRateOptions): PlaybackRateOptions;
interface UsePlaybackRateOptions {
    rates?: (number | {
        label: string;
        rate: number;
    })[];
    normalLabel?: string | null;
}
type PlaybackRateOptions = PlaybackRateOption[] & {
    readonly disabled: boolean;
    readonly selectedValue: string | undefined;
};
interface PlaybackRateOption {
    readonly label: string;
    readonly value: string;
    readonly rate: number;
    readonly selected: boolean;
    select(trigger?: Event): void;
}

export { AirPlayButton, AirPlayButtonInstance, audioGainSlider_d as AudioGainSlider, AudioGainSliderInstance, AudioTrack, caption_d as Caption, CaptionButton, CaptionButtonInstance, Captions, CaptionsInstance, ChapterTitle, controls_d as Controls, ControlsGroupInstance, ControlsInstance, FullscreenButton, FullscreenButtonInstance, Gesture, GestureInstance, GoogleCastButton, GoogleCastButtonInstance, LiveButton, LiveButtonInstance, MediaAnnouncer, MediaAnnouncerInstance, MediaContext, MediaCrossOrigin, MediaPlayer, MediaPlayerInstance, MediaProvider, MediaProviderAdapter, MediaProviderInstance, MediaProviderLoader, MediaRemoteControl, MediaState, menu_d as Menu, MenuButtonInstance, MenuInstance, MenuItemInstance, MenuItemsInstance, MenuPortalInstance, MuteButton, MuteButtonInstance, PIPButton, PIPButtonInstance, PlayButton, PlayButtonInstance, Poster, PosterInstance, qualitySlider_d as QualitySlider, QualitySliderInstance, radioGroup_d as RadioGroup, RadioGroupInstance, RadioInstance, SeekButton, SeekButtonInstance, slider_d as Slider, SliderChaptersInstance, SliderInstance, SliderOrientation, SliderPreviewInstance, SliderState, SliderThumbnailInstance, SliderValueInstance, SliderVideoInstance, speedSlider_d as SpeedSlider, SpeedSliderInstance, spinner_d as Spinner, TextTrack, TextTrackInit, thumbnail_d as Thumbnail, ThumbnailInstance, Time, TimeInstance, timeSlider_d as TimeSlider, TimeSliderInstance, Title, ToggleButton, ToggleButtonInstance, tooltip_d as Tooltip, TooltipContentInstance, TooltipInstance, TooltipTriggerInstance, Track$2 as Track, VTTContent, VideoQuality, volumeSlider_d as VolumeSlider, VolumeSliderInstance, createTextTrack, useActiveTextCues, useActiveTextTrack, useActiveThumbnail, useAudioGainOptions, useAudioOptions, useCaptionOptions, useChapterOptions, useChapterTitle, useMediaContext, useMediaPlayer, useMediaProvider, useMediaRemote, useMediaState, useMediaStore, usePlaybackRateOptions, useSliderPreview, useSliderState, useSliderStore, useState, useStore, useTextCues, useThumbnails, useVideoQualityOptions };
export type { AirPlayButtonProps, AudioGainOption, AudioGainOptions, RootProps$7 as AudioGainSliderProps, AudioOption, AudioOptions, CaptionButtonProps, CaptionOption, CaptionOptions, RootProps$1 as CaptionProps, TextProps as CaptionTextProps, CaptionsProps, ChapterOption, ChapterOptions, ChapterTitleProps, GroupProps as ControlsGroupProps, RootProps$c as ControlsProps, FullscreenButtonProps, GestureProps, GoogleCastButtonProps, LiveButtonProps, MediaAnnouncerProps, MediaPlayerProps, MediaProviderProps, ButtonProps as MenuButtonProps, ItemsProps as MenuContentProps, ItemProps as MenuItemProps, ItemsProps as MenuItemsProps, PortalProps as MenuPortalProps, RootProps$2 as MenuProps, RootProps$3 as MenuRadioGroupProps, ItemProps$1 as MenuRadioProps, MuteButtonProps, PIPButtonProps, PlayButtonProps, PlaybackRateOption, PlaybackRateOptions, PlayerSrc, PosterProps, RootProps$8 as QualitySliderProps, RootProps$3 as RadioGroupProps, ItemProps$1 as RadioProps, SeekButtonProps, ChaptersProps as SliderChapterProps, ChapterTitleProps$1 as SliderChapterTitleProps, PreviewProps as SliderPreviewProps, RootProps$a as SliderProps, StepsProps as SliderStepsProps, ThumbnailImgProps as SliderThumbnailImgProps, ThumbnailProps as SliderThumbnailProps, ValueProps as SliderValueProps, VideoProps as SliderVideoProps, RootProps$6 as SpeedSliderProps, RootProps as SpinnerProps, TrackFillProps as SpinnerTrackFillProps, TrackProps as SpinnerTrackProps, ImgProps as ThumbnailImgProps, RootProps$5 as ThumbnailProps, TimeProps, RootProps$4 as TimeSliderProps, TitleProps, ToggleButtonProps, ContentProps as TooltipContentProps, RootProps$b as TooltipProps, TriggerProps as TooltipTriggerProps, TrackProps$2 as TrackProps, UseAudioGainOptions, UseCaptionOptions, UsePlaybackRateOptions, UseSliderPreview, UseVideoQualityOptions, VideoQualityOption, VideoQualityOptions, RootProps$9 as VolumeSliderProps };
