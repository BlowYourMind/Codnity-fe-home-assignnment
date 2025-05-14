import { motion } from "framer-motion";
import TemporaryDrawer from "../material-ui/drawer";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import AnimationsToggle from "./AnimationToggle";

const Header = () => {
  const [hasAnimatedIn, setHasAnimatedIn] = useState(() => {
    return sessionStorage.getItem("headerAnimated") === "true";
  });

  useEffect(() => {
    if (!hasAnimatedIn) {
      setHasAnimatedIn(true);
      sessionStorage.setItem("headerAnimated", "true");
    }
  }, [hasAnimatedIn]);

  return (
    <motion.header
      className="bg-secondaryBackground shadow-sm top-2 fixed inset-x-0 z-40 mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px]"
      initial={!hasAnimatedIn ? { y: -100 } : false}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="flex items-center">
        <a
          href="/"
          className="flex items-center hover:scale-105 transition-transform duration-300 justify-center gap-1"
          aria-label={"home_button"}
        >
          Codnity
        </a>
      </div>
      <Navbar />
      <TemporaryDrawer />
      <AnimationsToggle className="!hidden md:!block" />
    </motion.header>
  );
};

export default Header;
