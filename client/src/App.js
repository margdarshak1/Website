import Navbar from './component/Navbar'
import Home from './component/Home';
import './App.css';
import Footer from './component/Footer';
import Copyright from './component/Copyright';
import Subject from './component/Subject';
import Preparation1 from './component/Preparation1';
import Preparation2 from './component/Preparation2';
import Councelling1 from './component/Councelling1';
import Councelling2 from './component/Councelling2';
import About from './component/About';
import Services from './component/Services';
import Expert from './component/Expert';
import Contact from './component/Contact';
import Blog from './component/Blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/about" element={<About/>}/>
         <Route exact path="/services" element={<Services/>}/>
         <Route exact path="/subject" element={<Subject/>}/>
         <Route exact path="/expert" element={<Expert/>}/>
         <Route exact path="/contact" element={<Contact/>}/>
         <Route exact path="/preparation1" element={<Preparation1/>}/>
         <Route exact path="/preparation2" element={<Preparation2/>}/>
         <Route exact path="/councelling1" element={<Councelling1/>}/>
         <Route exact path="/councelling2" element={<Councelling2/>}/>
         <Route exact path="/blog" element={<Blog/>}/>
       </Routes>
       <Footer/>
       <Copyright/>
      </BrowserRouter>
    </div>
  );
}

export default App;
