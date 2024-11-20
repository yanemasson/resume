import {ReactNode} from 'react';

export enum TextVariant {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  P = 'P',
}

type TextProps = {
  children: ReactNode;
  variant: TextVariant;
};

export const Text = ({children, variant}: TextProps) => {
  const variantStyle = variantStyleMap[variant];
  return <p className={` ${variantStyle}`}>{children}</p>;
};

const variantStyleMap = {
  [TextVariant.H1]: 'text-[40px] font-bold',
  [TextVariant.H2]: 'text-[30px] font-bold',
  [TextVariant.H3]: 'text-[20px] font-bold',
  [TextVariant.P]: 'text-[18px] font-normal',
};
