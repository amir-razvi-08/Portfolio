import { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Experties from "./components/Experties/Experties";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { motion } from "framer-motion";
import Contact from "./components/Contact/Contact";
import Skill from "./components/Skill/Skill";
import { useSelector, useDispatch } from "react-redux";
import { updateSection } from "./features/scrollComponent/scrollSlice";


const getRandom = (min, max) => Math.random() * (max - min) + min;
function getRandomFromTwo(num1, num2) {
    const numbers = [num1, num2];
    const randomIndex = Math.floor(Math.random() * 2);
    return numbers[randomIndex];
}

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

                    <Header/>
                    <Home homeRef={sectionRefs.home} />
                    <Experties expertiesRef={sectionRefs.experties} />
                    <Skill skillsRef={sectionRefs.skills} />
                    <Projects projectsRef={sectionRefs.projects} />
                    <Contact contactRef={sectionRefs.contact} />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
