import React from "react";
import {
  FiLinkedin,
} from "react-icons/fi";
import { SiFoodpanda } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

const socialList = [
  {
    name: <BsInstagram />,
    link: "linkedin.com/in/kerri-dimant-aa35aa179",
  },
  {
    name: <FiLinkedin />,
    link: "https://instagram.com/kjd.psychology?igshid=NTc4MTIwNjQ2YQ==",
  },
  {
    name: <SiFoodpanda />,
    link: "https://www.joinpanda.com/",
  },
];

const SocialTwo = () => {
  return (
    <ul>
      {socialList.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <span className="first">{val.name}</span>
            <span className="second">{val.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialTwo;
