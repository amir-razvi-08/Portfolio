import React from "react";
import Tech from "./Tech";
import { motion } from "framer-motion";
import Carousel from "./Carousel";

function Experties({expertiesRef}) {
  const isSmallDevice = window.innerWidth < 768;
  return (
    <div ref={expertiesRef} id="experties" className="flex flex-wrap mt-20 justify-center z-40">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap mt-20 justify-center text-white md:text-6xl text-3xl md:w-[80%] z-40 mb-8"
      >
       Experties
      </motion.div>
      <Carousel/>
      <div className="flex flex-wrap justify-center z-40 mt-20">
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className="">
          <h2 className="flex text-white md:text-6xl text-3xl items-center mb-20">Technologies</h2>
        </motion.div>
        <Tech />
        <motion.div
          className="border-2 border-yellow-300 mt-8"
          whileInView={{ width: isSmallDevice ? "80%" : "45%" }}
          initial={{ width: "0" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
        ></motion.div>
      </div>
      
    </div>
  );
}

export default Experties;