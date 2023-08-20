import React from "react";
import "./Style/Style.css";
import car4 from "./Assits/car4.png";
import { Link } from "react-router-dom";
const Preparation1 = () => {
  return (
    <div>
      <section class="Subject iit_preparation">
        <h2>IIT/JEE Preparation/</h2>
      </section>
      <section class="more">
        <img src={car4} alt="" />
        <p>
          JEE is a prestigious national exam, opening doors to India's top
          engineering colleges like IITs, NITs, and IIITs. Yet, its preparation
          isn't without challenges. We understand the hurdles you may encounter
          on this path, and our experienced experts have navigated this journey
          themselves, gaining valuable insights. With their unwavering support,
          you'll receive personalized guidance to overcome obstacles and reach
          your goal. We are committed to leveraging our expertise to make your
          JEE journey smoother, empowering you to achieve success and secure a
          bright future in the best engineering institutions of India.
        </p>
        <Link to="/services" class="btn">
          <i class="fas fa-arrow-left"></i>Go back
        </Link>
      </section>
    </div>
  );
};

export default Preparation1;
