import React from "react";
import {
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { SiFoodpanda } from "react-icons/si";

const SocialShare = [
  {
    iconName: <FiInstagram />,
    link: "https://instagram.com/kjd.psychology?igshid=NTc4MTIwNjQ2YQ==",
  },
  { iconName: <SiFoodpanda />, link: "https://www.joinpanda.com/" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/kerri-dimant-aa35aa179/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
