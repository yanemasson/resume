import {projects_data} from "../../../data/projects_data.ts";
import ProjectItem from "../../../components/ProjectItem.tsx";
import {ProjectType} from "../../../types/project_type.ts";
import Text, {TextVariant} from "../../../components/Text";

const ProjectListSection = () => {
    return (
        <div>
            <Text variant={TextVariant.H2}>Мои проекты</Text>
            <Text className='text-lightgray -mt-2 ' variant={TextVariant.CAPTION}>(которые можно показать)</Text>
            <div className='flex gap-10'>
                {projects_data.map((project: ProjectType) => (
                    <ProjectItem project={project} />
                ))}
            </div>
        </div>

    );
};

export default ProjectListSection;