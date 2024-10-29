import React from "react";
import ARlogo from "../../assets/ARlogo.png";
import { IoMdMenu } from "react-icons/io";

function Header({ scrollToSkills, scrollToProjects, scrollToHome,scrollToExperties, scrollToConnect,activeSection }) {
    return (
        <div className="h-16 flex justify-between items-center text-white sticky top-0 backdrop-blur w-full md:w-[90%] z-50 md:ml-[5%]">
            <div className="pl-3 cursor-pointer">
                <img src={ARlogo} alt="" className="w-14 h-12" />
            </div>
            <div className="justify-between hidden md:flex md:block ">
                <div className="flex items-center gap-8">
                    <div
                        onClick={scrollToHome}
                        className={`cursor-pointer rounded-b-md hover:text-red-500 duration-300 ${
                          activeSection === "home" ? "text-white" : "text-white/50"
                      }`}
                    >
                        Home
                    </div>
                    <div onClick={scrollToExperties} className={`cursor-pointer rounded-b-md hover:text-red-500 duration-300 ${
                            activeSection === "experties" ? "text-white" : "text-white/50"
                        }`}>
                       Experties
                    </div>
                    <div onClick={scrollToSkills} className={`cursor-pointer hover:text-red-500 duration-300 ${
                            activeSection === "skills" ? "text-white" : "text-white/50"
                        }`}>
                       Skills
                    </div>
                    <div
                        onClick={scrollToProjects}
                        className={`cursor-pointer rounded-b-md hover:text-red-500 duration-300 ${
                            activeSection === "projects" ? "text-white" : "text-white/50"
                        }`}
                    >
                        Projects
                    </div>
                </div>
            </div>
            <div className="md:hidden text-3xl mr-4">
                <IoMdMenu />
            </div>
            <div className=" items-center hidden md:flex md:block">
            <div
                    onClick={scrollToConnect}
                    className={` border-2 p-2 cursor-pointer rounded hover:text-red-500 duration-300 ${
                        activeSection === "contact" ? "text-yellow-300" : "text-white"
                    }`}
                >
                    Let's Connect
                </div>
            </div>
        </div>
    );
}

export default Header;
