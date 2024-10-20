
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";
import Timeline from "./pages/timeline.jsx";
import HypnoticChaos from "./pages/HypnoticChaos.jsx";
import MazeGame from './components/MazeGame.jsx';
import './index.css'
import Review from "./pages/Review.jsx";
import Contributors from "./pages/Contributors.jsx";
import ChaosMania from "./pages/ChaosMania.jsx";
import ButtonCollection from "./pages/ButtonCollection.jsx";


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
        <Route path="/maze" element={<MazeGame />} />
        <Route path="/chaosmania" element={<ChaosMania />} />
        <Route path= "/ButtonCollection" element={<ButtonCollection />} />
      </Routes>

    </Router>
  );
  
}

export default App;
