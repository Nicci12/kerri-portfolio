import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Slider from "../components/SliderAnimation";
import About from "../components/AboutAnimation";
import Service from "../components/ServiceAnimation";
// import Portfolio from "../../components/portfolio/PortfolioAnimation";
// import Testimonial from "../../components/testimonial/Testimonial";
// import Blog from "../../components/blog/BlogAnimation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Address from "../components/Address";

const Home = () => {
  document.body.classList.add("light");
  return (
    <div className="home-light">
      <div
        className="demo-fixed-wrapper"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
      </div>
      {/* demo show wrapper  */}

      <Header />
      {/* End Header */}

      <Slider />
      {/* End Slider */}

      <div className="beny_tm_about" id="about">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>About Me</span>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p>
          </div>
          {/* End .beny_tm_title */}
          <About />
          {/* End Slider */}
        </div>
      </div>
      {/* /ABOUT */}

      {/* SERVICES */}
      <div className="beny_tm_services" id="service">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Services</span>
            <h2>I provide wide range of services that include but not limited to:</h2>

          </div>
          {/* End beny_tm_title */}
          <Service />
        </div>
      </div>
      {/* /SERVICES */}
      {/*  CONTACT */}
      <div className="beny_tm_contact" id="contact">
        <div className="container">
          <div className="contact_inner">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="beny_tm_title_holder">
                <span>Contact</span>
                <h2>You Can Reach Me On:</h2>
              </div>
              <div className="short_list">
                <Address />
              </div>
            </div>
            {/* End .left */}

            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <div className="title">
                <p>
                  I'm always open to new clients
                  <br />
                  <span></span>
                </p>
              </div>
              <div className="fields">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /CONTACT */}

      {/* COPYRIGHT */}
      <div className="beny_tm_copyright">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* /COPYRIGHT */}
    </div>
  );
};

export default Home;
