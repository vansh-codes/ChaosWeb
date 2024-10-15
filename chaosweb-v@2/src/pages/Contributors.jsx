import React, { useEffect, useState } from "react";
import "./Contributors.css"; // Ensure this file contains the necessary CSS

const Contributors = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/vansh-codes/ChaosWeb/contributors"
        );
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <div className="contributors-container">
      {contributors.map((contributor) => (
        <img
          key={contributor.id}
          src={contributor.avatar_url}
          alt={contributor.login}
          className="contributor-logo"
        />
      ))}
    </div>
  );
};

export default Contributors;
