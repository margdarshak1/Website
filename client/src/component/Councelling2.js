import React from "react";
import "./Style/Style.css";
import car6 from "./Assits/car-6.png";
import { Link } from "react-router-dom";
const Councelling2 = () => {
  return (
    <div>
      <section class="Subject neet_councelling">
        <h2>NEET Councelling/</h2>
      </section>
      <section class=" more more2">
        <img src={car6} alt="" />
        <p>
          Congratulations on qualifying in NEET! We understand that choosing the
          right college is vital for a successful medical career. Our
          experienced team, having been through this journey, will guide you to
          select the best college based on your rank and atmospheric conditions.
          We provide personalized assistance, ensuring you make informed
          decisions during choice filling. With our unwavering support
          throughout the counseling process, we are dedicated to helping you
          secure a college that aligns with your aspirations and offers a
          conducive learning environment. Your success is our priority, and
          we're here to make this journey seamless and rewarding.
        </p>
        <Link to="/services" class="btn">
          <i class="fas fa-arrow-left"></i>Go back
        </Link>
      </section>
    </div>
  );
};

export default Councelling2;
