import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const skillsData = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "Tailwind CSS", level: 70 },
    { name: "Node.js", level: 80 },
    { name: "React", level: 70 },
    { name: "Mongodb", level: 60 },
    { name: "Express", level: 65 },
    { name: "DSA", level: 65 },
];
const Skill = ({skillRef}) => {

    const darkMode=useSelector((state)=>state.darkMode);

    return (
        <div className={`w-screen mt-28 ${darkMode?"dark":""}`} id="skills" ref={skillRef}>
            <div className="w-full flex justify-center">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className="">
          <h2 className="flex md:text-6xl text-3xl items-center text-black dark:text-white mb-8">Skills</h2>
        </motion.div>
            </div>
            <div className="w-full flex justify-center text-black dark:text-white">
                <div className="w-[70rem] mx-4">
                    <div>
                        {skillsData.map((skill) => (
                            <div key={skill.name} className="my-4">
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-sm font-semibold">{skill.level}%</span>
                                </div>
                                <div className="relative w-full h-4 rounded-lg bg-white shadow-[0_0_10px_5px_rgba(0,0,0,0.2)]">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute h-full rounded-lg bg-gradient-to-r from-red-500 to-blue-600"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
