"use client";

import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import BlurOffIcon from "@mui/icons-material/BlurOff";
import { createContext, useContext } from "react";
import { cn } from "../utils/cn";

export const AnimationsContext = createContext({
  animationsEnabled: true,
  toggleAnimations: () => {},
});

export const AnimationsProvider = ({ children }: any) => {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    const savedPreference = localStorage.getItem("animationsEnabled");
    if (savedPreference !== null) {
      setAnimationsEnabled(savedPreference === "true");
    }
    if (savedPreference === "false") {
      document.documentElement.classList.add("no-animations");
    }
  }, []);

  const toggleAnimations = () => {
    const newState = !animationsEnabled;
    setAnimationsEnabled(newState);
    localStorage.setItem("animationsEnabled", String(newState));
    if (newState) {
      document.documentElement.classList.remove("no-animations");
    } else {
      document.documentElement.classList.add("no-animations");
    }
  };

  return (
    <AnimationsContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}
    </AnimationsContext.Provider>
  );
};

export const useAnimations = () => useContext(AnimationsContext);

const AnimationsToggle = ({ className = "" }: { className?: string }) => {
  const { animationsEnabled, toggleAnimations } = useAnimations();

  return (
    <Button
      className={cn(className, `size-9 p-0`)}
      onClick={toggleAnimations}
      aria-label="Toggle animations"
    >
      {animationsEnabled ? (
        <BlurOnIcon className="size-5" />
      ) : (
        <BlurOffIcon className="size-5" />
      )}
    </Button>
  );
};

export default AnimationsToggle;
