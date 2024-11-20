import ProjectCard from "./Components/ProjectCard.tsx";
import {Text, TextVariant} from "../../components/Text.tsx";
import {useTranslation} from "react-i18next";
import {Project} from "../../types.ts";


const Projects = () => {
    const { t  } = useTranslation();

    const projects:Project[] = [
        {
            title: 'Backstagegroup',
            description: t('BackstagegroupDes'),
            stack: 'TypeScript, React, HashRouter, TailWind',
            siteLink: 'https://backstagegroup.ru',
            gitLink: 'https://github.com/yanemasson/backstage_group'
        },
        {
            title: 'Hatomarano Art',
            description: t('HatomaranoDes'),
            stack: 'TS, React, HashRouter, TailWind, Decap CMS',
            gitLink: "https://github.com/yanemasson/hatomaran"
        },
        {
            title: 'What a Weather App',
            description: t('WeatherAppDes'),
            stack: 'TypeScript, React, Open Weather Map',
        }

    ]

    return (
        <div className='p-20 flex flex-col gap-10'>
            <Text variant={TextVariant.H1}>{t('Projects')}</Text>
            <div className='flex gap-10'>
                {projects.map(item => <ProjectCard
                    title={item.title}
                    description={item.description}
                    stack={item.stack}
                    siteLink={item.siteLink}
                    gitLink={item.gitLink}
                    />)}
            </div>

        </div>
    );
};

export default Projects;