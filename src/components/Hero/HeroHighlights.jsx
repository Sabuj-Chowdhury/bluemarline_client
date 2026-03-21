import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const highlights = [
  "Bulk Plastic Manufacturing",
  "Technical Support & CNC Solutions",
  "Precision Mold Development",
  "Aquarium, Aquaculture & Environmental Protection"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const HeroHighlights = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 mb-10"
    >
      {highlights.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ x: 10, transition: { duration: 0.2 } }}
          className="group flex items-center gap-3 py-1 cursor-default"
        >
          <motion.div
            whileHover={{ scale: 1.2, x: 5 }}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors duration-300 shadow-[0_0_10px_rgba(37,99,235,0)] group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          >
            <FiArrowRight className="text-blue-500 group-hover:text-white transition-colors text-sm" />
          </motion.div>
          
          <span className="text-zinc-400 group-hover:text-zinc-100 transition-colors duration-300 font-medium text-lg leading-tight group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            {item}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroHighlights;
