import React ,{useState,useRef,useEffect}from "react";
 
import Header from './Header';
import Footer from "./Footer";
import './image.css';
import './home.css';

const Magazine=()=>{
    return(    
      <div>
        <Header/>
        <div className="education-head">
          <h1>Magazine Report</h1>
        </div>
        <div className="education-content1">
<p>Grameen Prochesta Organization generate a magazine in every year which include all the social 
   welfare activites,cultural activites,health and education program.This step provides facilitate
   more unprivileged people those are living under the proverty.Grameen Prochesta beleive that this
   type program gradually developed their life and lead a prosper life.In near future more program
   will run so that villages backward people can be lighten and get a modern facility for living their
   life.The children of the backward people also beneficiary under this activites specially they get
   education cost,education equipment.
    </p> </div>

        <div className="magazine-img-1">
        <img   src="home/img-15.JPG" alt="" width="500px"/>
        </div>
        <div className="magazine-img-2">
        <img   src="home/img-5.JPG" alt="" width="500px"/>
        </div>
        <div className="magazine-img-3">
        <img   src="home/img-12.JPG" alt="" width="500px" height="500px"/>
        </div>
        <div className="magazine-img-4">
        <img   src="home/img-13.JPG" alt="" width="500px" height="500px"/>
        </div>
        
        <div className="home-footer">
         <Footer/>
       </div>

        </div>           
    );
}

export default Magazine;  