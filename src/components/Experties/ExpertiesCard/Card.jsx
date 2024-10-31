import React from "react";
import { LuArrowRightToLine } from "react-icons/lu";
import { useSelector } from "react-redux";
function Card({ name, icon, headline, ph1, ph2, ph3, ph4, point1, point2, point3, point4 }) {
    const darkMode=useSelector((state)=>state.darkMode);

    return (
        <div className={` ${darkMode?"dark":""} w-auto h-[28.5rem] md:w-auto md:h-[26rem] border-4 dark:border-neutral-700 rounded-xl m-5 duration-300 overflow-hidden group transition-all z-40`}>
            <div className={`w-full h-[120%] md:w-full flex items-center justify-center text-black dark:text-white rounded-lg transition-all ease-in-out transform translate-y-0 ${darkMode?"":"bg-white"} dark:bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))] group-hover:-translate-y-14 dark:group-hover:bg-neutral-900 duration-300 z-40`}>
                <div className="z-40">
                    <div className="text-yellow-300 text-2xl md:text-4xl pt-5 md:pt-8 pl-4 mt-4 z-40">{icon}</div>
                    <h2 className="text-black dark:text-white font-semibold text-lg md:text-2xl pl-4  md:mt-4">{name}</h2>
                    <div className="p-4 pt-2 text-sm">
                        <h1>{headline}</h1>
                        <div>
                            <div>
                                <span className="text-red-500 mr-1">{ph1}</span>
                                {point1}
                            </div>
                            <div>
                                <span className="text-red-500 mr-1">{ph2}</span>
                                {point2}
                            </div>
                            <div>
                                <span className="text-red-500 mr-1">{ph3}</span>
                                {point3}
                            </div>
                            <div>
                                <span className="text-red-500 mr-1">{ph4}</span>
                                {point4}
                            </div>
                        </div>
                    </div>
                    <div className="text-yellow-300 px-8 mt-8 text-3xl">
                        <LuArrowRightToLine />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
