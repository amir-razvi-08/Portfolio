import React from "react";
import { motion } from "framer-motion";

function LinearBar({ progress, name, icon }) {
    return (
        <div>
            <div className="my-4">
                <div className="flex justify-between mb-1 px-1">
                    <div className="font-medium">
                        <div className="flex items-center gap-3">
                            <div>{icon}</div>
                            {name}
                        </div>
                    </div>
                    <span className="text-xl font-semibold">{progress}%</span>
                </div>
                <div className="relative w-full h-8 rounded-2xl bg-white shadow-[0_0_10px_5px_rgba(0,0,0,0.2)]">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute h-full rounded-2xl bg-gradient-to-r from-red-500 to-blue-600"
                    />
                </div>
            </div>
        </div>
    );
}

export default LinearBar;
