import React, { useState } from "react";
import "./Style/Style.css";
import Swiper from "./Swiper";
import Swiper2 from "./Swiper2";
import Slider from './Slider';
import { Link } from "react-router-dom";
import pic1 from "./Assits/pic-1.png"
import pic3 from "./Assits/pic-3.png"
import pic4 from "./Assits/pic-4.png"
import pic from "./Assits/quote-img.png"



const Home = (props) => {

    const[inpval, setinp] = useState({
        name:"",
        email:"",
        mobile:"",
        whnumber:"",
        expert:"",
        problem:""
    })
    const setdata = (e) =>{
        console.log(e.target.value);
        const{name,value} = e.target;
        setinp((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }
    const addinpdata = async(e)=>{
        e.preventDefault();
        console.log("we recieved ",inpval)
        const {name,email,mobile,whnumber,expert,problem} = inpval;
        const res = await fetch("https://server-six-azure.vercel.app/message", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,mobile,whnumber,expert,problem
            })
        })
        const data = await res.json();
        console.log(data);
        if(res.status === 422 || !data){
            alert("from is already submitted");
        }else{
            alert("your form is submitted succesfully");
            setinp({
                name:"",
                email:"",
                mobile:"",
                whnumber:"",
                expert:"",
                problem:""
            })
            
        }
    }
  return (
    <div>
        <Slider/>
        <section id="hero">
            <div className="contant">
                <h4>Identify Your Problems</h4>
                <h2>Super value deals</h2>
                <h1>No problem No confusion </h1>
                <p>Come with us we are here to solve your problem</p>
                <button> <Link to="/contact" clas>Get Appointment</Link></button>
            </div>
            <div className="swiper image-slider">
               <Swiper/>
            </div>
        </section>

        <section className="feature" id="feature">
            <h2 className="heading"> How <span>We</span> Work</h2>
            <p>Replenish man have thing Lorem ipsum dolor sit. Lorem, ipsum dolor</p>

            <div className="fea-base">
                <div className="fea-box">
                    <i className="fas fa-graduation-cap"></i>
                    <h3>Step-1</h3>
                    <p>Check out our Services
                    </p>
                </div>
                <div className="fea-box">
                    <i className="fas fa-certificate"></i>
                    <h3>Step-2</h3>
                    <p>Fill up the Appointment Form
                    </p>
                </div>
                <div className="fea-box">
                    <i className="fas fa-award"></i>
                    <h3>Step-3</h3>
                    <p>Pay via our secure email link.Done!
                    </p>
                </div>
            </div>
           
        </section>
        

        {/* ----------------review section------------------------------------------------- */}
        <section className="review" id="review">
            <h2 className="heading"> Our <span>Experts</span></h2>
            <div className="swiper review-slider">
                <Swiper2/>
            </div>
        </section>

        {/* -------------------Contact us---------------------------- */}
        <section className="contact" id="contact">
            <div className="fo">
                <h2 className="heading"><span>Get </span> Appointment!</h2>
                <form method='POST'>
                    <div className="input-box">
                        <input type="name" onChange={setdata} value={inpval.name} name='name' placeholder="Enter Full Name"/>
                        <input type="email" onChange={setdata} value={inpval.email} name='email' placeholder="Enter Email Address"/>
                    </div>
                    <div className="input-box">
                        <input type="number" onChange={setdata} value={inpval.mobile} name="mobile" placeholder="Enter Mobile Number"/>
                        <input type="number" onChange={setdata} value={inpval.whnumber} name="whnumber" placeholder="Enter Whatapp Number if Avilable"/>
                    </div>
                    <div className="input-box">
                        <input type="text" onChange={setdata} value={inpval.expert} name="expert" placeholder=" Enter Expert Name"/>
                        <input type="text" onChange={setdata} value={inpval.problem} name="problem"  placeholder="Enter Our Problem Statement"/>
                    </div>
                    <input type="submit" onClick={addinpdata} value="Send Message" className="btn2"/>
                </form>
            </div>
        </section>
        <section className="student" id="student">
            <h2 className="heading">Students <span>Review</span></h2>

            <div className="box-container">
                <div className="box">
                    <img src={pic} alt="" className="quote" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                    <img src={pic1} alt="" className="user" />
                    <h3>Vishnu rajput</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
                <div className="box">
                    <img src={pic} alt="" className="quote" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                    <img src={pic4} alt="" className="user" />
                    <h3>Vishnu rajput</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
                <div className="box">
                    <img src={pic} alt="" className="quote" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                    <img src={pic3} alt="" className="user" />
                    <h3>Vishnu rajput</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </section>
    </div>  
  );
};

export default Home;
