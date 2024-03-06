import React ,{useState,useRef,useEffect}from "react";
import { Link} from "react-router-dom";
import './drop-down.css';
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const navigat=useNavigate();
    
    return(    
        <div class="navbar">
       <div class="heading">
       <h5>Grameen Prochesta Organization</h5>
       </div>
       <div class="logo">
       <img   src="images/logo.JPG" alt=""/>
       </div>
        <div class="non-finprogram">
          <button class="non-finprogrambtn">Welfare Program
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="non-finprogram-content">
            <Link to="/health">Health Program</Link>
            <Link to="/education">Education Program</Link>
            <Link to="/welfare">Social Welfare</Link>
            
          </div>
        </div> 
        <div class="finprogram">
          <button class="finprogrambtn">Financial Program 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="finprogram-content">
          <Link to="/loan">Loan Product</Link>
          <Link to="/savings">Savings Product</Link>
          
          </div>
        </div> 

        <div class="research">
          <button class="researchbtn">Research Program 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="research-content">
            <a href="#">Annual Report</a>
            <a href="#">Magazine Report</a>
            <a href="#">Cultural Report</a>
          </div>
        </div> 

        <div class="about">
          <button class="aboutbtn">About Us 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="about-content">
          <Link to="/">About Us</Link>
          </div>
        </div> 

        <div class="notice">
          <button class="noticebtn">Notice Board 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="notice-content">
            <a href="#">All Notice</a>
          </div>
        </div> 
        <div class="contact">
          <button class="contactbtn">Contact Us
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="contact-content">
            <a href="#">Contact Us</a>
          </div>
        </div> 
      </div>

    );
}

export default Header;  