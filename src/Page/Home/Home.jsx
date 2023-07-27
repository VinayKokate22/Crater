import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import { Hero } from "../../components/Hero/Hero";
import InfoSection from "../../components/InfoSection/InfoSection";
import Testimonial from "../../components/testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="gradient">
      <Navbar />
      <Hero />
      <InfoSection />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
