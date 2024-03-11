import React ,{useState,useRef,useEffect}from "react";
 
import Header from './Header';
import Footer from "./Footer";
import './image.css';
import './home.css';

const Loan=()=>{
    return(    
      <div>
        <Header/>
        <div className="education-head">
          <h1>Loan Product</h1>
        </div>
        <div className="loan-sub-head">
          <h4>Micro Loan</h4>
        </div>
        <div className="loan-content1">
<p>Grameen Prochesta has been launched a program for providing micro loan among the people
those are easily can make their capital and capable to scale up their production,
business activities and employment generation such as agri-farm,ranch,fish cultivation.
Without any security helpless and landless people can easily get their capital.</p> </div>
     
     <div className="loan-sub-head2">
          <h4>SME Loan</h4>
        </div>
       
        <div className="loan-content2">
<p>Small and medium enterprises are considered as engines of growth and drivers of 
economic innovation worldwide. For the economy of our country, this sector has been 
playing a decisive role in creating jobs for the jobless which contributes to poverty 
alleviation process making it faster and sustainable. Small and Medium enterprises are 
particularly suitable for the densely populated countries like Bangladesh where SME 
sector can provide huge employment opportunity with much lower investment. Over the 
years,Grameen Prochesta adopted various approaches for the development of small and medium enterprises
.As a result a good number small borrowers by availing assistance of 
Grameen Prochesta have successfully graduated into small entrepreneurs.</p> </div>

<div className="loan-sub-head3">
          <h4>Special Loan</h4>
        </div> 
        
        <div className="loan-content3">
<p>Informal or formal small/micro enterprises or entrepreneurs and traders to promote and 
scale up production, business activity and employment generation.</p> </div>
        <div className="home-footer">
         <Footer/>
       </div>

        </div>           
    );
}

export default Loan;  