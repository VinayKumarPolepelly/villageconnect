import React from "react";
import { motion } from "framer-motion";

const Body = () => {
  return (
    <div className="h-screen w-screen relative bg-cover bg-center bg-[url('https://res.cloudinary.com/drygl5o4k/image/upload/v1733333722/sodoskjiwdjq0xxpv1pj.png')]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Layer */}
      <div className=" ">
        <div className="relative h-screen flex flex-col justify-start items-center ">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }} // Starting position (above and hidden)
            animate={{ opacity: 1, y: 0 }} // Ending position (centered and visible)
            transition={{ duration: 1 }} // Animation duration
            className="text-6xl font-bold text-white text-stroke-green mb-5 mt-[80px]"
          >
            Village Connect
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }} // Starting position (below and hidden)
            animate={{ opacity: 1, y: 0 }} // Ending position (centered and visible)
            transition={{ duration: 1, delay: 0.5 }} // Animation duration with delay
            className="text-2xl text-white"
          >
            A Comprehensive Village Development System
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Body;
