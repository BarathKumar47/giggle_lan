import Hero from "./componenets/landing/hero";
import VisionMission from "./componenets/landing/visionMission";
import WorkRules from "./componenets/landing/workRules";
import ContactSection from "./componenets/landing/contactSection";
import BrandLogo from "./componenets/landing/brandlogo";
import Thoughts from "./componenets/landing/thoughts";
import TheProcess from "./componenets/landing/theProcess";


export default function Home() {
  return (
    <>
      <Hero />
      <BrandLogo/>
      <WorkRules />
      <TheProcess />
      <VisionMission />
       <Thoughts/>
      <ContactSection />
    </>
  );
}

