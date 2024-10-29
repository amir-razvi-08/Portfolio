import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RippleButton = ({ children }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, id: Date.now() };
    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter(r => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden w-full mx-8 h-10 cursor-pointer duration-300 rounded-lg flex justify-center items-center text-whibte font-bold bg-orange-600 text-white py-2 px-4 hover:bg-orange-500"
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: 0, scale: 3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute rounded-full bg-red-800"
            style={{
              width: ripple.size,
              height: ripple.size,
              left: ripple.x,
              top: ripple.y,
              pointerEvents: 'none',
            }}
          />
        ))}
      </AnimatePresence>
    </button>
  );
};

export default RippleButton;
