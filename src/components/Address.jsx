import React from "react";

const Address = () => {
  return (
    <ul>
      <li>
        <img className="svg" src="img/svg/phone.svg" alt="" />
        <a href="Tel: 7614123224">0829277216</a>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/mail.svg" alt="" />
        <span>
          <a href="mailto:ib-themes21@gmail.com">kerrijdimant@gmail.com</a>
        </span>
      </li>
      {/* End li */}
      <li>
        <img className="svg" src="img/svg/map.svg" alt="" />
        <span>
          A Really Good Therapist Centre-  1 Robant Lane, Sandton 2128, Edenburg,
          <br /> Johannesburg, 2191, South Africa
        </span>
      </li>
    </ul>
  );
};

export default Address;
