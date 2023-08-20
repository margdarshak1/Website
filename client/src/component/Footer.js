import React from 'react'
import "./Style/Style.css";
const Footer = () => {
  return (
    <div>
      <section className="footer" id="footer">
            <div className="box-container">
                <div className="box">
                    <h3>Quick s</h3>
                    <a href="#hero"> <i className="fas fa-arrow-right"></i> home </a>
                    <a href="#about"> <i className="fas fa-arrow-right"></i> about </a>
                    <a href="#service"> <i className="fas fa-arrow-right"></i> services </a>
                    <a href="#review"> <i className="fas fa-arrow-right"></i> experts </a>
                    <a href="#contact"> <i className="fas fa-arrow-right"></i> appointment </a>
                </div>
                <div className="box">
                    <h3>contact info</h3>
                    <a href="/"> <i className="fas fa-phone"></i> +123-456-7890 </a>
                    <a href="/"> <i className="fas fa-phone"></i> +111-222-3333 </a>
                    <a href="/"> <i className="fas fa-envelope"></i> vishnusingh@gmail.com </a>
                    <a href="/"> <i className="fas fa-map-marker-alt"></i> uttarpradesh, india - 400104 </a>
                </div>
                <div className="box">
                    <h3>contact info</h3>
                    <a href="/"> <i className="fab fa-facebook-f"></i> facebook </a>
                    <a href="/"> <i className="fab fa-twitter"></i> twitter </a>
                    <a href="/"> <i className="fab fa-instagram"></i> instagram </a>
                    <a href="/"> <i className="fab fa-linkedin"></i> linkedin </a>
                    <a href="/"> <i className="fab fa-pinterest"></i> pinterest </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
