import * as React from 'react';

type PrimitivePropsWithRef<E extends React.ElementType> = Omit<React.ComponentProps<E>, 'style'> & React.Attributes & {
    asChild?: boolean;
    style?: React.CSSProperties | (React.CSSProperties & Record<`--${string}`, string | null | undefined>) | undefined;
};

export type { PrimitivePropsWithRef };
