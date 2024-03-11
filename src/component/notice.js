import React ,{useState,useRef,useEffect}from "react";
 
import Header from './Header';
import Footer from "./Footer";
import './image.css';
import './home.css';

const Notice=()=>{
    return(    
      <div>
        <Header/>
        <div className="education-head">
          <h1>Notice Board</h1>
        </div>
        
        <div className="home-footer">
         <Footer/>
       </div>

        </div>           
    );
}

export default Notice;  