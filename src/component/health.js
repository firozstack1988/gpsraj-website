import React ,{useState,useRef,useEffect}from "react";
 
import Header from './Header';
import Footer from "./Footer";
import './image.css';
import './home.css';
import img1 from './health/img-14.jpg';

const Health=()=>{
    return(    
      <div>
        <Header/>
        <div className="education-head">
          <h1>Health Program</h1>
        </div>
        <div className="education-content1">
<p>Health Program of Grameen Prochesta Organization is a vital initiative which provides free medical camp, 
free eye operation also test on some specific diseases and makes people aware in maintaining 
healthy life. It also provide medical equipment to the patients those are living under the proverty. 
Under this program, there are several free medical camp has been established
in backward areas of offering healthcare services to people predominantly
underprivileged and underserved. The program reaches target people with necessary 
medical services making their health and living improved. During 2024, a large number of poor  
patients were given the above stated services. </p> </div>
       
<div className="education-content2"><p>
From the begining of establishment Grameen Prochesta has continuosly taken several step for providing
primary medical services across the poor patient and also near future this step will be continue.
</p></div>

        <div className="health-img-1">
        <img   src={img1} alt=""/>
        </div>
        
        <div className="home-footer">
         <Footer/>
       </div>

        </div>           
    );
}

export default Health;  