"use client";

import Header from "../components/header";
import AboutUsMision from "../components/AboutUsMision";
import AboutUsVision from "../components/AboutUsVision";
import Footer from "../components/footer";

const AboutPage = () => {
  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <AboutUsMision />

      {/* Vision Section */}
      <AboutUsVision />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutPage;
