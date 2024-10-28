import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Timeline from "./pages/timeline";
import HypnoticChaos from "./pages/HypnoticChaos";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/hypnotic" element={<HypnoticChaos />} />
        <Route path="/chaos" element={<ChaosInteractions />} /> 
      </Routes>
    </Router>
  );
}

export default App;
