import React, { useEffect, useState } from "react";
import ContributorCard from './ContributorCard'; // Import the ContributorCard component
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

  return (
    <div className="contributors-list">
      {contributors.length > 0 ? (
        contributors.map((contributor) => (
          <ContributorCard
            key={contributor.id} // Use contributor.id as the key
            name={contributor.login} // Contributor's GitHub username
            profilePic={contributor.avatar_url} // Contributor's avatar URL
            contributions={contributor.contributions} // Number of contributions
          />
        ))
      ) : (
        <p>Loading contributors...</p>
      )}
    </div>
  );
};

export default Contributors;
