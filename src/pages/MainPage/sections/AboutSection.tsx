import photo from '../../../assets/images/photo.jpg'
import Text, {TextVariant} from "../../../components/Text.tsx";

const AboutSection = () => {
    return (
        <section id='about' className="flex items-end gap-10">
            <img alt={photo} className='w-44 rounded-full' src={photo}/>
            <div>
                <Text variant={TextVariant.H1}>Иван Зуев</Text>
                <Text variant={TextVariant.P}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam aliquid debitis delectus facilis itaque laborum minima natus necessitatibus nostrum quo quod rem sequi tempora, tenetur totam? Pariatur, saepe! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta dolor eaque enim facilis fuga illo, in itaque iure libero minus natus provident qui repellendus sint sunt ullam voluptas voluptatum.</Text>
            </div>

        </section>
    );
};

export default AboutSection;