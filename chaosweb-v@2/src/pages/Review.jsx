import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./review.css";
import img1 from "../assets/boy1.jpeg";
import img2 from "../assets/boy2.jpeg";
import img3 from "../assets/boy3.jpeg";
import img4 from "../assets/girl1.jpeg";
import img5 from "../assets/girl2.jpeg";
const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review:
        "This website is amazing for gaining anti-user experience.Great work",
      image: img1, // Using local image
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Excellent experience and great idea behind this website!",
      image: img2,
    },
    {
      id: 3,
      name: "Michael Brown",
      review: "Truly outstanding quality along with great consufions.",
      image: img3,
    },
    {
      id: 4,
      name: "Olivia Root",
      review:
        "Experienced this type of website first time and it was really great.",
      image: img4,
    },
    {
      id: 5,
      name: "Amelia Green",
      review:
        "What a website to experience it.Made me confused at every step!!",
      image: img5,
    },
    // Add more reviews as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Set to true to enable arrows
    cssEase: "ease-in-out",
  };

  return (
    <div className="review-section">
      <h2 className="review-title">What Our Users Say</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img
              src={review.image}
              alt={review.name}
              className="review-image"
            />
            <p className="review-text">"{review.review}"</p>
            <h4 className="review-name">- {review.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
