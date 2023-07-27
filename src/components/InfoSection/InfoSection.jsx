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

    ,
  ];
  return (
    <>
      <div className="infosection">
        {/* <div className="extrainfo-wrapper">
          <div>
            <h4>Get all your Platform Data. All in one place.</h4>
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/insta_color.svg"
              alt=""
            />{" "}
            <p> Youtube </p> <p>Instagram</p> <p>Twitch</p>{" "}
            <p>Linkedin +more</p>
          </div>
        </div> */}
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
              {/* <div className="singlereason">
                <h5> ⭕️ Costly Solutions</h5>
                <p>
                  Expensive management options and High expenditure on hiring
                  managers or outsourcing
                </p>
              </div> */}
            </div>

            <div className="withoutcrater green">
              <h4>With Crater</h4>

              <div className="singlereason">
                <h5> ✅ Manual Business Management</h5>
                <p>
                  Spend hours, Limited focus on Creativity and struggle to
                  optimize margins
                </p>
              </div>
              <div className="singlereason">
                <h5> ✅ Manual Business Management</h5>
                <p>
                  Spend hours, Limited focus on Creativity and struggle to
                  optimize margins
                </p>
              </div>
              <div className="singlereason">
                <h5> ✅ Manual Business Management</h5>
                <p>
                  Spend hours, Limited focus on Creativity and struggle to
                  optimize margins
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
