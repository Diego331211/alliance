"use client";

import Header from "../components/header";
import AboutUsMision from "../components/AboutUsMision";
import AboutUsVision from "../components/AboutUsVision";

const AboutPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <AboutUsMision />

      {/* Vision Section */}
      <AboutUsVision />
    </>
  );
};

export default AboutPage;
