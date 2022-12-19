import './style.css'
import MainTitle from '../../Components/MainTitle';
import Card from '../../Components/Card';
import img_1 from "../../Images/Specials/orange-juice.svg"
import img_2 from "../../Images/Specials/chef.svg"
import img_3 from "../../Images/Specials/restaurant.svg"
const Special = (props) =>{
    return (
            <section className="special">
                <MainTitle title="Special" descr="What makes us special" /> 
                <div style={{display:'flex',justifyContent:"space-around", marginBottom:'96px'}}>
                <Card img={img_1} title="Fresh food" 
                descr="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. " />
                <Card img={img_2} title="skilled Chef" 
                descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. " />
                <Card img={img_3} title="Exotic dishes" 
                descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. " />
                </div>
                <MainTitle title="Straight From Kitchen" descr="Our Menu" />
            </section>

    )
}
export default Special;