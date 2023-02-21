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
      maxWidth: "200px",
      height: "450px",
      border: "none",
    },
  };
  return (
    <>
      {" "}
      <div className="map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18592.275786665006!2d28.058212432499097!3d-26.061321900643115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573aaa61cb239%3A0x26effa57f39eff0f!2sA%20Really%20Good%20Therapist%20Centre!5e0!3m2!1sen!2sil!4v1676796423714!5m2!1sen!2sil"
            {...attributes}></iframe>
        </div>
      </div>
      {/* End map */}
    </>
  );
};

export default Map;
