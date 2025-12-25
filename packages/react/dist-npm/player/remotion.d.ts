import * as React from 'react';
import { PrimitivePropsWithRef } from '../types/nodes.d.js';
import { RemotionLoadingRenderer, RemotionErrorRenderer, RemotionSrc, RemotionInputProps } from '../types/types.d.js';
import { MediaProviderLoader, Src, MediaType, MediaContext, MediaProviderAdapter, Scope } from '../types/vidstack.js';
import 'media-captions';
import 'dashjs';
import 'hls.js';

interface RemotionThumbnailProps extends Omit<PrimitivePropsWithRef<'div'>, 'children' | 'onError'> {
    /** The video frame to display. */
    frame: number;
    /**
     * A callback function that allows you to return a custom UI that gets displayed while the
     * thumbnail is loading. If this prop is not provided it will default to the loading renderer
     * given to the player source.
     */
    renderLoading?: RemotionLoadingRenderer;
    /**
     * A callback for rendering a custom error message. If this prop is not provided it will default
     * to the error renderer given to the player source.
     */
    errorFallback?: RemotionErrorRenderer;
    /**
     * Called when an error or uncaught exception has happened in the video. If this prop is not
     * provided it will default to the error callback given to the player source.
     */
    onError?(error: Error): void;
}
/**
 * @docs {@link https://www.vidstack.io/docs/player/components/remotion/remotion-thumbnail}
 * @example
 * ```tsx
 * <RemotionThumbnail frame={100} />
 * ```
 */
declare const RemotionThumbnail: React.ForwardRefExoticComponent<Omit<RemotionThumbnailProps, "ref"> & React.RefAttributes<HTMLElement>>;

interface RemotionPosterProps extends RemotionThumbnailProps {
}
/**
 * @attr data-visible - Whether poster should be shown.
 * @docs {@link https://www.vidstack.io/docs/player/components/remotion/remotion-poster}
 * @example
 * ```tsx
 * <MediaPlayer>
 *   <MediaProvider>
 *     <RemotionPoster frame={100} />
 *   </MediaProvider>
 * </MediaPlayer>
 * ```
 */
declare const RemotionPoster: React.ForwardRefExoticComponent<Omit<RemotionPosterProps, "ref"> & React.RefAttributes<HTMLElement>>;

interface RemotionSliderThumbnailProps extends Omit<RemotionThumbnailProps, 'frame'> {
}
/**
 * @docs {@link https://www.vidstack.io/docs/player/components/remotion/remotion-slider-thumbnail}
 * @example
 * ```tsx
 * <TimeSlider.Root>
 *   <TimeSlider.Preview>
 *     <RemotionSliderThumbnail />
 *   </TimeSlider.Preview>
 * </TimeSlider.Root>
 * ```
 */
declare const RemotionSliderThumbnail: React.ForwardRefExoticComponent<Omit<RemotionSliderThumbnailProps, "ref"> & React.RefAttributes<HTMLElement>>;

declare class RemotionProviderLoader implements MediaProviderLoader {
    readonly name = "remotion";
    target: HTMLElement;
    constructor();
    canPlay(src: Src): boolean;
    mediaType(): MediaType;
    load(ctx: MediaContext): Promise<MediaProviderAdapter>;
}

declare class RemotionProvider implements MediaProviderAdapter {
    #private;
    protected readonly $$PROVIDER_TYPE = "REMOTION";
    readonly scope: Scope;
    get type(): string;
    get currentSrc(): RemotionSrc<RemotionInputProps> | null;
    get frame(): Record<string, number>;
    constructor(container: HTMLElement, ctx: MediaContext);
    setup(): void;
    play(): Promise<void>;
    pause(): Promise<void>;
    setMuted(value: React.SetStateAction<boolean>): void;
    setCurrentTime(time: number): void;
    setVolume(value: React.SetStateAction<number>): void;
    setPlaybackRate(rate: React.SetStateAction<number>): void;
    loadSource(src: Src): Promise<void>;
    destroy(): void;
    changeSrc(src: RemotionSrc | null): void;
    render: () => React.ReactNode;
    renderVideo: ({ src }: {
        src: RemotionSrc;
    }) => React.ReactNode;
}

/** @see {@link https://www.vidstack.io/docs/player/providers/remotion} */
declare function isRemotionProvider(provider: any): provider is RemotionProvider;
declare function isRemotionSrc(src?: Src | null): src is RemotionSrc;

export { RemotionErrorRenderer, RemotionInputProps, RemotionLoadingRenderer, RemotionPoster, RemotionProvider, RemotionProviderLoader, RemotionSliderThumbnail, RemotionSrc, RemotionThumbnail, isRemotionProvider, isRemotionSrc as isRemotionSource, isRemotionSrc };
export type { RemotionPosterProps, RemotionSliderThumbnailProps, RemotionThumbnailProps };
