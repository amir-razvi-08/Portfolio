import React from "react";
import { useState } from "react";
import ARlogo from "../../assets/ARlogo.png";
import AR from "../../assets/AR.png";
import { IoMdMenu } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeMode/themeSlice";

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 20,
};

function Header({ scrollToSkills, scrollToProjects, scrollToHome, scrollToExperties, scrollToConnect, activeSection }) {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);
    const darkMode = useSelector((state) => state.darkMode);
    const dispatch = useDispatch();

    return (
        <div className={`h-16 flex justify-between items-center sticky top-0 backdrop-blur w-full md:w-[90%] z-50 md:ml-[5%] ${darkMode ? "dark" : ""}`}>
            <div className="pl-3 cursor-pointer">
                <img src={ARlogo} alt="" className="w-14 h-12 hidden dark:block" />
                <img src={AR} alt="" className="w-14 h-12 dark:hidden" />
            </div>
            <div className="justify-between hidden md:block ">
                <div className="flex items-center gap-8">
                    <div
                        onClick={scrollToHome}
                        className={`cursor-pointer rounded-b-md dark:hover:text-red-500 hover:text-red-500 duration-300 font-semibold ${
                            activeSection === "home" ? "dark:text-white" : "dark:text-white/50 text-black/70"
                        }`}
                    >
                        Home
                    </div>
                    <div
                        onClick={scrollToExperties}
                        className={`cursor-pointer rounded-b-md dark:hover:text-red-500 hover:text-red-500 duration-300 font-semibold ${
                            activeSection === "experties" ? "dark:text-white" : "dark:text-white/50 text-black/70"
                        }`}
                    >
                        Experties
                    </div>
                    <div
                        onClick={scrollToSkills}
                        className={`cursor-pointer dark:hover:text-red-500 hover:text-red-500 duration-300 font-semibold ${
                            activeSection === "skills" ? "dark:text-white" : "dark:text-white/50 text-black/70"
                        }`}
                    >
                        Skills
                    </div>
                    <div
                        onClick={scrollToProjects}
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
                    className={`w-10 h-10 mr-4  ${
                        darkMode ? "bg-white text-black text-3xl" : "bg-black text-white text-2xl"
                    } rounded-full cursor-pointer flex justify-center items-center `}
                    layout
                    transition={spring}
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
                                <CiLight />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="light"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <IoMoonOutline />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
                <div className="items-center hidden md:block">
                    <div
                        onClick={scrollToConnect}
                        className={` border-2 border-black dark:border-white p-2 cursor-pointer rounded dark:hover:text-red-500 hover:text-red-500 duration-300 font-semibold ${
                            activeSection === "contact" ? "text-yellow-700" : "dark:text-white/50 text-black/70"
                        }`}
                    >
                        Let's Connect 
                    </div>
                </div>

                <div className="md:hidden text-3xl mr-4">
                    <IoMdMenu />
                </div>
            </div>
        </div>
    );
}
export default Header;
