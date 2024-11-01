import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const variants = {
  true: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  false: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const SideNav = ({scrollToSkills, scrollToProjects, scrollToHome, scrollToExperties, scrollToConnect}) => {
  const darkMode = useSelector((state) => state.darkMode);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${darkMode?"dark":""}`}>
      <button
        className="fixed top-4 right-4 z-20 text-2xl text-gray-700 md:hidden dark:text-white"
        onClick={toggleNav}
      >
        {isOpen ? <MdClose /> : <IoMdMenu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 250 }}
            animate={{ x: 0 }}
            exit={{ x: 250 }} // Exit transition
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed top-0 right-0 h-[50vh] w-56 bg-white dark:bg-gray-900 p-6 z-10 md:hidden shadow-[0_0_10px_5px_rgba(0,0,0,0.2)]"
          >
            <nav className="flex justify-center space-y-4 mt-8 text-2xl dark:text-white">
              <div>
                <motion.div
                onClick={scrollToHome}
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center mb-5 cursor-pointer"
                >
                  Home
                </motion.div>
                <motion.div
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center mb-5 cursor-pointer"
                  onClick={scrollToExperties}
                >
                  Experties
                </motion.div>
                <motion.div
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center mb-5 cursor-pointer"
                  onClick={scrollToSkills}
                >
                  Skill
                </motion.div>
                <motion.div
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center mb-5 cursor-pointer"
                  onClick={scrollToProjects}
                >
                  Projects
                </motion.div>
                <motion.div
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center mb-5 cursor-pointer"
                  onClick={scrollToConnect}
                >
                  Contact
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideNav;

