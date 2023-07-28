import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./testimonial.css";
const Testimonial = () => {
  const testimonials = [
    {
      name: "Mitansh",
      img: "https://s3.ap-south-1.amazonaws.com/www.cratermedia/mitansh.jpeg",
      Pro: "Youtuber",
      desc: "I have been able to increase my Youtube views by more than 30% by using their Views Predictor",
    },
    {
      name: "Chintan",
      img: "https://s3.ap-south-1.amazonaws.com/www.cratermedia/chintan.jpeg",
      Pro: " solo Entrepreneur",
      desc: "Crater is the ultimate all-in-one solution. I can't imagine going back to managing everything manually.",
    },
    {
      name: "Mitansh",
      img: "https://s3.ap-south-1.amazonaws.com/www.cratermedia/Manisha.jpeg",
      Pro: "Youtuber",
      desc: "After using Crater for just a few weeks, I'm completely sold. The AI-powered features are incredibly accurate and make my life so much easier",
    },
  ];
  const [Review, SetReview] = useState(2);
  return (
    <div className="testimonial-section">
      <h3>10,000+ Users have signed up!</h3>
      <div className="testimonials">
        <button
          onClick={() => {
            if (Review <= 0) {
              SetReview(testimonials.length - 1);
            } else {
              SetReview(Review - 1);
            }
          }}
        >
          <ArrowBackIosIcon />
        </button>
        <div>
          <img src={testimonials[Review].img} alt="" />
        </div>
        <div className="reviewinformation">
          <div>
            <p>{testimonials[Review].desc}</p>
          </div>
          <div>
            <b>{testimonials[Review].name}</b>
            <span>{testimonials[Review].Pro}</span>
          </div>
        </div>
        <button
          onClick={() => {
            if (Review + 1 >= testimonials.length) {
              SetReview(0);
            } else {
              SetReview(Review + 1);
            }
          }}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
