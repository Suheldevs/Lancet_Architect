import React from "react";
import AboutSection from "../components/AboutSection";
import DirectorMessage from "../components/DirectorMessage";
import WhyChooseUs from "../components/WhyChooseUs";
import Breadcrum from "../components/Breadcrum";

function AboutUs() {
  return (
    <div>
      <Breadcrum
        title="About Us"
        items={[
          { label: "Home", link: "/" },
          { label: "About Us", link: "/about" },
        ]}
      />

      <AboutSection />
      <WhyChooseUs />
      <DirectorMessage />
    </div>
  );
}

export default AboutUs;
