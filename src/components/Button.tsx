import {ButtonHTMLAttributes} from 'react';

export enum StyleVariant {
  OutlineCurrent = 'outline_current',
  OutlineSecond = 'outline_second'
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Color?: StyleVariant;
};

export const Button = ({Color = StyleVariant.OutlineCurrent, ...props}: ButtonProps) => {
  const variantStyle = styleMap[Color];
  return (
    <div className='flex flex-col'>
      <button {...props} className={` text-[15px] p-2  tracking-[.2px] rounded-2xl ${variantStyle}`} />
    </div>
  );
};

const styleMap = {
  [StyleVariant.OutlineCurrent]: 'border border-second bg-transparent hover:text-white hover:border-white',
  [StyleVariant.OutlineSecond]: ' border border-first bg-transparent hover:text-black hover:border-black',
};
