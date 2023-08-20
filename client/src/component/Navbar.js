import React, { useState } from 'react'
import "./Style/Style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const show = () =>{
       setIsActive(true)
       console.log("click");
    }
    const hide = (e)=>{
        e.preventDefault();
        setIsActive(false)
    }
  return (
    <div>
      <section id="header">
           <Link to="/" className="logo"><span>MARG</span>DARSHAK</Link>
           {/*  <Link to="/" className="logo"> <img src={logo} alt="" /> */}
            <div>
                <ul id="navbar" className={`${isActive ? "active" : ""}`}>
                   <li><Link to="/">home</Link></li>
                   <li><Link to="/about"> about</Link></li>
                   <li><Link to="/services">services</Link></li>
                   <li><Link to="/expert">experts</Link></li>
                   <li><Link to="/contact">appointment</Link></li>
                   <li><Link to="/blog">blog</Link></li>
                  <a href="/" id="close" onClick={hide}><i className="fas fa-times"></i></a>
                </ul>
            </div>
            <div id="mobile">
               <i id="bar" onClick={show} className="fas fa-outdent"></i>
            </div>
        </section>
    </div>
  )
}

export default Navbar
