import AboutSection from "./sections/AboutSection.tsx";
import ProjectListSection from "./sections/ProjectListSection.tsx";
import SkillsSection from "./sections/SkillsSection.tsx";
import ContactSection from "./sections/ContactSection.tsx";

const MainPage = () => {
    return (
        <div className='flex flex-col gap-20 pt-5'>
            <AboutSection />
            <ProjectListSection/>
            <SkillsSection/>
            <ContactSection/>
        </div>
    );
};

export default MainPage;