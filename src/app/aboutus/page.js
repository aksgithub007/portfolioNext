import React from "react";
import Breadcrumb from "../Components/Shared/Breadcrumb";
import HeroAboutUs from "../Components/About Us/HeroAboutUs";

function AboutUs() {
  return (
    <>
      <Breadcrumb title={"About Me"} homeLink={"Home"} />
      <HeroAboutUs />
    </>
  );
}

export default AboutUs;
