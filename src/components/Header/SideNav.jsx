import { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from '../../features/scrollComponent/scrollSlice';
import { useDispatch, useSelector } from "react-redux";

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

const SideNav = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (id) => {
    setIsOpen(false)
    dispatch(scrollToSection(id));
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <div className={`relative ${darkMode ? "dark" : ""} flex justify-center items-center`}>
      <button
        className="fixed z-20 text-[2.2rem] text-gray-700 md:hidden dark:text-white"
        onClick={toggleNav}
      >
        {isOpen ? <MdClose /> : <IoMdMenu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={navRef}
            initial={{ x: 250 }}
            animate={{ x: 0 }}
            exit={{ x: 250 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed top-0 right-0 h-[50vh] w-56 bg-white dark:bg-gray-900 p-6 z-10 md:hidden shadow-[0_0_10px_5px_rgba(0,0,0,0.2)]"
          >
            <nav className="flex justify-center space-y-4 mt-8 text-2xl dark:text-white">
              <div>
                <motion.div
                  onClick={() => handleClick('home')}
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center mb-5 cursor-pointer  `}
                >
                  <div>Home</div>
                  
                </motion.div>
                <motion.div
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center mb-5 cursor-pointer"
                  onClick={() => handleClick('experties')}
                >
                  <div>Experties</div>
                </motion.div>
                <motion.div
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center mb-5 cursor-pointer"
                  onClick={() => handleClick('skills')}
                >
                  <div>Skills</div>
                </motion.div>
                <motion.div
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center mb-5 cursor-pointer"
                  onClick={() => handleClick('projects')}
                >
                   <div>Projects</div>
                </motion.div>
                <motion.div
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center mb-5 cursor-pointer"
                  onClick={() => handleClick('contact')}
                >
                   <div>Contact</div>
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
