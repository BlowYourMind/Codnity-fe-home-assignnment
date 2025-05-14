import { useEffect } from "react";
import HeroSection from "../heroSection";
import TaskDescription from "../taskDescription";

function MainPageContent() {
  useEffect(() => {}, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <TaskDescription />
    </div>
  );
}

export default MainPageContent;
