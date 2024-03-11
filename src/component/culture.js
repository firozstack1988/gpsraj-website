import React ,{useState,useRef,useEffect}from "react";
 
import Header from './Header';
import Footer from "./Footer";
import './image.css';
import './home.css';
import img1 from './cultural/img-9.png';
import img2 from './cultural/img-22.jpg';
import img3 from './cultural/img-21.jpg';
import img4 from './cultural/img-23.jpg';

const Culture=()=>{
    return(    
      <div>
        <Header/>
     
        <div className="culture-img-1">
        <img   src={img1} alt="" width="500px"/>
        </div>
        <div className="culture-img-2">
        <img   src={img2} alt="" width="500px"/>
        </div>
        <div className="culture-img-3">
        <img   src={img3} alt="" width="500px"/>
        </div>
        <div className="culture-img-4">
        <img   src={img4} alt="" width="500px"/>
        </div>
        
        <div className="home-footer">
         <Footer/>
       </div>

        </div>           
    );
}

export default Culture;  