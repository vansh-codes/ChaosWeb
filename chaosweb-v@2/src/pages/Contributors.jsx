import React, { useEffect, useState } from "react";
import "./Contributors.css";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);

  // Fetch contributors from GitHub API
  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/vansh-codes/ChaosWeb/contributors"
        );
        const data = await response.json();
        setContributors(data); // Store the contributors' data in state
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchContributors();
  }, []);

  // Generate random animation properties for each logo
  const generateRandomStyle = () => {
    const duration = `${5 + Math.random() * 5}s`; // Random duration between 5 and 10 seconds
    const delay = `${Math.random() * 2}s`; // Random delay up to 2 seconds
    const direction = Math.random() > 0.5 ? "normal" : "reverse"; // Random animation direction

    return {
      animationDuration: duration,
      animationDelay: delay,
      animationDirection: direction,
      left: `${Math.random() * 80}vw`, // Random start position within viewport width
      top: `${Math.random() * 80}vh`, // Random start position within viewport height
    };
  };

  return (
    <div className="contributors-container">
      {contributors.length > 0 ? (
        contributors.map((contributor, index) => (
          <img
            key={index}
            src={contributor.avatar_url}
            alt={`Contributor ${contributor.login}`}
            className="contributor-logo"
            style={generateRandomStyle()} // Apply random styles
          />
        ))
      ) : (
        <p>Loading contributors...</p>
      )}
    </div>
  );
};

export default Contributors;
