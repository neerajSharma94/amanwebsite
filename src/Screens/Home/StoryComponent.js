import React from "react";
import video1 from "../../data/images/video.mp4";
import video2 from "../../data/images/video.webm";
import nat8 from "../../data/images/nat-8.jpg";
import nat9 from "../../data/images/nat-9.jpg";
import "./style.scss";

const StoryComponent = () => {
  return (
    <div>
      <section className="story-section">
        <div className="bg-video">
          <video className="bg-video-content" autoPlay muted loop>
            <source src={video1} type="video/mp4" />
            <source src={video2} type="video/webm" />
          </video>
        </div>
        <div className="heading section-center">
          <h3>We make people genuinely happy</h3>
        </div>
        <div className="story-section-container">
          <img src={nat8} alt="person-img" />

          <div>
            <h4>I had the best week ever with my family</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis nostrum laboriosam deleniti nam aliquam deserunt,
              tempora error sint cupiditate corrupti.
            </p>
          </div>
        </div>

        <div className="story-section-container">
          <img src={nat9} alt="person-img" />
          <div>
            <h4>WOW! My life is completely different now</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis nostrum laboriosam deleniti nam aliquam deserunt,
              tempora error sint cupiditate corrupti.
            </p>
          </div>
        </div>
        <div className="section-center">
          <a href="#" className=" btn-text">
            more reviews &rarr;
          </a>
        </div>
      </section>
    </div>
  );
};

export default StoryComponent;
