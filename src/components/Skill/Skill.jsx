import React from "react";
import { motion } from "framer-motion";

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
    return (
        <div className="w-screen mt-28" id="skills" ref={skillRef}>
            <div className="w-full flex justify-center text-white">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className="">
          <h2 className="flex text-white md:text-6xl text-3xl items-center mb-8">Skills</h2>
        </motion.div>
            </div>
            <div className="w-full flex justify-center text-white">
                <div className="w-[70rem] mx-4">
                    <div>
                        {skillsData.map((skill) => (
                            <div key={skill.name} className="my-4">
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium">{skill.name}</span>
                                    {/* Percentage aligned at the end of the bar */}
                                    <span className="text-sm font-semibold">{skill.level}%</span>
                                </div>
                                <div className="relative w-full h-4 bg-gray-200 rounded-lg">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute h-full rounded-lg bg-gradient-to-r from-red-500 to-blue-600"
                                    />
                                    {/* Animated percentage text */}
                                    <motion.span
                                        initial={{ opacity: 0, x: 0 }}
                                        whileInView={{ opacity: 1, x: `${skill.level - 10}%` }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute right-0 top-0 mt-1 text-xs text-white font-semibold"
                                    ></motion.span>
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
