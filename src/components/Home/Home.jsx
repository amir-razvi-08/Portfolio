import React from "react";
import profile from "../../assets/profile.jpeg";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useSelector } from "react-redux";
function Home({ homeRef }) {

    const darkMode = useSelector((state)=>state.themeMode);

    return (
        <div ref={homeRef} id="home" className={` ${darkMode? 'dark':''} flex flex-wrap justify-around dark:text-white z-40 items-center`}>
            <div className="w-[45rem] z-40 m-4">
                <div className="mt-4 md:mt-16 p-2">
                    <h1 className="text-7xl font-normal tracking-tight">
                        Hii, I'm
                        <span className="text-red-500"> Amir Razvi</span>
                    </h1>
                    <p className="py-2 text-[2.5rem] from-cyan-500 from-10% to-yellow-400 to-50% bg-gradient-to-r bg-clip-text text-transparent tracking-tight">
                        A
                        <Typewriter
                            words={[" Full-Stack Developer", " Creative UI Designer", " Java & DSA Enthusiast", " Problem Solver"]}
                            loop
                            typeSpeed={50}
                            deleteSpeed={30}
                            delaySpeed={1000}
                            cursor
                            cursorStyle="|"
                        />
                    </p>
                    <p className="text-[1.5rem]">
                        Welcome to my portfolio! I’m passionate about building functional, aesthetically pleasing digital solutions that make an impact.
                        With expertise in full-stack development, SEO optimization, and creating user-centered designs, I turn complex challenges into
                        streamlined, intuitive experiences. Whether you’re looking for someone to design a dynamic website, optimize your app’s
                        performance, or solve intricate technical problems, I’m here to help.
                        <a href="/resume.pdf" download="Amir'sResume.pdf" className="flex items-center my-4">
                            <span className="flex items-center bg-red-600 text-gray-200 rounded-lg hover:bg-orange-900 duration-300 px-2 py-1">
                                <FaDownload className="mr-2" />
                                Resume
                            </span>
                        </a>
                    </p>
                </div>
            </div>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="z-40 overflow-hidden rounded-[50%] w-72 h-72 mt-12"
            >
                <img src={profile} alt="" className="w-72 h-72 rounded-[50%] hover:scale-110 duration-500" />
            </motion.div>
        </div>
    );
}

export default Home;
