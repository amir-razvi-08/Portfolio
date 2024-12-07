import { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { motion,useInView} from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

const Circularbar = ({ progress }) => {
  const ref=useRef(null);
  const inView=useInView(ref)

  const darkMode = useSelector((state) => state.theme.darkMode);

  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(()=>{
    let timer;
  if (inView) {
    let start = 0;
    const duration = 1000;
    const interval = 20;
    const step = (progress / (duration / interval));

    timer = setInterval(() => {
      start += step;
      if (start >= progress) {
        start = progress;
        clearInterval(timer);
      }
      setCurrentProgress(Math.round(start));
    }, interval);
  } else {
    setCurrentProgress(0);
  }

  return () => {
    clearInterval(timer);
  };
}, [inView, progress]);

  return (
    <div className="flex justify-center items-center h-full" ref={ref}>
      <motion.div
        transition={{ duration: 3 }}
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