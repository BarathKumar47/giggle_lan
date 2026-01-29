import Hero from "./componenets/landing/hero";
import VisionMission from "./componenets/landing/visionMission";
import WorkRules from "./componenets/landing/workRules";
import ContactSection from "./componenets/landing/contactSection";
import BrandLogo from "./componenets/landing/brandlogo";
import Thoughts from "./componenets/landing/thoughts";
import TheProcess from "./componenets/landing/theProcess";
import FoundersNote from "./componenets/landing/foundersNote";


import { Box } from "@mui/material";
import GradientBlob from "./componenets/ui/GradientBlob";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
        position: "relative",
      }}
    >
      <Box sx={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: 0, pointerEvents: "none" }}>
        <GradientBlob
          gradientBackgroundStart="transparent"
          gradientBackgroundEnd="transparent"
          blobCount={10}
          animationSpeed={1}
          blur={40}
          opacity={0.8}
          scale={2.5}
        />
      </Box>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <BrandLogo />
        <WorkRules />
        <TheProcess />
        <VisionMission />
        <FoundersNote />
        <Thoughts />
        <ContactSection />
      </Box>
    </Box>
  );
}

