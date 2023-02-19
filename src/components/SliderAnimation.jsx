import React from "react";
import Social from "../components/Social";
import SocialTwo from "../components/SocialTwo";
import TypingAnimation from './TypingAnimation'

const SliderAnimation = () => {
  return (
    //    HERO
    <div className="beny_tm_hero" id="home">
      <div className="background">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/kerri1.jpg"
            })`,
          }}
        ></div>
        <div className="overlay"></div>
      </div>
      {/* End bg */}

      <div className="go-to go-to-next">
        <a href="#about">
          <span></span>
        </a>
      </div>
      {/* End animated goto button */}

      <div className="container">
        <div className="content">
          <div className="content_inner"> <br />
            <h3 className="name" data-aos="fade-up" data-aos-duration="1200">
              Hi! I'm Kerri Dimant. I am a
            </h3>
            <h1
              className="job"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="50"
            >
              <TypingAnimation className="loop-text lead" />
            </h1>
            <h1 className="educational">
             <span>Educational Psychologist</span>
            </h1>
            <p
              className="text"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
            </p>
            <div
              className="mobile_social"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <Social />
            </div>
            {/* End .social */}

            <div
              className="beny_tm_button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <a className="anchor" href="#about">
                <span className="wrapper">
                  <span className="first">See Portfolio</span>
                  <span className="second">See Portfolio</span>
                </span>
              </a>
            </div>
            {/* End beny_tm_button */}
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="social" data-aos="fade-left" data-aos-duration="1200">
        <SocialTwo />
      </div>
      {/* End .social */}
    </div>
    //HERO
  );
};

export default SliderAnimation;
