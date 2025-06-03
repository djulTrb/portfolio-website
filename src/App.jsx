import React, { useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import Tooltip from "./components/Tooltip";

import { useScroll } from "motion/react";
import HeroSection from "./components/HeroSection";
import ProjectNoted from "./components/ProjectNoted";
import ProjectRestaurant from "./components/ProjectRestaurant";
import ContactSection from "./components/ContactSection";
import FootNote from "./components/FootNote";

function App() {
  const [tooltipOn, setTooltipOn] = useState(false);
  const projectsContainer = useRef(null);
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectsContainer,
    offset: ["start start", "end end"],
  });

  return (
    <main className={`min-h-screen ${tooltipOn && "overflow-hidden"}`}>
      <AnimatePresence>{tooltipOn && <Tooltip />}</AnimatePresence>

      <HeroSection
        projectsRef={projectsContainer}
        contactRef={contactRef}
        setTooltipOn={setTooltipOn}
      />

      <div className="relative h-[200vh]" ref={projectsContainer}>
        <ProjectRestaurant scrollYProgress={scrollYProgress} />
        <ProjectNoted scrollYProgress={scrollYProgress} />
      </div>
      <ContactSection reference={contactRef} />
      <FootNote />
    </main>
  );
}

export default App;
