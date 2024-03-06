import React ,{useState,useRef,useEffect}from "react";
 
import Header from './Header';
import Footer from "./Footer";
import './image.css';
import './home.css';

const Education=()=>{
    return(    
      <div>
        <Header/>
        <div className="education-head">
          <h1>Education Program</h1>
        </div>
        <div className="education-content1">
<p>Grameen Prochesta Education Program is a great initiative of delivering education 
assistance to underprivileged students from pre-primary level to higher level belonging 
to the low-income households to perform better in classes and exams with an aim to 
facilitate quality education and curb dropout. The guardians of the above-mentioned 
students are commonly poor and most of them are not capable enough to assist their 
children in preparing homework. As a result, their children can’t prepare homework 
and classwork find studies uninteresting and shun education as well as school in the 
halfway. And this is a root cause for school dropouts.</p> </div>
       
<div className="education-content2"><p>
Grameen Prochesta Education Program has been open a number education centers in the villages across
to provide tuition aid to the above stated students. As of 2024, more than 1000 
students were deriving benefit out of the program that reflected in their performance. 
Grameen Prochesta has plans to spread out this program gradually to facilitate more underprivileged children 
those are living under the proverty.
</p></div>

        <div className="education-img1">
        <img   src="education/img-16.PNG" alt=""/>
        </div>
        
        <div className="home-footer">
         <Footer/>
       </div>

        </div>           
    );
}

export default Education;  