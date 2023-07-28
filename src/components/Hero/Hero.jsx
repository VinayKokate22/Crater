import React from "react";
import Typewriter from "typewriter-effect";
import "./hero.css";
export const Hero = () => {
  return (
    <div>
      <div className="herocomponent">
        <div>
          <h2>
            AI-powered Business Manager <span className="gradienttext"></span>
            <Typewriter
              options={{
                strings: [
                  "for Leaders",
                  "for Freelancers",
                  "for Challengers",
                  "for Rebels",
                  "for Creators",
                  "for Go-getters",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
        <p>
          Your AI Business Manager! No more social media hassle, brand deals, or
          tax worries. Focus on what you love, while we handle the rest.
        </p>
        <button>Get Early Access</button>
      </div>
      <div className="heroimg"> </div>
    </div>
  );
};
