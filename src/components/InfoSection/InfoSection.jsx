import React from "react";
import "./infosection.css";
const InfoSection = () => {
  const title = [
    {
      title: "Sentimental Analysis",
      desc: "Automatically hides damaging, hateful, racist comments and spam from your Social Media posts.",
    },
    {
      title: "Maximize Your YouTube Views",
      desc: "Compare thumbnails and titles and see which will get more Views on YouTube. Predict YouTube Views before you upload.",
    },
    {
      title: "Engage with Your Audience",
      desc: "Al will Reply to 1000s of comments/messages just like how the Creator would in less than a second",
    },
    {
      title: "Social Media Manager",
      desc: "Manage all your Social Media accounts from a single Dashboard",
    },
    {
      title: "Digital Account Recovery",
      desc: "Don't lose your entire digital business to a hack, protect it with Crater.",
    },

    {
      title: "Automation of taxes",
      desc: "Once you sync your accounts, our AI will handle the rest. It will help you file taxes in less than 20 minutes.",
    },
  ];
  return (
    <>
      <div className="infosection">
        <div className="infosecton-wrapper">
          <div>
            <h3>
              All the creator business tools. All with your Crater account.
            </h3>
          </div>
          <div className="features">
            {title.map((single) => {
              return (
                <div key={single.title} className="signlefunction">
                  <h4>{single.title}</h4>
                  <p>{single.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="whycratersecton ">
          <h3>Why Crater ?</h3>
          <div className="comparisionwrapper">
            <div className="withoutcrater red">
              <h4>Without Crater</h4>
              <div className="singlereason">
                <h5> ⭕️ Manual Business Management</h5>

                <p>
                  Spend hours, Limited focus on Creativity and struggle to
                  optimize margins
                </p>
              </div>
              <div className="singlereason">
                <h5> ⭕️ Manual Social Media Management</h5>
                <p>
                  Manage multiple accounts manually, limited engagement with
                  your followers and lot of guess work in selecting captions and
                  thumbnails.
                </p>
              </div>
              <div className="singlereason">
                <h5>⭕️ Manual Financial Management</h5>
                <p>
                  Increase in Financial risk via manual methods and missed
                  revenue opportunities
                </p>
              </div>
            </div>

            <div className="withoutcrater green">
              <h4>With Crater</h4>

              <div className="singlereason">
                <h5> ✅ Automated Business Management</h5>
                <p>
                  Save time, Focus on creativity and increse margins by more
                  than 30%
                </p>
              </div>
              <div className="singlereason">
                <h5> ✅ AI-powered Social Media Management</h5>
                <p>
                  Manage multiple Social Media accounts, AI-powered replies and
                  ML-powered views and revenue predictor
                </p>
              </div>
              <div className="singlereason">
                <h5> ✅ AI-powered Financial Management</h5>
                <p>
                  Monitor and control finances and let AI file taxes in less
                  than 10 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
