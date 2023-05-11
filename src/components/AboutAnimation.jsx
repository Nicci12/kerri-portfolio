import React from "react";
import Skills from "../components/SkillsAnimation";

const AboutAnimation = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src="img/thumbs/1-1.jpg" alt="thumb" />
          <div
            className="image"
            data-aos="fade-right"
            data-aos-duration="1200"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/kerri.webp"
              })`,
            }}
          ></div>
        </div>
        <div
          className="right"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <div className="short">
            <h3>I am Kerri Dimant</h3>
            <h5>
              An <span className="theme-color"> Educational Psychologist</span>{" "}
             Based In {" " }<span className="theme-color">Johannesburg, South Africa</span>
            </h5>
            <p>
            My name is Kerri Dimant and I am an Educational Psychologist. I chose to enter this industry as I have a long-lasting passion for working with children and adolescence. I have always wanted to work alongside children, their families, schools, and other supporting members, to come together as a team in order to best support your child. In saying that, do believe that it takes a village to raise the best possible version of your child and give them the opportunity to reach their fullest potential. Every child has the ability within them to become the person they want to be, and I hope to be able to support your child on this journey.
            </p>
          </div>
          <div className="extra">
            <h3 className="title">Personal Information</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Name :</span> Kerri Dimant
                  </p>
                </li>
                <li>
                  <p>
                    <span>Title: </span> Educational Psychologist
                  </p>
                </li>
                <li>
                  <p>
                    <span>Place of work:</span> Blu Bird Medical Suites
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span> 0829277216
                  </p>
                </li>

                <li>
                  <p>
                    <span>Email:</span> kerrijdimant@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>LinkedIn:</span> linkedin.com/in/kerri-dimant-aa35aa179
                  </p>
                </li>
                <li>
                  <p>
                    <span>HPCSA Number:</span> PSIN 0157147
                  </p>
                </li>
              </ul>
            </div>
            {/* End list */}
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default AboutAnimation;
