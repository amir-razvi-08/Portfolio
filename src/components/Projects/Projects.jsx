import React from "react";
import Card from "./ProjectsCards/Card";
import { motion } from "framer-motion";

function Projects({projectsRef}) {

  return (
    <div ref={projectsRef} id="projects" className="mt-28">
      <div className="text-white text-3xl w-full flex justify-center mb-8">
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className="">
          <h2 className="flex text-white md:text-6xl text-3xl items-center mb-8 ">Projects</h2>
        </motion.div></div>
    <div className="flex w-[90%] justify-center ml-[5%] mb-20">
      <div className="flex flex-wrap justify-center text-white w-full gap-2">
        <Card  />
        <Card  />
        <Card  />
      </div>
    </div>
    </div>
  );
}

export default Projects;
