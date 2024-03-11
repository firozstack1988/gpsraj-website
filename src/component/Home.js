import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import './image.css';
import './home.css';
import { Link} from "react-router-dom";
import img1 from './cultural/img-1.png';
import img2 from './cultural/img-2.png';
import img3 from './cultural/img-3.png';
import img4 from './cultural/img-4.png';
import img5 from './cultural/img-6060.png';
import img6 from './cultural/img-9.png';
import img7 from './cultural/img-11.png';
import img8 from './cultural/img-12.png';
import img9 from './cultural/img-17.png';

const Home=()=>{
 
 return(
   <div  >
  <div className=""><Header/></div>
   <div className="home-img1">
   <img   src={img1} alt=""/>
   </div>
   <div className="home-img2">
   <img   src={img2} alt=""/>
   </div>
   
   <div className="home-img3">
   <img   src={img3} alt=""/>
   </div>
   <div className="home-img4">
   <img   src={img4} alt=""/>
   </div>

    
   <div className="home-img6">
   <img   src={img5} alt=""/>
   </div>
   <div className="home-img7">
   <img   src={img6} alt=""/>
   </div>
   <div className="home-img8">
   <img   src={img7} alt=""/>
   </div>
   <div className="home-img9">
   <img   src={img8} alt=""/>
   </div>
   <div className="home-img10">
   <img   src={img9} alt=""/>
   </div>

   <div className="home-footer">
   <Footer/>
   </div>
   
   </div>
         
 )
}
export default Home;