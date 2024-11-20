import './App.css';
import './i18n';
import {Navbar} from './sections/Navbar';
import About from "./sections/About/About.tsx";
import Projects from "./sections/Projects/Projects.tsx";
import Contact from "./sections/Contact/Contact.tsx";
import Skills from "./sections/Skills/Skills.tsx";

function App() {
    return (
        <div className='bg-first text-second flex-row gap-12'>
            <Navbar />
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;
