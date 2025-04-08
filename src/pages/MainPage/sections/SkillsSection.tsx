import {hard_skills, soft_skills} from '../../../data/skills_data'
import Text, {TextVariant} from "../../../components/Text.tsx";
import {SkillItem} from "../../../types/skills_type.ts";

const SkillsSection = () => {
    return (
        <section>
            <Text variant={TextVariant.H2}>Мои навыки</Text>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-5'>
                    <Text variant={TextVariant.H3}>Hard skills</Text>
                    {hard_skills.items.map((item: SkillItem, index) => (
                        <div key={index}>
                            <Text variant={TextVariant.B}>{item.title}</Text>
                            {item.items.map((skill, index: number) => (
                                <Text key={index} variant={TextVariant.P}>- {skill}</Text>
                            ))}
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-5'>
                    <Text variant={TextVariant.H3}>Soft skills</Text>
                    {soft_skills.items.map((item: SkillItem, index: number) => (
                        <div key={index}>
                            <Text variant={TextVariant.B}>{item.title}</Text>
                            {item.items.map((skill, index) => (
                                <Text key={index} variant={TextVariant.P}>- {skill}</Text>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;