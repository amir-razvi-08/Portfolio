import React from "react";
import Card from "./ProjectsCards/Card";
import { motion } from "framer-motion";
import reduxtodo from "../../assets/reduxtodo.png";
import currencyConv from "../../assets/currencyConv.png";
import darkPortfolio from "../../assets/darkPortfolio.png";
import lightPortfolio from "../../assets/lightPortfolio.png"
import { useSelector } from "react-redux";

function Projects({ projectsRef }) {
    const darkMode = useSelector((state) => state.darkMode);

    const portfolio = darkMode ? lightPortfolio : darkPortfolio;

    return (
        <div ref={projectsRef} id="projects" className={`mt-28 ${darkMode?"dark":""} `}>
            <div className="text-white text-3xl w-full flex justify-center mb-8">
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }}>
                    <h2 className="flex text-black dark:text-white md:text-6xl text-3xl items-center mb-8 font-bold ">Projects</h2>
                </motion.div>
            </div>
            <div className="flex w-[90%] justify-center ml-[5%] mb-20">
                <div className="flex flex-wrap justify-center text-white w-full gap-6">
                    <Card 
                    link={"https://amirrazvi.vercel.app"}
                    image={portfolio}
                    h1={"Personal Portfolio Website"}
                    h2={'Showcasing My Work with React, Tailwind CSS, and Framer Motion'}
                    content={'A responsive and dynamic portfolio website designed to highlight my web development projects, skills, and experience. Built using React for fast rendering, React-Redux for efficient state management, and Framer Motion for engaging animations.'}
                    toph1={'React, Redux-Toolkit,Framer-motion'}
                    toph2={'TailwindCss,EmailJs'}
                    />
                    <Card 
                    link={"https://currency-converter-wheat-six.vercel.app"}
                    image={currencyConv}
                    h1={"Currency Converter"}
                    h2={"Effortless Global Exchange"}
                    content={"Convert currencies in real-time with a user-friendly tool built using React. This application delivers accurate conversion rates across multiple currencies, offering instant results for efficient, on-the-go currency calculations."}
                    toph1={'React,Api handling'}
                    toph2={'TailwindCss'}
                    />
                    <Card
                        link={"https://amirreduxtodo.vercel.app"}
                        image={reduxtodo}
                        h1={"Todo Manager"}
                        h2={"React & Redux-Powered Task Organizer"}
                        content={
                            "A responsive todo app built with React, Redux, and Tailwind CSS. Features include task editing, completion tracking, and a user-friendly interface, showcasing efficient state management and productivity."
                        }
                        toph1={"React, Redux-Toolkit"}
                        toph2={"TailwindCss"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
