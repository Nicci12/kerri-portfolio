import React from "react";
import {
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { SiFoodpanda } from "react-icons/si";

const SocialShare = [
  {
    iconName: <FiInstagram />,
    link: "www.facebook.com"
  },
  { iconName: <SiFoodpanda />, link: "https://www.joinpanda.com/" },
  {
    iconName: <FiLinkedin />,
    link: "https://instagram.com/kjd.psychology?igshid=NTc4MTIwNjQ2YQ=="
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
