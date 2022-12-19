import "./style.css"
import Container from "../../Components/Container"
// import img_logo from "../../Images/Header/logo.svg"
// import img_twitter from "../../Images/Footer/twitter.svg"
// import img_youtube from "../../Images/Footer/youtube.svg"
// import img_instagram from "../../Images/Footer/instagram.svg"
// import img_email from "../../Images/Footer/email.svg"
// import img_site from "../../Images/Footer/site.svg"
// import img_phone from "../../Images/Footer/phone.svg"
import Subscribe from "../../Components/Subscribe"
import Copyright from "../../Components/CopyRight"
import email_subscribe from "../../Images/Footer/email-subscribe.svg"
import FooterDiv from "../../Components/ContactDiv"

export default function Footer (){
        return (
            <section className="Footer">
                <Container>
                    <FooterDiv/>
                    < Subscribe email_img={email_subscribe} descr="Subscribe to our Newsletter" txt="text" plh="Your Email" subs="Subscribe" />
                    <Copyright />
                </Container>
                
            </section>
            );
                }
            
