import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import './image.css';
import './home.css';
import { Link} from "react-router-dom";

const Home=()=>{
 
 return(
   <div  >
  <div className=""><Header/></div>
   <div className="home-img1">
   <img   src="cultural/img-1.PNG" alt=""/>
   </div>
   <div className="home-img2">
   <img   src="cultural/img-2.PNG" alt=""/>
   </div>
   
   <div className="home-img3">
   <img   src="cultural/img-3.PNG" alt=""/>
   </div>
   <div className="home-img4">
   <img   src="cultural/img-4.PNG" alt=""/>
   </div>

    
   <div className="home-img6">
   <img   src="cultural/img-6.PNG" alt=""/>
   </div>
   <div className="home-img7">
   <img   src="cultural/img-9.PNG" alt=""/>
   </div>
   <div className="home-img8">
   <img   src="cultural/img-11.PNG" alt=""/>
   </div>
   <div className="home-img9">
   <img   src="cultural/img-12.PNG" alt=""/>
   </div>
   <div className="home-img10">
   <img   src="cultural/img-17.PNG" alt=""/>
   </div>

   <div className="home-footer">
   <Footer/>
   </div>
   
   </div>
         
 )
}
export default Home;