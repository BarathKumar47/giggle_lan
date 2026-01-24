import Hero from "./componenets/landing/hero";
import VisionMission from "./componenets/landing/visionMission";
import WorkRules from "./componenets/landing/workRules";
import ContactSection from "./componenets/landing/contactSection";


export default function Home() {
  return (
    <>
      <Hero />
      <WorkRules />
      <VisionMission />
      <ContactSection />
    </>
  );
}

