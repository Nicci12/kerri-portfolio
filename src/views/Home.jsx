import React from "react";
import Header from "../components/Header";
import Slider from "../components/SliderAnimation";
import About from "../components/AboutAnimation";
import Service from "../components/ServiceAnimation";
import Footer from "../components/Footer";
import Address from "../components/Address";
import ConsentForm from "../components/ConsentForm";
import Map from "../components/Map";

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
          </div>
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
      <div className="beny_tm_news" id="consent">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Forms</span>
            <h2>Forms </h2>
            <p>
              Please read carefully and full out the following forms.
            </p>
          </div>
          {/* End beny_tm_title */}
          <ConsentForm/>
        </div>
      </div>
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
                 Google Maps
                  <br />
                  <span></span>
                </p>
              </div>
              <div className="fields">
                <Map/>
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
