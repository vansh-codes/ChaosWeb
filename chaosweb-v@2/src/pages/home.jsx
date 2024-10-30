// Home.jsx
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import BouncingDiv from './BouncingDiv';
import BarrelRoll from './BarrelRoll';
import "./BarrelRoll.css"

const Home = () => {
  const [roll, setRoll] = useState(false);

  const handleBarrelRoll = () => {
    setRoll(true);
    setTimeout(() => setRoll(false), 2000);
  };

  return (
    <div className={`home-container ${roll ? 'barrel-roll' : ''}`}>
      <Navbar />
      <BouncingDiv />
    </div>
  );
};

export default Home;
