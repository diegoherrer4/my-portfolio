import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "./logo.svg";

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    // Automatically hide the loader after a delay
    setTimeout(() => {
      setShowLoader(false);
    }, 2800);
  }, [setShowLoader]);

  // Animation variants for the SVG icons
  const iconVariant2 = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {/* Animated SVG */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={iconVariant2}
        style={{ width: "30vw", height: "30vw" }}
      >
        {/* Render the SVG image */}
        <img src={logo} alt="Loader" style={{ width: "100%", height: "100%" }} />
      </motion.div>
    </div>
  );
};

export default Loader;
