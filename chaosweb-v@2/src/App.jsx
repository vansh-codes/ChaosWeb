    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Timeline from "./pages/timeline";
import HypnoticChaos from "./pages/HypnoticChaos";
import MazeGame from './components/MazeGame';
import './index.css';
import Review from "./pages/Review";
import Contributors from "./pages/Contributors";
import ChaosMania from "./pages/ChaosMania";
import ButtonCollection from "./pages/ButtonCollection";
import { useState } from "react";
import JumpScareEffect from "./components/JumpScareEffect";
import BarrelRoll from "./pages/BarrelRoll";
import RateUs from "./pages/RateUs";
import TestEffects from "./pages/TestEffects";
import Metadata from "./metadata"; 
import ChaoticTypingTest from "./pages/ChaoticTypingTest";
    
function App() {
    const [trigger, setTrigger] = useState(false);

    const handleJumpScare = () => {
        console.log('Jump scare triggered!');
        setTrigger(true);
        setTimeout(() => setTrigger(false), 3000); 
    };

    return (
        <Router>
             <Metadata />
            <div
                onMouseEnter={handleJumpScare} // Triggers on hover
                onClick={handleJumpScare} // Triggers on click
                style={{ height: '100vh', overflowY: 'scroll' }} 
            >
                <JumpScareEffect trigger={trigger} />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Contributors />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/hypnotic" element={<HypnoticChaos />} />
                    <Route path="/maze" element={<MazeGame />} />
                    <Route path="/chaosmania" element={<ChaosMania />} />
                    <Route path="/ButtonCollection" element={<ButtonCollection />} />
                    <Route path="/BarrelRoll" element={<BarrelRoll />} />
                    <Route path="/RateUs" element={<RateUs />} />
                    <Route path="/coloreffects" element={<TestEffects />} />
                    <Route path="/chaotictypingTest" element={<ChaoticTypingTest />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
