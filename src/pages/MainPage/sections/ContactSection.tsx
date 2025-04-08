import Text, {TextVariant} from "../../../components/Text.tsx";
import Anchor from "../../../components/Anchor.tsx";

const ContactSection = () => {
    return (
        <div>
            <Text variant={TextVariant.H2}>Напишите мне</Text>
            <div className='flex items-center gap-1'>
                <Text variant={TextVariant.B}>Telegram:</Text>
                <Anchor href='https://t.me/crab_roll'>
                    <Text variant={TextVariant.P}>@crab_roll</Text>
                </Anchor>
            </div>
            <div className='flex items-center gap-1'>
                <Text variant={TextVariant.B}>GitHub:</Text>
                <Anchor href='https://github.com/yanemasson'>
                    <Text variant={TextVariant.P}>yanemasson</Text>
                </Anchor>
            </div>
            <Text variant={TextVariant.B}>Часовой пояс <br/> UTC+7 | МСК+4</Text>
        </div>
    );
};

export default ContactSection;