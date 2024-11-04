import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiTailwindcss, SiRedux, SiFramer, SiExpress, SiSocketdotio, SiPostman } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { PiTreeStructureFill } from "react-icons/pi";
import LinearBar from "./Progressbar/Linearbar";
import Circularbar from "./Progressbar/Circularbar";


function Skills({ skillsRef }) {
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <div id="skills" ref={skillsRef}>
            <div className={`w-screen z-40 mt-28 ${darkMode ? "dark" : ""}`} >
                <div className="w-full flex justify-center">
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }}>
                        <h2 className="flex md:text-6xl text-3xl items-center text-black dark:text-white mb-8 font-bold">Skills</h2>
                    </motion.div>
                </div>
                <div className="w-full flex justify-center text-black dark:text-white">
                    <div className="w-[95%] mt-8">
                        <div className="w-full flex gap-8 flex-wrap justify-center">
                            <div className="w-[40rem] bg-white dark:bg-gray-800 rounded-xl shadow-[0_0_10px_5px_rgba(0,0,0,0.2)]">
                                <div className="text-whit text-3xl p-6 pb-2">Frontend Development</div>
                                <div className="w-full text-2xl px-2">
                                    <LinearBar icon={<FaHtml5 />} name={"HTML"} progress={83} />
                                    <LinearBar icon={<FaCss3Alt />} name={"CSS"} progress={78} />
                                    <LinearBar icon={<IoLogoJavascript />} name={"JavaScript"} progress={75} />
                                    <LinearBar icon={<SiTailwindcss />} name={"TailwindCss"} progress={77} />
                                    <LinearBar icon={<FaReact />} name={"React"} progress={70} />
                                    <LinearBar icon={<SiRedux />} name={"Redux"} progress={75} />
                                    <LinearBar icon={<SiFramer />} name={"Framer-Motion"} progress={70} />
                                </div>
                            </div>
                            <div className="w-[40rem] bg-white dark:bg-gray-800 rounded-xl shadow-[0_0_10px_5px_rgba(0,0,0,0.2)]">
                                <div>
                                    <div className="text-3xl p-6 dark:text-white">Backend Development & databases</div>
                                    <div className="flex flex-wrap justify-around gap-8 p-6">
                                        <div>
                                            <Circularbar progress={60} />
                                            <div className="flex justify-center items-center gap-2 text-lg">
                                                <div className="bg-black text-white dark:bg-white dark:text-black p-[0.15rem] rounded text-sm">
                                                    <SiExpress />
                                                </div>
                                                Express js
                                            </div>
                                        </div>
                                        <div>
                                            <Circularbar progress={60} />
                                            <div className="flex justify-center items-center gap-2 text-lg">
                                                <div className="bg-black text-white dark:bg-white dark:text-black p-[0.15rem] rounded text-sm">
                                                    <SiMongodb />
                                                </div>
                                                MongoDB
                                            </div>
                                        </div>
                                        <div>
                                            <Circularbar progress={60} />
                                            <div className="flex justify-center items-center gap-2 text-lg">
                                                <div className="bg-black text-white dark:bg-white dark:text-black p-[0.15rem] rounded text-sm">
                                                    <DiPostgresql />
                                                </div>
                                                MySQL
                                            </div>
                                        </div>
                                        <div>
                                            <Circularbar progress={60} />
                                            <div className="flex justify-center items-center gap-2 text-lg">
                                                <div className="bg-black text-white dark:bg-white dark:text-black p-[0.15rem] rounded text-sm">
                                                    <SiSocketdotio />
                                                </div>
                                                Socket.IO
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-10 ">
                                    <div className="text-3xl p-6">Tools & Other Skills</div>
                                    <div className="flex gap-2 flex-wrap justify-center">
                                        <div className="w-[19rem] p-2 rounded-tr-3xl rounded-bl-3xl border-2 border-gray-400 mb-4">
                                            <div className="flex items-center gap-2 text-2xl tracking-tight">
                                                <FaGitAlt /> Git
                                            </div>
                                            <div>Version control for collaborative and tracked development</div>
                                        </div>
                                        <div className="w-[19rem] p-2 rounded-tr-3xl rounded-bl-3xl border-2 border-gray-400 mb-4">
                                            <div className="flex items-center gap-2 text-2xl tracking-tight">
                                                <FaGithub /> Github
                                            </div>
                                            <div>Hosting projects and managing repositories</div>
                                        </div>
                                        <div className="w-[19rem] p-2 rounded-tr-3xl rounded-bl-3xl border-2 border-gray-400 mb-4">
                                            <div className="flex items-center gap-2 text-xl">
                                                <SiPostman /> Postman
                                            </div>
                                            <div>API testing and development environment for HTTP requests</div>
                                        </div>
                                        <div className="w-[19rem] p-2 rounded-tr-3xl rounded-bl-3xl border-2 border-gray-400 mb-4">
                                            <div className="flex items-center gap-2 text-2xl tracking-tight">
                                                <PiTreeStructureFill /> DSA with Java
                                            </div>
                                            <div>Problem-solving, optimization and java implementation</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

