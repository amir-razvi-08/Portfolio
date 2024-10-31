import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

function Card({ image, h1, h2, content, link,toph1,toph2 }) {
    const darkMode=useSelector((state)=>state.darkMode);

    return (
        <div
            className={`${darkMode?"dark":""} flex flex-wrap justify-center dark:bg-[#1c2129] card-container relative w-full  md:w-[40%] rounded-2xl m-2 overflow-hidden group transition-all duration-500 shadow-[0_0_10px_5px_rgba(0,0,0,0.2)] dark:shadow-[0_3px_2px_rgba(51,51,51,1)]`}
            onClick={() => handleClick(id)}
        >
            <div className="w-[90%] overflow-hidden m-6 rounded-lg cursor-pointer mb-4">
                <img src={image} alt="" className="w-full group-hover:scale-110 duration-300" />
            </div>
            <div className="]">
                <div className="flex justify-between items-center px-8 pb-4">
                    <div className="text-black font-semibold dark:text-white text-xl md:text-2xl">
                        {h1}
                        <div className="text-red-500 text-xs">{h2}</div>
                    </div>
                </div>
                <div className="">
                    <p className="flex text-black dark:text-white text-sm md:text-base px-7 pb-8">{content}</p>
                </div>
            </div>

            <div
                className={` bg-gradient-to-t dark:from-red-700 dark:to-red-700/0 from-gray-700 to-gray-50/0 absolute inset-0 text-white transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0
                }`}
            >
                <div className="h-[40%]"></div>
                <div className="text-xl w-full flex justify-center">
                    <h1>{toph1}</h1>
                </div>
                <div className="text-xl w-full flex justify-center pb-6">
                    <h1>{toph2}</h1>
                </div>
                <div className="w-full flex justify-center">
                    <div
                        onClick={() => window.open(link)}
                        className="w-12 h-12 bg-white text-xl text-red-500 flex justify-center items-center rounded-full cursor-pointer"
                    >
                        <FaExternalLinkAlt />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
