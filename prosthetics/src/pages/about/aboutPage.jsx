import React from "react";
import AboutSection from "./components/about";
import HowItWorksSection from "./components/howItWorks";
import FaqSection from "./components/faq";
import "./aboutStyles.css";

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <HowItWorksSection />
      <FaqSection />
    </>
  );
}
