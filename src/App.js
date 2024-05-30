import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import SocialMediaMarketing from "./Components/services/SocialMedia";
import Portfolio from "./Components/Portfolio";
import Ppc from '../src/Components/services/Ppc';
import Video from '../src/Components/services/Video';
import Content from '../src/Components/services/Content';
import Graphics from '../src/Components/services/Graphics'
import Brand from '../src/Components/services/Branding'
import Seo from '../src/Components/services/Seo'
import Web from '../src/Components/services/Web'

const App = () => {
  const whatsappIconStyle = {
    position: "fixed",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    fontSize: "24px",

    color: "#fff",
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
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* services page */}
        <Route path="/socialmarketing" element={<SocialMediaMarketing />} />
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/ppc" element={<Ppc/>}/>
        <Route path="/videoservices" element={<Video/>}/>
        <Route path="/contentservices" element={<Content/>}/>
        <Route path="/graphicservices" element={<Graphics/>}/>
        {/* <Route path="/branding" element={<Brand/>}/> */}
        <Route path="/seoservices" element={<Seo/>}/>
        <Route path="/webservices" element={<Web/>}/>
      </Routes>
      <Footer />

      <button
        type="button"
        className="btn"
        style={whatsappIconStyle}
        onClick={handleWhatsAppClick}
      >
        <i
          class="fa-brands fa-whatsapp fa-beat fa-2xl"
          style={{ color: "#00ab41" }}
        ></i>
      </button>
    </>
  );
};

export default App;
