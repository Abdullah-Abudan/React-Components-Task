import "./style.css"
import { Component } from "react"
import Container from "../../Components/Container"
import img1 from "../../Images/Number/chef.svg"
import img2 from "../../Images/Number/dish.svg"
import img3 from "../../Images/Number/team.svg"
import NumberDiv from "../../Components/NumberDiv"

class Number extends Component {

    render() {
        return (
            <section  className='number'>
            < Container> 
            <div style={{display:'flex',justifyContent:"space-around"}}>
                <NumberDiv img={img1} num="250+" descr="Delicacy" />
                <NumberDiv img={img2} num="10+" descr="renowed chefs" />
                <NumberDiv img={img3} num="30+" descr="Members" />
            </div>
            </Container>
            </section>

             );
                }
            }
export default Number;       
