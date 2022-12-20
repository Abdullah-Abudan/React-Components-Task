import "./style.css"
import Container from "../../Components/Container"
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
            
