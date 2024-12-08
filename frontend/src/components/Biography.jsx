import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
ZeeCare Medical Institute is a premier healthcare facility dedicated to providing top-notch medical services and advancing healthcare through research and innovation. Established in 2005, ZeeCare has rapidly grown to become a leading name in the medical industry, renowned for its state-of-the-art infrastructure, highly qualified medical professionals, and commitment to patient care. 
          </p>
          <p>We are all in 2024!</p>
          <p>
          With specialties ranging from cardiology to neurology, oncology to orthopedics, ZeeCare offers comprehensive medical solutions under one roof. The institute's mission is to enhance the quality of life for patients by delivering compassionate care, pioneering medical research, and fostering a culture of continuous improvement.
          </p>
         
        </div>
      </div>
    </>
  );
};

export default Biography;
