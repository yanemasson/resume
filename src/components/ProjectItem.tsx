import {ProjectType} from "../types/project_type.ts";
import Button, {ButtonVariant} from "./Button.tsx";
import Text, {TextVariant} from "./Text.tsx";
import {useState} from "react";
import {truncateToWord} from "../utils/truncateToWord.ts";
import ExpandButton from "./ExpandButton.tsx";
import Anchor from "./Anchor.tsx";

const ProjectItem = ({project}: {project: ProjectType}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex flex-col gap-5 rounded-xl p-3 w-80'>
            <div className='flex flex-col gap-1'>
                <Text variant={TextVariant.H3}>{project.title}</Text>
                <div>
                    <Text variant={TextVariant.P}>{isOpen ? project.description : truncateToWord(project.description, 70)}</Text>
                    <ExpandButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                {project.link &&
                    <Text variant={TextVariant.P}>
                        <Anchor href={project.link}>
                            {project.link.length < 30 ? project.link : project.link.slice(0, 30) + '...'}
                        </Anchor>
                    </Text>
                }
                <Button variant={ButtonVariant.outline}>Подробнее</Button>
            </div>
        </div>
    );
};

export default ProjectItem;