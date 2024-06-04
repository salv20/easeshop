export const fadeIn = (direction, delay = 0.2, duration = 1) => {
  return {
    initial: {
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        type: "tween",
        staggerChildren: 0.3,
        delay: delay,
      },
    },
  };
};
