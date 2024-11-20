import {Text, TextVariant} from "../../components/Text.tsx";
import {Link} from "../../components/Link.tsx";


const Contact = () => {
    return (
        <div className='px-20'>
            <Text variant={TextVariant.H1}>Contact</Text>
            <div className='flex flex-col'>
                <Link>Telegram: @crabroll</Link>
                <Link>e-mail: ivan_zuev00@mail.ru</Link>
            </div>

        </div>
    );
};

export default Contact;