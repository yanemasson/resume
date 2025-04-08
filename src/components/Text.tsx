import { ReactNode} from "react";
import {JSX} from "react/jsx-runtime";
import IntrinsicElements = JSX.IntrinsicElements;

export enum TextVariant {
    H1 = 'H1',
    H2 = 'H2',
    H3 = 'H3',
    P = 'P',
    B = 'B',
    CAPTION = 'CAPTION'
}

type TextProps = {
    children: ReactNode;
    variant: TextVariant;
    className?: string;
};
const Text = ({children, variant, className}:TextProps) => {
    const variantStyleMap = {
        [TextVariant.H1]: 'font-semibold text-[60px] underline',
        [TextVariant.H2]: 'font-semibold text-[42px] underline',
        [TextVariant.H3]: 'font-semibold text-[36px]',
        [TextVariant.P]: 'text-[16px] xl:text-[18px] font-light tracking-[0em] leading-tight',
        [TextVariant.B]: 'text-[16px] md:text-[20px] font-bold',
        [TextVariant.CAPTION]: 'text-[16px] font-light',
    };
    const Component = variant === TextVariant.B ? 'strong'
        : variant === TextVariant.CAPTION ? 'p'
            : variant.toLowerCase() as keyof IntrinsicElements;

    return (
        <Component className={`${variantStyleMap[variant]} ${className}`}>
            {children}
        </Component>
    );
};
export default Text;