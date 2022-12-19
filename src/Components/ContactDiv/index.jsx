import { Component } from "react";
import "./style.css";
import img_logo from "../../Images/Header/logo.svg"
import img_twitter from "../../Images/Footer/twitter.svg"
import img_youtube from "../../Images/Footer/youtube.svg"
import img_instagram from "../../Images/Footer/instagram.svg"
import img_email from "../../Images/Footer/email.svg"
import img_site from "../../Images/Footer/site.svg"
import img_phone from "../../Images/Footer/phone.svg"
class FooterDiv extends Component{
    render(){
        return (
            <div style={{display:"flex"}}>

            <div className="main_div" >
            <div className="sub_div" style={{display:"flex",gap:'8px'}}> <img src={img_logo} alt="" /><span>Golden View Dine</span></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
           <div>
           <span><img src={img_twitter} alt="" /></span>
           <span><img src={img_youtube} alt="" /></span>
           <span><img src={img_instagram} alt="" /></span>
          </div>            
            </div>



            <div className="main_div">
            <div className="sub_div"style={{display:"flex",alignItems:"center"}}><span>Golden View Dine</span></div>
            <ul>
            <li>Privacy Policy</li>
            <li>Terms & conditions</li>
            <li>Blogs</li>
            <li>our team</li>
            <li>Our kitchen</li>
        </ul>
           </div>
           <div className="main_div">
            <div className="sub_div"style={{display:"flex",alignItems:"center"}}><span>Golden View Dine</span></div>
            <ul style={{listStyle:"none"}}>
            <li><img src={img_email} alt="" /><label>Gogreendineservice@gmail.com</label></li>
            <li><img src={img_site} alt="" /><label>AZ complex bylane3 Mandari Rd Mumbai 1100867 </label></li>
            <li><img src={img_phone} alt="" /><label>+1800 287 256</label></li>
        </ul>
          </div>            
            </div>
        )
    }
} 
export default FooterDiv;