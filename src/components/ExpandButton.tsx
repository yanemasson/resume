import Text, {TextVariant} from "./Text.tsx";

interface ExpandButtonProps {
    onClick?: () => void;
    isOpen: boolean;
}

const ExpandButton = ({onClick, isOpen}: ExpandButtonProps) => {
    return (
        <button onClick={onClick}>
            <Text className='flex gap-1.5 items-center text-lightgray hover:text-white focus:text-white' variant={TextVariant.CAPTION}>
                {!isOpen ? <>Развернуть</> : <>Свернуть</>}

                <svg className={`${isOpen ? 'rotate-180' : ''}`} width="12" height="9"
                     viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L0 0H12L6 9Z" fill="currentColor" />
                </svg>
            </Text>
        </button>
    );
};

export default ExpandButton;