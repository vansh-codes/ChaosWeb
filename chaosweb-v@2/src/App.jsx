import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Timeline from "./pages/timeline";
import HypnoticChaos from "./pages/HypnoticChaos";
import Review from "./pages/Review";
import Contributors from "./pages/Contributors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Contributors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/hypnotic" element={<HypnoticChaos />} />
      </Routes>
    </Router>
  );
}

export default App;
