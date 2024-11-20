import {Text, TextVariant} from "../../../components/Text.tsx";
import {Link} from "../../../components/Link.tsx";
import {Button, StyleVariant} from "../../../components/Button.tsx";
import {Project} from "../../../types.ts";


const ProjectCard = ({title, description, stack, siteLink, gitLink} : Project) => {
    return (
        <div className=' shadow-lg bg-second flex flex-col justify-between p-6 items-center text-center text-first h-96 w-96 rounded-3xl'>
            <div className='flex flex-col gap-6 px-2'>
                <Text variant={TextVariant.H2}>{title}</Text>
                <Text variant={TextVariant.P}>{description}</Text>
                <div>
                    <Text variant={TextVariant.H3}>Stack</Text>
                    <Text variant={TextVariant.P}>{stack}</Text>
                </div>

            </div>
            {(siteLink || gitLink) &&
                <div className='flex gap-4'>
                    {siteLink &&
                        <Link target="_blank" to={siteLink}>
                            <Button Color={StyleVariant.OutlineSecond}>Website</Button>
                        </Link>}
                    {gitLink &&
                        <Link target="_blank" to={gitLink}>
                            <Button Color={StyleVariant.OutlineSecond}>GitHub</Button>
                        </Link>
                    }
                </div>}
        </div>
    );
};

export default ProjectCard;