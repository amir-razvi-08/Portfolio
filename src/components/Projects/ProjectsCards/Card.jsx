import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import image from "../../../assets/currConv.png";

function Card() {
    return (
        <div
            className="flex flex-wrap justify-center bjg-neutral-90 bsg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))] bg-[#1c2129] bormder-4 border-neutral-700 card-container relative w-full  md:w-[30%] rounded-2xl m-2 overflow-hidden group transition-all duration-500 shadow-[0_3px_2px_rgba(51,51,51,1)]"
            onClick={() => handleClick(id)}
        >
            <div className="h-[13rem] w-[23rem] overflow-hidden m-5 rounded-lg cursor-pointer">
                <img src={image} alt="" className="w-[23rem] group-hover:scale-110 duration-300" />
            </div>
            <div className="">
                <div className="flex justify-between items-center m-6">
                    <div className="text-white text-2xl md:text-4xl">
                        Project
                        <div className="text-yellow-300 text-sm">small heading</div>
                    </div>
                </div>
                <div>
                    <p className="flex text-white text-sm md:text-base p-6">
                        jhgjhfyfckghv bhkjhjflosiu hlewfdsncn hjjjoiasjthgwlsntnlhjbityhsj aljf ihgot ao.jf aoht, a8hgmf'jf kjaohagtlk if'j
                        tnkfhaLorentiumperferenkjfj lfjoeaijf0 fc riat jhgkgcorpori
                    </p>
                </div>
            </div>

            <div
                className={` bg-gradient-to-t from-red-700 to-red-700/0 absolute inset-0 text-white transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0
                }`}
                style={{
                    background: "",
                }}
            >
                <div className="h-[40%]"></div>
                <div className="text-xl w-full flex justify-center">
                    <h1>html css java script</h1>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-12 h-12 bg-white text-xl text-red-500 flex justify-center items-center rounded-full cursor-pointer">
                        <FaExternalLinkAlt />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
