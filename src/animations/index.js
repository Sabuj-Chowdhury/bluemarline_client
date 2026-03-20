// Reusable Framer Motion Variants

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const scaleHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

export const letterStagger = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)", transform: "rotateX(-30deg)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)", transform: "rotateX(0deg)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export const wordsStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export const floatParticle = {
  animate: (custom) => ({
    y: [0, -40 * custom, 0],
    x: [0, 30 * custom, 0],
    opacity: [0.2, 0.8, 0.2],
    scale: [1, 1.2 * custom, 1],
    transition: { duration: 10 + custom * 2, repeat: Infinity, ease: "easeInOut" }
  })
};
