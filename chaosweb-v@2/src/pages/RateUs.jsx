import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './RateUs.css'; // Import CSS file for styling

const RateUs = () => {
    const [comment, setComment] = useState('');
    const rateUsRef = useRef(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const rateUsDiv = rateUsRef.current;

        // Function to make the div bounce around
        const bounce = () => {
            const maxX = window.innerWidth - rateUsDiv.clientWidth;
            const maxY = window.innerHeight - rateUsDiv.clientHeight;

            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;

            rateUsDiv.style.transform = `translate(${newX}px, ${newY}px)`;
        };

        const intervalId = setInterval(bounce, 1000); // Bounce every second

        return () => clearInterval(intervalId); // Clear interval on unmount
    }, []);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = () => {
        alert(`Comment submitted: ${comment}`);
        setComment('');

        // Redirect to home after submission
        navigate('/'); // Change '/' to your home route if different
    };

    return (
        <div className="rate-us-container">
            
            <div className="rate-us" ref={rateUsRef}>
            <h1> Rate Us</h1>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <textarea
                    placeholder="Leave your comment..."
                    rows="4"
                    value={comment}
                    onChange={handleCommentChange}
                ></textarea>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default RateUs;
