import React from 'react'
import "./Style/Style.css";
import car2 from "./Assits/car-2.png"
import { Link } from "react-router-dom";
const Subject = () => {
  return (
    <div>
      <section class="Subject iit_councelling">
        <h2>IIT/JEE Councelling/</h2>
      </section>
      <section class="more">
        <img src={car2} alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, commodi odit.
            Illo natus tempora consequuntur, reprehenderit nulla nemo deleniti officia
            qui rerum. Aut porro quasi aliquam minus alias. Odio alias quam soluta
            laudantium perferendis dolores quis corporis suscipit tenetur
            facere quisquam, quasi cumque excepturi iusto delectus ab vitae
            assumenda reiciendis. Impedit eveniet iusto optio voluptate atque,
            eos rem molestias voluptatum vitae, facere sapiente beatae quas
            voluptates, dolor sint non doloremque aperiam tempora cupiditate
            repudiandae consequatur qui ad? Quo officia nesciunt quidem autem
            sequi voluptates in beatae cumque provident, consequuntur,
            praesentium illum eveniet
            laborum dolorem. Dolore necessitatibus illum ullam nostrum aliquid?</p>
            <Link to="/services" class="btn"><i class="fas fa-arrow-left"></i>Go back</Link>
      </section>
    </div>
  )
}

export default Subject
