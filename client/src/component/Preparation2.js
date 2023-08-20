import React from "react";
import "./Style/Style.css";
import car1 from "./Assits/car1.png";
import { Link } from "react-router-dom";
const Preparation2 = () => {
  return (
    <div>
      <section class="Subject neet_preparation">
        <h2>NEET Preparation/</h2>
      </section>
      <section class="more">
        <img src={car1} alt="" />
        <p>
          NEET is a prestigious national exam, granting access to India's finest
          medical colleges, including AIIMS and other esteemed institutions.
          However, its preparation demands dedication and perseverance, as
          challenges along the way cannot be ignored. Our seasoned experts have
          personally traversed this path, gaining invaluable wisdom. With their
          steadfast guidance, you'll receive personalized support to overcome
          obstacles and achieve your aspiration of excelling in NEET. We are
          devoted to harnessing our experience to ensure a seamless NEET
          journey, empowering you to realize your dreams and secure a promising
          future in the finest medical colleges across the country.
        </p>
        <Link to="/services" class="btn">
          <i class="fas fa-arrow-left"></i>Go back
        </Link>
      </section>
    </div>
  );
};

export default Preparation2;
