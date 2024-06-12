


import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/screens/Home";
import Footer from "./Components/Footer";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import SocialMediaMarketing from "./Components/services/SocialMedia";
import Portfolio from "./Components/pages/Portfolio";
import Ppc from '../src/Components/services/Ppc';
import Video from '../src/Components/services/Video';
import Content from '../src/Components/services/Content';
import Graphics from '../src/Components/services/Graphics';
import Seo from '../src/Components/services/Seo';
import Web from '../src/Components/services/Web';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const App = () => {
  useScrollToTop();

  const whatsappIconStyle = {
    position: "fixed",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    fontSize: "24px",
    color: "green",
    borderRadius: "50%",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    zIndex: "9999",
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=918007030184";
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/socialmarketing" element={<SocialMediaMarketing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ppc" element={<Ppc />} />
        <Route path="/videoservices" element={<Video />} />
        <Route path="/contentservices" element={<Content />} />
        <Route path="/graphicservices" element={<Graphics />} />
        <Route path="/seoservices" element={<Seo />} />
        <Route path="/webservices" element={<Web />} />
      </Routes>
      <Footer />
      <button
        type="button"
        className="btn"
        style={whatsappIconStyle}
        onClick={handleWhatsAppClick}
      >
        <i
          className="fa-brands fa-whatsapp fa-beat fa-2xl"
          style={{ color: "#BOFC38" }}
        ></i>
      </button>
    </>
  );
};

export default App;
