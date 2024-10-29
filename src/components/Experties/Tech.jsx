import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Tech() {
  return (
    <div className="w-screen z-50">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center gap-4 justify-center"
      >
        <motion.div
          onClick={() => window.open("https://react.dev/learn")}
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4 cursor-pointer bg-neutral-900 bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"
        >
          <RiReactjsLine className="text-cyan-400 text-7xl" />
        </motion.div>

        <motion.div
          onClick={() => window.open("https://nodejs.org/en/learn/getting-started/introduction-to-nodejs")}
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4 cursor-pointer bg-neutral-900 bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"
        >
          <FaNodeJs className="text-green-500 text-7xl" />
        </motion.div>

        <motion.div
          onClick={() => window.open("https://expressjs.com")}
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4 cursor-pointer bg-neutral-900 bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"
        >
          <SiExpress className="text-white text-7xl" />
        </motion.div>

        <motion.div
          onClick={() => window.open("https://www.mongodb.com/")}
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4 cursor-pointer bg-neutral-900 bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"
        >
          <SiMongodb className="text-green-500 text-7xl" />
        </motion.div>

        <motion.div
          onClick={() => window.open("https://tailwindcss.com")}
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4 cursor-pointer bg-neutral-900 bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"
        >
          <SiTailwindcss className="text-cyan-400 text-7xl" />
        </motion.div>

        <motion.div
          onClick={() => window.open("https://spring.io/why-spring")}
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700 p-4 cursor-pointer bg-neutral-900 bg-[radial-gradient(ellipse_50%_250%_at_50%_-50%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"
        >
          <SiSpringboot className="text-green-500 text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tech;