import { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Experties from "./components/Experties/Experties";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { motion } from "framer-motion";
import Contact from "./components/Contact/Contact";
import Skill from "./components/Skill/Skill";
import { useSelector } from "react-redux";

const getRandom = (min, max) => Math.random() * (max - min) + min;
function getRandomFromTwo(num1, num2) {
    const numbers = [num1, num2];
    const randomIndex = Math.floor(Math.random() * 2);
    return numbers[randomIndex];
}

function App() {
    const expertiesRef = useRef(null);
    const skillRef = useRef(null);
    const projectsRef = useRef(null);
    const homeRef = useRef(null);
    const contactRef = useRef(null);

    const darkMode = useSelector((state) => state.darkMode);

    const scrollToExperties = () => {
        expertiesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const scrollToSkills = () => {
        skillRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const scrollToConnect = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const [activeSection, setActiveSection] = useState("");

    const [squares, setSquares] = useState([]);

    useEffect(() => {
        const generateSquares = () => {
            const squaresArray = [];
            for (let i = 0; i < 30; i++) {
                squaresArray.push({
                    size: getRandom(20, 150),
                    startX: getRandom(-100, window.innerWidth),
                    startY: getRandom(window.innerHeight - 100, window.innerHeight),
                    moveX: getRandom(-300, 300),
                    duration: getRandom(4, 12),
                    rotate: getRandomFromTwo(0, 25),
                    round: getRandomFromTwo(20, 100),
                });
            }
            setSquares(squaresArray);
        };

        generateSquares();
    }, []);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    setActiveSection(entry.target.id);
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });
        if (expertiesRef.current) observer.observe(expertiesRef.current);
        if (projectsRef.current) observer.observe(projectsRef.current);
        if (homeRef.current) observer.observe(homeRef.current);
        if (skillRef.current) observer.observe(skillRef.current);
        if (contactRef.current) observer.observe(contactRef.current);

        return () => {
            if (expertiesRef.current) observer.unobserve(expertiesRef.current);
            if (projectsRef.current) observer.unobserve(projectsRef.current);
            if (homeRef.current) observer.unobserve(homeRef.current);
            if (skillRef.current) observer.unobserve(skillRef.current);
            if (contactRef.current) observer.unobserve(contactRef.current);
        };
    }, []);

    return (
        <>
            <div className={`inset-0 -z-5 overflow-hidden scrollbar-hide top-0 w-screen h-screen -bottom-24 sticky ${darkMode?"dark":""}`} >
                <div
                    className=" top-0 w-screen h-screen overflow-auto scrollbar-hide dark:bg-neutral-950 
  dark:bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.2),rgba(255,255,255,0))] 
  antialiased selection:bg-cyan-300 selection:text-cyan-950 z-20 bg-gray-200"
                >
                    {squares.map((square, index) => (
                        <motion.div
                            key={index}
                            className="absolute bg-blue-500 opacity-50 rotate-45 -z-5"
                            style={{
                                width: square.size,
                                height: square.size,
                                left: square.startX,
                                top: square.startY,
                                rotate: square.rotate,
                                borderRadius: square.round,
                            }}
                            initial={{ y: 100 }}
                            animate={{
                                y: -3000,
                                x: square.moveX,
                            }}
                            transition={{
                                duration: square.duration,
                                ease: "easeInOut",
                                repeatType: "loop",
                            }}
                        />
                    ))}

                    <Header
                        scrollToSkills={scrollToSkills}
                        scrollToExperties={scrollToExperties}
                        scrollToHome={scrollToHome}
                        scrollToProjects={scrollToProjects}
                        scrollToConnect={scrollToConnect}
                        activeSection={activeSection}
                    />
                    <Home homeRef={homeRef} />
                    <Experties expertiesRef={expertiesRef} />
                    <Skill skillRef={skillRef} />
                    <Projects projectsRef={projectsRef} />
                    <Contact contactRef={contactRef} />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
