import React from 'react'
import "./Style/Style.css";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div>
      <section className="services " id="services">
            <h2 className="heading">Our <span>Services</span></h2>

            <div className="services-container">
                <div className="services-box">
                    <i className="fas fa-code"></i>
                    <h3>Stream Selection</h3>
                    <p>Navigate the turbulent waters of indecision about your high school education
                        with the assistance of our experts</p>
                    <div className="price animate__animated animate__heartBeat animate__infinite">Rs 199/-</div>
                    <Link to="/subject" className="btn">Read More</Link>
                </div>
                <div className="services-box">
                    <i className="fas fa-code"></i>
                    <h3>IIT-JEE Preparation</h3>
                    <p>Unlock your potential and boost your IIT-JEE preparation through helpful tips and strategies
                         deployed by our experts on their own journeys!
                         </p>
                        <div className="price animate__animated animate__heartBeat animate__infinite">Rs 199/-</div>
                    <Link to="/preparation1" className="btn">Read More</Link>
                </div>
                <div className="services-box">
                    <i className="fas fa-code"></i>
                    <h3>NEET Preparation</h3>
                    <p>India's most competitive college entrance exams raising your anxiety?Excel 
                        through advice from our experts that actually work!  </p>
                        <div className="price animate__animated animate__heartBeat animate__infinite">Rs 199/-</div>
                    <Link to="/preparation2" className="btn">Read More</Link>
             </div>
                <div className="services-box">
                    <i className="fas fa-code"></i>
                    <h3>IIT/JEE Counselling</h3>
                    <p>JOSAA counselling stressing you out? Get first-hand advice from experts of prestigious IITs,NITs
                        and IIITs to maximize your chances to get into your dream college!
                    </p>
                    <div className="price animate__animated animate__heartBeat animate__infinite">Rs 199/-</div>
                    <Link to="/councelling1" className="btn">Read More</Link>
                </div>
                <div className="services-box">
                    <i className="fas fa-code"></i>
                    <h3>NEET Counselling</h3>
                    <p>Get first-hand advice from experts who have cleared India's toughest medical entrance exam</p>
                    <div className="price animate__animated animate__heartBeat animate__infinite">Rs 199/-</div>
                    <Link to="/councelling2" className="btn">Read More</Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services
