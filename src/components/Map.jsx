import React from "react";

const Map = () => {
  const attributes = {
    allowtransparency: true,
    allowfullscreen: true,
    allow: "geolocation; microphone; camera",
    frameBorder: 0,
    downloading: "lazy",
    style: {
      minWidth: "600px",
      maxWidth: "300px",
      height: "450px",
      border: "none",
    },
  };
  return (
    <>
    
      <div className="map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.06802981943!2d28.062950073956348!3d-26.12932476092588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950d1f8cc86c29%3A0xdac895ec13fe29df!2sBlubird%20Medical%20Suites!5e0!3m2!1sen!2sil!4v1683828446772!5m2!1sen!2sil"
            {...attributes}></iframe>
        </div>
      </div>
      {/* End map */}
    </>
  );
};

export default Map;
