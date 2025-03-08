import {useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Experties from "./components/Experties/Experties";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skill/Skills";
import { useSelector, useDispatch } from "react-redux";
import { updateSection } from "./features/scrollComponent/scrollSlice";

function App() {
    const dispatch = useDispatch();

    const sectionRefs = {
        home: useRef(null),
        experties: useRef(null),
        skills: useRef(null),
        projects: useRef(null),
        contact: useRef(null),
    };

    const darkMode = useSelector((state) => state.theme.darkMode);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                    dispatch(updateSection(entry.target.id));
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.4 });

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [dispatch]);

    return (
        <>
            <div className={`inset-0 -z-5 overflow-hidden scrollbar-hide top-0 w-screen h-screen -bottom-24 sticky ${darkMode ? "dark" : ""}`}>
                <div
                    className=" top-0 w-screen h-screen overflow-auto scrollbar-hide dark:bg-neutral-950 
  dark:bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.2),rgba(255,255,255,0))] 
  antialiased selection:bg-cyan-300 selection:text-cyan-950 z-20 bg-gray-200"
                >
                    <Header />
                    <Home homeRef={sectionRefs.home} />
                    <Experties expertiesRef={sectionRefs.experties} />
                    <Skills skillsRef={sectionRefs.skills} />
                    <Projects projectsRef={sectionRefs.projects} />
                    <Contact contactRef={sectionRefs.contact} />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
