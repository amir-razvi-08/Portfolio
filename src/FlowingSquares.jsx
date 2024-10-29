import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Helper function to generate random values
const getRandom = (min, max) => Math.random() * (max - min) + min;

const FlowingSquares = () => {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    // Generate an array of squares with random properties
    const generateSquares = () => {
      const squaresArray = [];
      for (let i = 0; i < 50; i++) {
        squaresArray.push({
          size: getRandom(40, 200),     // Random size for each square
          startX: getRandom(-100, window.innerWidth),  // Random starting X within screen width
          startY: getRandom(window.innerHeight - 100, window.innerHeight), // Random start near bottom
          moveX: getRandom(-300, 300),  // Random horizontal movement across the screen
          duration: getRandom(4, 12),
          rotate: getRandom(0, 25),     // Random animation duration for variety
          rounded:getRandom(5,50)
        });
      }
      setSquares(squaresArray);
    };
    
    generateSquares();
  }, []);

  return (
    <>
    <div className="absolute inset-0 z-20 overflow-hidden w-screen h-screen">
      {squares.map((square, index) => (
        <motion.div
          key={index}
          className="absolute bg-blue-500 opacity-0.5 rotate-45"
          style={{
            width: square.size,
            height: square.size,
            left: square.startX,  // Initial random X position
            top: square.startY,
            rotate:square.rotate, // Initial random Y position near bottom
            // radius:square.rounded
          }}

          initial={{y:100}}
          animate={{
            y: -1000,  // Move to the top of the screen
            x: square.moveX,         // Random horizontal movement
          }}
          transition={{
            duration: square.duration,  // Random duration for each square
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}

    </div>
    </>
  );
};

export default FlowingSquares;
