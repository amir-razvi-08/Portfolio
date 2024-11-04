import React from "react";
import ARlogo from "../../assets/ARlogo.png";
import AR from "../../assets/AR.png";
import { motion, AnimatePresence } from "framer-motion";
import { MdLightMode } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeMode/themeSlice";
import SideNav from "./SideNav";
import {scrollToSection} from '../../features/scrollComponent/scrollSlice';

function Header() {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch = useDispatch();
    const activeSection = useSelector((state) => state.activeSection.currentSection);


    return (
        <div className={` h-16 flex justify-between items-center sticky top-0 backdrop-blur w-full md:w-[90%] z-50 md:ml-[5%] ${darkMode ? "dark" : ""}`}>
            <div className="pl-3 cursor-pointer">
                <img src={ARlogo} alt="" className="w-14 h-12 hidden dark:block" />
                <img src={AR} alt="" className="w-14 h-12 dark:hidden" />
            </div>
            <div className="justify-between hidden md:block ">
                <div className="flex items-center gap-8">
                    <div
                        onClick={() => dispatch(scrollToSection('home'))}
                        className={`cursor-pointer rounded-b-md dark:hover:text-red-500 hover:text-red-500 duration-300 font-semibold ${
                            activeSection === "home" ? "dark:text-white" : "dark:text-white/50 text-black/70"
                        }`}
                    >
                        Home
                    </div>
                    <div
                        onClick={() => dispatch(scrollToSection('experties'))}
                        className={`cursor-pointer rounded-b-md dark:hover:text-red-500 hover:text-red-500 duration-300 font-semibold ${
                            activeSection === "experties" ? "dark:text-white" : "dark:text-white/50 text-black/70"
                        }`}
                    >
                        Experties
                    </div>
                    <div
                        onClick={() => dispatch(scrollToSection('skills'))}
                        className={`cursor-pointer dark:hover:text-red-500 hover:text-red-500 duration-300 font-semibold ${
                            activeSection === "skills" ? "dark:text-white" : "dark:text-white/50 text-black/70"
                        }`}
                    >
                        Skills
                    </div>
                    <div
                        onClick={() => dispatch(scrollToSection('projects'))}
                        className={`cursor-pointer dark:hover:text-red-500 rounded-b-md hover:text-red-500 duration-300 font-semibold ${
                            activeSection === "projects" ? "dark:text-white" : "dark:text-white/50 text-black/70"
                        }`}
                    >
                        Projects
                    </div>
                </div>
            </div>

            <div className=" flex items-center">
                <motion.div
                    className={`w-8 h-8 mr-6  ${
                        darkMode ? " text-white text-3xl" : " text-black text-2xl"
                    } rounded-full cursor-pointer flex justify-center items-center `}
                    onClick={() => dispatch(toggleTheme())}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {darkMode ? (
                            <motion.div
                                key="moon"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <MdLightMode />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="light"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <IoMdMoon />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
                <div className="items-center hidden md:block">
                    <div
                        onClick={() => dispatch(scrollToSection('contact'))}
                        className={` border-2 border-black dark:border-white p-2 cursor-pointer rounded dark:hover:text-red-500 hover:text-red-500 duration-300 font-semibold ${
                            activeSection === "contact" ? "dark:text-[#fcf408] text-[#ef4444]" : "dark:text-white/50 text-black/70"
                        }`}
                    >
                        Let's Connect
                    </div>
                </div>

                <div className="md:hidden text-3xl mr-8">
                    <SideNav/>
                </div>
            </div>
        </div>
    );
}
export default Header;
