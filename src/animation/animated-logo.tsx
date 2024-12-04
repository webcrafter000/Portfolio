import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#1f8d93", // Adjust the color to match your theme.
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-accent stroke-accent"
      >
        <motion.path
          d="M20,80 L20,20 L50,60 L50,20 L80,20 L80,80 L50,40 L50,80 Z"
          strokeWidth="3"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [0.42, 0, 0.58, 1] }, // Smooth animation.
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
