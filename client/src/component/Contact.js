import React, { useState } from 'react'
import "./Style/Style.css";

const Contact = () => {

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
       <section className="contact" id="contact">
            <div className="fo">
                <h2 className="heading">Contact <span>Us!</span></h2>
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
    </div>
  )
}

export default Contact
