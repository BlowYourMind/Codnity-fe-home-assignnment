import { motion } from "motion/react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <motion.header
      className="bg-secondaryBackground shadow-sm fixed inset-x-0 top-4 z-40 mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px]"
      initial={{
        y: -100,
      }}
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
    </motion.header>
  );
};
export default Header;
