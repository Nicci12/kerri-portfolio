import React from "react";

const Address = () => {
  return (
    <ul>
      <li>
        <img className="svg" src="img/svg/phone.svg" alt="" />
        <a href="Tel: 7614123224">+27829277216</a>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/mail.svg" alt="" />
        <span>
          <a href="mailto:ib-themes21@gmail.com">kerridimant@gmail.com</a>
        </span>
      </li>
      {/* End li */}
      <li>
        <img className="svg" src="img/svg/map.svg" alt="" />
        <span>
       Family Tree - 37 Homestead Road,
          <br /> Johannesburg, South Africa
        </span>
      </li>
      <li>
        <img className="svg" src="img/svg/map.svg" alt="" />
        <span>
        Psych Central- 40 High Street, Founders Hill,
          <br /> Johannesburg, South Africa
        </span>
      </li>
    </ul>
  );
};

export default Address;
