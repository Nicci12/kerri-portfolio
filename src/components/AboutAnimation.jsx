import React from "react";
import Skills from "../components/SkillsAnimation";
import {
  FiLinkedin,
} from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { SiFoodpanda } from "react-icons/si";

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
            <h5>
            I am an <span className="theme-color"> Educational Psychologist</span>{" "}
             Based In {" " }<span className="theme-color">Johannesburg, South Africa</span>
            </h5>
            <p>
            I specialize in providing services to children, adolescents, and adults. With a profound dedication to supporting individuals across various life stages, I have chosen to immerse myself in this industry. My passion for working with children and adolescents has always been a driving force, and I equally find fulfillment in providing consultation services to adults. By collaboratively engaging children, their families, schools, and other support networks, my goal is to facilitate a comprehensive team approach that optimally supports your child's development.</p>
           &nbsp; 
           <p> I firmly believe that raising the best possible version of your child requires the collective effort of a nurturing community, providing them with opportunities to reach their full potential. Recognizing that each child possesses innate abilities to shape their own path, I am committed to guiding and assisting your child throughout their journey, while also extending my expertise to support adults in their unique challenges and goals.</p>
          </div>
          <div className="extra">
            <h3 className="title">Personal Information</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Name:</span> Kerri Dimant
                  </p>
                </li>
                <li>
                  <p>
                    <span>Title: </span> Educational Psychologist
                  </p>
                </li>
                <li>
                  <p>
                    <span>Place of work:</span> Blubird Medical Suites
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
                    <span>Socials: </span> <a  style={{color: "#8EA7E9", marginRight:"10px"}} href="https://instagram.com/kjd.psychology?igshid=NTc4MTIwNjQ2YQ=="><BsInstagram /></a><a style={{color: "#8EA7E9",  marginRight:"5px"}} href="https://www.linkedin.com/in/kerri-dimant-aa35aa179/"><FiLinkedin /></a> <a style={{color: "#8EA7E9"}} href="https://www.joinpanda.com/"><SiFoodpanda /></a>
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
