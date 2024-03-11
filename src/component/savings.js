import React ,{useState,useRef,useEffect}from "react";
 
import Header from './Header';
import Footer from "./Footer";
import './image.css';
import './home.css';
import img1 from './education/img-444.jpg';
import img2 from './education/img-333.jpeg';

const Savings=()=>{
    return(    
      <div>
        <Header/>
        <div className="education-head">
          <h1>Savings Product</h1>
        </div>
        <div className="education-content1">
<p>Grammeen Prochesta has been designed his savings product in such a manner that it could address the problems 
of the borrowers arising out the sudden and unpredicted necessities and wants for money.
Grammeen Prochesta Savings Product has the specialty to provide quick responses and solutions for 
money problems of the organization member in their crying needs. In most of the cases people of 
low income group face extreme difficulties and are compelled sell their valuable assets
because they don’t have extra money in their hands to meet the emergencies. Borrowing 
money from the neighbors is not possible for them as the native people living in their
villages or localities are also poor and unable to lend.</p> </div>
       
<div className="savings-content2"><p>
In the this circumstance Grameen Prochesta has been bring a way so that people can 
easily overcome the problem and they have opportunities to withdraw their deposited money from the organization at any time without any hasle.
.Grameen Prochesta are giving a offers for flexible withdrawal 
facilities for the savings to its clients so that they could meet their emergences and 
wants smoothly. This opportunity makes the poor borrowers relieved enabling them to 
withstand any unexpected economic shocks and disasters. This has enormous implications 
for sustainable poverty alleviation as well. By dint of flexible saving options clients
of Grameen Prochesta can avoid selling their valuable and essential assets during emergency periods.
</p></div>

        <div className="savings-img-1">
        <img   src={img1} alt="" width="400px"/>
        </div>
        <div className="savings-img-2">
        <img   src={img2} alt="" width="700px" height="490px"/>
        </div>
        
        <div className="home-footer">
         <Footer/>
       </div>

        </div>           
    );
}

export default Savings;  