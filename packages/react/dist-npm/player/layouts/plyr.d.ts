import * as React from 'react';
import { PrimitivePropsWithRef } from '../../types/nodes.d.js';
import { PlyrLayoutProps } from '../../types/props.d.js';
export { PlyrLayoutIcon, PlyrLayoutIconProps, PlyrLayoutIcons, PlyrLayoutSlotName, PlyrLayoutSlots, plyrLayoutIcons } from '../../types/props.d.js';
import { WriteSignal, PlyrLayoutWord } from '../../types/vidstack.js';
export { PlyrControl, PlyrLayoutTranslations, PlyrMarker } from '../../types/vidstack.js';
import 'media-captions';
import 'dashjs';
import 'hls.js';

interface PlyrLayoutElementProps extends PlyrLayoutProps, PrimitivePropsWithRef<'div'> {
}
declare const PlyrLayout: React.ForwardRefExoticComponent<Omit<PlyrLayoutElementProps, "ref"> & React.RefAttributes<HTMLElement>>;

declare function PlyrAudioLayout(): React.JSX.Element;
declare namespace PlyrAudioLayout {
    var displayName: string;
}

declare function PlyrVideoLayout(): React.JSX.Element;
declare namespace PlyrVideoLayout {
    var displayName: string;
}

interface PlyrLayoutContext extends PlyrLayoutProps {
    previewTime: WriteSignal<number>;
}
declare const PlyrLayoutContext: React.Context<PlyrLayoutContext>;
declare function usePlyrLayoutContext(): PlyrLayoutContext;
declare function usePlyrLayoutWord(word: PlyrLayoutWord): any;
declare function i18n(translations: any, word: string): any;

export { PlyrAudioLayout, PlyrLayout, PlyrLayoutContext, PlyrLayoutProps, PlyrLayoutWord, PlyrVideoLayout, i18n, usePlyrLayoutContext, usePlyrLayoutWord };
export type { PlyrLayoutElementProps };
