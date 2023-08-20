import React from 'react'
import "./Style/Style.css";
import a6 from "./Assits/a6.jpg"

const About = () => {
  return (
    <div>
      <section className="about" id="about">
            <h2 className="heading">About <span>Us</span></h2>
            <div className="ab">
                <img src= {a6} alt="avatar"/>
                <div>
                    <h2>Who Are We?</h2>
                    <p>We are a group of passionate and talented students hailing from diverse academic domains. Our primary objective is to assist you in resolving any confusion or challenges you might be facing in your career. Our collective knowledge and discussions with esteemed experts from prestigious institutions like IITs, NITs, IIITs, AIIMS, and others equip us to help you discover your ideal career path and area of interest. How can we be of assistance to you? Please feel free to share your queries or concerns, and we'll be more than happy to provide guidance and support. . 
                    </p><br/>
                    <p>With our collective knowledge and insights gained from interactions with industry leaders and accomplished professionals, we are well-equipped to guide you through the maze of possibilities and assist you in making informed decisions.
                       Whether you seek guidance in the fields of engineering, technology, medicine, or beyond, our team is here to provide personalized advice tailored to your unique aspirations.</p>
                      
    
                    <br/><br/>
                    <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
                    Our objective is to empower you with the necessary information and perspectives that will enable you to make confident choices.
                     Through our collaboration with esteemed experts and our deep understanding of the current trends and demands of various industries, we endeavor to match your talents and interests with the most suitable opportunities.
                    </marquee>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
