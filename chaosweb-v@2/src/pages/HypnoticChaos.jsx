import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import app from "../App.jsx";
import '../index.css';
import { useState } from "react";
import appPages from "../utils/pages.js";
import { Link } from 'react-router-dom';


const HypnoticChaos = () => {

  const navigate = useNavigate(); // Initialize navigate hook
  useEffect(() => {
    // --------------Random page navigation start-------------------------------
    // Generate random time between 10 and 30 seconds
    const randomTime = Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000;
    const randomPage = appPages[Math.floor(Math.random() * appPages.length)];
    const timer = setTimeout(() => {
      navigate(randomPage); // Navigate to the randomly selected page
    }, randomTime); 
    // --------------Random page navigation end-------------------------------

    var STEPS = 1;
    var bgColor = getRandomColor();
    var strokeColor = getRandomColor();
    var SPIRAL_SCALE = 2;

    function getRandomColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return { r, g, b };
    }
    function Home() {
      return (
        <div>
          <h1>Home Page</h1>
          <Link to="/app">
            <button>Go to App Page</button>
          </Link>
        </div>
      );
    }
    function luminance(r, g, b) {
      var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    function contrast(color1, color2) {
      var lum1 = luminance(color1.r, color1.g, color1.b) + 0.05;
      var lum2 = luminance(color2.r, color2.g, color2.b) + 0.05;
      return lum1 > lum2 ? lum1 / lum2 : lum2 / lum1;
    }

    function getContrastingStrokeColor(bgColor) {
      var strokeColor;
      do {
        strokeColor = getRandomColor();
      } while (contrast(bgColor, strokeColor) < 2.5);
      return strokeColor;
    }

    function resizeCanvas() {
      var canvas = document.getElementById("myCanvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function CreateSpiral(mod) {
      var canvas = document.getElementById("myCanvas");
      var cxt = canvas.getContext("2d");
      var X = canvas.width / 2;
      var Y = canvas.height / 2;

      cxt.save();
      STEPS += 0.001;

      cxt.fillStyle = `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`;
      cxt.fillRect(0, 0, canvas.width, canvas.height);

      cxt.strokeStyle = `rgb(${strokeColor.r}, ${strokeColor.g}, ${strokeColor.b})`;

      cxt.beginPath();
      cxt.moveTo(X, Y);
      var increment = (2 * Math.PI) / STEPS;
      var theta = increment;

      while (theta < 40 * Math.PI) {
        var newX = X + theta * SPIRAL_SCALE * Math.cos(theta - mod);
        var newY = Y + theta * SPIRAL_SCALE * Math.sin(theta - mod);
        cxt.lineTo(newX, newY);
        theta += increment;
      }

      cxt.stroke();
      cxt.restore();
    }

    var counter = 0;

    const spiralInterval = setInterval(function () {
      CreateSpiral(counter);
      counter += 0.001;
    }, 10);

    const colorInterval = setInterval(function () {
      bgColor = getRandomColor();
      strokeColor = getContrastingStrokeColor(bgColor);
    }, 150);

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      clearInterval(spiralInterval);
      clearInterval(colorInterval);
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(timer); // clear random page navigation timeout
    };
  }, [navigate]);
  function Home() {
    const navigate = useNavigate();
  }  
  return (
    <div className="parent">
      <div className="content">
        <div className="chaotic-text top-text">
          Welcome to Chaos! Where sanity is overrated.
        </div>
        <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/')}>Go to App Page</button>
    </div>
        <canvas id="myCanvas" width="300" height="300"></canvas>
        <div className="chaotic-text bottom-text">
          Relax? Sure, if you like chaos!
        </div>
      </div>

      <style jsx="true">{`
        .parent {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          background-color: black;
        }
        .content {
          text-align: center;
          position: relative;
        }
        .chaotic-text {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2rem;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          white-space: nowrap;
        }
        .top-text {
          top: 10%;
        }
        .bottom-text {
          bottom: 10%;
        }
        @keyframes shake {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          25% {
            transform: translate(-50%, -50%) rotate(-5deg);
          }
          50% {
            transform: translate(-50%, -50%) rotate(5deg);
          }
          75% {
            transform: translate(-50%, -50%) rotate(-5deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }
        .chaotic-text {
          animation: shake 0.5s infinite;
        }
        #myCanvas {
          margin: auto;
        }
      `}</style>
    </div>

  );
};

export default HypnoticChaos;
