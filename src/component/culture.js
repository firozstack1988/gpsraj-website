import React ,{useState,useRef,useEffect}from "react";
 
import Header from './Header';
import Footer from "./Footer";
import './image.css';
import './home.css';

const Culture=()=>{
    return(    
      <div>
        <Header/>
     
        <div className="culture-img-1">
        <img   src="cultural/img-9.PNG" alt="" width="500px"/>
        </div>
        <div className="culture-img-2">
        <img   src="cultural/img-22.JPG" alt="" width="500px"/>
        </div>
        <div className="culture-img-3">
        <img   src="cultural/img-21.JPG" alt="" width="500px"/>
        </div>
        <div className="culture-img-4">
        <img   src="cultural/img-23.JPG" alt="" width="500px"/>
        </div>
        
        <div className="home-footer">
         <Footer/>
       </div>

        </div>           
    );
}

export default Culture;  