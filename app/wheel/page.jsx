import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
const Wheel = ({ names }) => {
    const [isSpinning, setIsSpinning] = useState(false);
    const wheelRef = useRef(null);
  
    const handleSpin = () => {
      setIsSpinning(true);
  
      // Simulate spinning for a random duration
      const randomDuration = Math.floor(Math.random() * 3000) + 2000;
      setTimeout(() => {
        setIsSpinning(false);
        // Calculate the random index of the chosen name
        const randomIndex = Math.floor(Math.random() * names.length);
        // Rotate the wheel to the chosen name
        wheelRef.current.style.transform = `rotate(${360 / names.length * randomIndex}deg)`;
      }, randomDuration);
    };
  
    return (
      <div className="relative w-full h-full">
        <motion.div
          ref={wheelRef}
          animate={{ rotate: isSpinning ? 360 : 0 }}
          transition={{ duration: 0.5, ease: 'linear' }}
          className="w-full h-full overflow-hidden"
        >
          <div className="absolute w-full h-full bg-gray-200 rounded-full">
            {names.map((name, index) => (
              <div
                key={index}
                className="absolute w-full h-full text-center flex justify-center items-center"
                style={{ transform: `rotate(${360 / names.length * index}deg)` }}
              >
                <div className="bg-gradient-to-b from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <button
          onClick={handleSpin}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Spin
        </button>
      </div>
    );
  };
  
  export default Wheel;