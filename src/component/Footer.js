import React from "react";
import './footer.css';
import { Link} from "react-router-dom";
const Footer=()=>{
return(
 <div className="main-footer">
    <div className="container">
        <div className="row">
            <div className="col">
            <h4>Head Office Address</h4>
             <ul className="list-unstyled">              
                <li>Bot-tala,Uposhohor</li>
                <li>Boalia Rajshahi</li>
                <li>Dhaka,Bangladesh</li>
             </ul>
            </div>
            <div className="col">
            <h4>About</h4>
             <ul className="list-unstyled">                        
             <li><Link to="/health">Health Program</Link></li>
             <li><Link to="/education">Education Program</Link></li>
             <li><Link to="/welfare">Social Welfare</Link></li>
                         
             </ul>
            </div>
            <div className="col">
            <h4>Contact</h4>
             <ul className="list-unstyled">              
                <li>Email:gpsraj@gmail.com</li>
                <li>Mobile:</li>
                <li>Phone:</li>
             </ul>
            </div>
        </div>
    </div>

 </div>
)
}

export default Footer;