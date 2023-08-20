import React from 'react'
import Swiper2 from "./Swiper2";
import "./Style/Style.css";
const Expert = () => {
  return (
    <div>
        <section className="review" id="review">
          <h2 className="heading"> Our <span>Experts</span></h2>
          <div className="swiper review-slider">
            <Swiper2/>
          </div>
         </section>
    </div>
  )
}

export default Expert
