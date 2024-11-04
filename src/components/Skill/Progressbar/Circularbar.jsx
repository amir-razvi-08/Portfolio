import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

const Circularbar = ({ progress }) => {

  const darkMode = useSelector((state) => state.theme.darkMode);

  const [currentProgress, setCurrentProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setCurrentProgress((prev) => {
                if (prev < progress) {
                  return Math.min(prev + 1, progress);
                } else {
                  clearInterval(interval);
                  return prev;
                }
              });
            }, 20);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current); 
    };
  }, [progress]);

  return (
    <div className="flex justify-center items-center h-full" ref={ref}>
      <motion.div
        transition={{ duration: 0.5 }}
        className="relative md:w-24 md:h-24 w-32 h-32"
      >
        <CircularProgressbar
          value={currentProgress}
          text={`${currentProgress}%`}
          styles={buildStyles({
            strokeLinecap: "round",
            textSize: "1.5rem",
            pathColor:darkMode?"#ef4444":"#05bee3",
            textColor: darkMode? "#fcf408":"#ef4444",
            trailColor: "#d6d6d6",
          })}
        />
      </motion.div>
    </div>
  );
};

export default Circularbar;