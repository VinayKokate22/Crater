import React from "react";
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
      desc: "I was skeptical at first, but after using Crater for just a few weeks, I'm completely sold. The AI-powered features are incredibly accurate and make my life so much easier",
    },
  ];
  return (
    <div className="testimonial-section">
      <h3>10,000+ Users have signed up!</h3>
      <div className="testimonials">
        <div>
          <img src={testimonials[2].img} alt="" />
        </div>
        <div>
          <div>
            <p>{testimonials[2].desc}</p>
          </div>
          <div>
            <b>{testimonials[2].name}</b>
            <span>{testimonials[2].Pro}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
