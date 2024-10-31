import React from "react";
import Card from "./ProjectsCards/Card";
import { motion } from "framer-motion";
import reduxtodo from "../../assets/reduxtodo.png";
import { useSelector } from "react-redux";

function Projects({ projectsRef }) {
    const darkMode = useSelector((state) => state.darkMode);

    return (
        <div ref={projectsRef} id="projects" className={`mt-28 ${darkMode?"dark":""} `}>
            <div className="text-white text-3xl w-full flex justify-center mb-8">
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }}>
                    <h2 className="flex text-black dark:text-white md:text-6xl text-3xl items-center mb-8 ">Projects</h2>
                </motion.div>
            </div>
            <div className="flex w-[90%] justify-center ml-[5%] mb-20">
                <div className="flex flex-wrap justify-center text-white w-full gap-6">
                    <Card />
                    <Card />
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
