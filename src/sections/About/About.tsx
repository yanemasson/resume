import {Text, TextVariant} from "../../components/Text.tsx";
import {useTranslation} from "react-i18next";

const About = () => {
    const { t  } = useTranslation();
    return (
        <div className='pt-20 mx-20 flex flex-col gap-10'>
            <div className='flex gap-8 items-center'>
                <img
                    className='h-40 w-40 rounded-full object-cover object-center'
                    alt={'Photo'} src={'photo.jpg'} draggable="false"/>
                <div>
                    <Text variant={TextVariant.H1}>{t('Zuev Ivan')}</Text>
                    <Text variant={TextVariant.H3}>{t('Frontend developer')}</Text>
                </div>
            </div>
                <Text variant={TextVariant.P}>{t('AboutMe')}</Text>
            </div>
    );
};

export default About;