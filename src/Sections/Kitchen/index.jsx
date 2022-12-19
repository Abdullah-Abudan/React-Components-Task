import './style.css';
import KitchenContent from '../../Components/KitchenContent';
import img_1 from "../../Images/Kitchen/kitchen1.svg"
import img_2 from "../../Images/Kitchen/kitchen2.svg"
import img_3 from "../../Images/Kitchen/kitchen3.svg"
import img_4 from "../../Images/Kitchen/kitchen4.svg"
import img_5 from "../../Images/Kitchen/kitchen5.svg"
import img_6 from "../../Images/Kitchen/kitchen6.svg"
import JoinKitchen from '../../Components/Joinkitchen';
import img_wave from "../../Images/Kitchen/Wave.svg"
import MiddFlexContent from '../../Components/MiddFlexContent';
import img from "../../Images/Kitchen/worker.svg"

const Kitchen = (props) =>{
    return (
        <section className='kitchen' >
            <div style={{display:'flex'}}>
            <div style={{width:'50%'}}>
            <KitchenContent img={img_1} title="Lorem ipsum dolor sit amet" descr="Lorem ipsum dolor sit amet" price="Rs 222" />
            <KitchenContent img={img_2} title="Lorem ipsum dolor sit amet" descr="Lorem ipsum dolor sit amet" price="Rs 590" />
            <KitchenContent img={img_3} title="Lorem ipsum dolor sit amet" descr="Lorem ipsum dolor sit amet" price="Rs 130" />
            <KitchenContent img={img_4} title="Lorem ipsum dolor sit amet" descr="Lorem ipsum dolor sit amet" price="Rs 135" />
            <KitchenContent img={img_5} title="Lorem ipsum dolor sit amet" descr="Lorem ipsum dolor sit amet" price="Rs 148" />
            <KitchenContent img={img_6} title="Lorem ipsum dolor sit amet" descr="Lorem ipsum dolor sit amet" price="Rs 200" />
            </div>
            <div style={{width:'50%'}}>
            <KitchenContent img={img_6} title="Lorem ipsum dolor sit amet" descr="Lorem ipsum dolor sit amet" price="Rs 222" />
            <KitchenContent img={img_5} title="Lorem ipsum dolor sit amet" descr="Lorem ipsum dolor sit amet" price="Rs 590" />
            <KitchenContent img={img_4} title="Lorem ipsum dolor sit amet" descr="Lorem ipsum dolor sit amet" price="Rs 135" />
            <KitchenContent img={img_3} title="Lorem ipsum dolor sit amet" descr="Lorem ipsum dolor sit amet" price="Rs 148" />
            <KitchenContent img={img_2} title="Lorem ipsum dolor sit amet" descr="Lorem ipsum dolor sit amet" price="Rs 135" />
            <KitchenContent img={img_1} title="Lorem ipsum dolor sit amet" descr="Lorem ipsum dolor sit amet" price="Rs 200" />
            </div>
            </div>
            <JoinKitchen img = {img_wave} title="Come join us for a lunch this weekend and enjoy" descr="FLAT 10% OFF" btn ="Book Table" />
            <div style={{paddingBottom:'150px'}}></div>
            <MiddFlexContent title="Cooking ingredients" main_descr="What goes in"
             sub_descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit.
              At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit." btn="Read more" img={img} />

              
        </section>
    )
}
export default Kitchen;