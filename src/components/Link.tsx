import {AnchorHTMLAttributes} from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string;
};

export const Link = ({to, ...props}: LinkProps) => {
  return <a
      rel="noopener noreferrer"
      className='text-[15px] font-normal tracking-[.2px]' href={to}
      {...props}
  />;
};
