import {ReactNode} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export enum ButtonVariant {
    primary = 'primary',
    outline = 'outline'
}
interface ButtonProps {
    children: ReactNode,
    variant?: ButtonVariant
    onClick?: () => void
    className?: string
}
const Button = ({children, onClick, className, variant = ButtonVariant.primary} : ButtonProps) => {
    const variantStyleMap = {
        [ButtonVariant.primary]: 'bg- text-white hover:bg-white hover:text-light-brown active:bg-black',
        [ButtonVariant.outline]: 'border-[2px] rounded-xl',
    }
    return (
        <button
            className={`max-w-36 p-1 duration-200 ${className} 
            ${variantStyleMap[variant]}`} onClick={()=> onClick} >{children}</button>
    );
};

export default Button;