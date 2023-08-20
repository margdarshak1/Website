import React from "react";
import "./Style/Style.css";
import car2 from "./Assits/car-2.png";
import { Link } from "react-router-dom";
const Councelling1 = () => {
  return (
    <div>
      <section class="Subject iit_councelling">
        <h2>IIT/JEE Councelling/</h2>
      </section>
      <section class="more">
        <img src={car2} alt="" />
        <p>
          Congratulations on qualifying in JEE! Securing a good college is a
          critical step towards a successful career. We understand that this
          journey can be overwhelming, and that's why we are here to support you
          every step of the way. Choosing the right college is crucial, and it
          goes beyond just the rank. We take into account your preferences and
          consider various factors, such as the academic reputation of the
          college, faculty expertise, campus facilities, and placement
          opportunities. Additionally, we carefully assess the atmospheric
          conditions, ensuring a comfortable and conducive environment for your
          growth and development. Our experienced team, who have been through
          this journey themselves, will guide you through the entire counseling
          process. We understand the challenges you may face and are committed
          to providing you with personalized assistance, helping you make the
          best choices for your future.
        </p>
        <Link to="/services" class="btn">
          <i class="fas fa-arrow-left"></i>Go back
        </Link>
      </section>
    </div>
  );
};

export default Councelling1;
