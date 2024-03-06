import React ,{useState,useRef,useEffect}from "react";
 
import Header from './Header';
import Footer from "./Footer";
import './image.css';
import './home.css';

const Welfare=()=>{
    return(    
      <div>
        <Header/>
        <div className="education-head">
          <h1>Social Welfare Program</h1>
        </div>
        <div className="education-content1">
<p>Social welfare Program of Grameen Prochesta Organization is also a important initiative
 which include several helping program such as providing blanket,goat,cow,food and so on. 
Under this program, there are several free training session has been arranged such as about information act law
in backward areas of the country offering consiousness to the people those are
underprivileged and underserved. The program reaches target people with necessary 
different services making their living improved. During 2024, a large number of poor  
people were benefited from the above program. </p> </div>

   <div className="education-content2"><p>
Grameen Prochesta has been open a number of program for helping in agriculture sector in the villages across  
the people to provide aid so that can developed the agriculture.Grameen Prochesta has plans to   
spread out this program gradually to facilitate more underprivileged people those are living under the proverty.

</p></div>    

        <div className="health-img-1">
        <img   src="welfare/img-2.PNG" alt=""/>
        </div>
        
        <div className="home-footer">
         <Footer/>
       </div>

        </div>           
    );
}

export default Welfare;  