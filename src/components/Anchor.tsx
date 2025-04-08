import Text, {TextVariant} from "./Text";
import {ReactNode} from "react";

interface AnchorProps {
    href: string;
    children: ReactNode;
}
const Anchor = ({href, children} : AnchorProps) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Text className='duration-100 transition-colors text-lightgray hover:text-white focus:text-white ' variant={TextVariant.P}>
                {children}
            </Text>
        </a>
    );
};

export default Anchor;