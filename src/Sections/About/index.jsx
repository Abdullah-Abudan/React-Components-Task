import './style.css'
import MiddFlexContent from "../../Components/MiddFlexContent/index"
// import MainTitle from '../../Components/MainTitle';
import img from "../../Images/About/about-food.svg"

const About = (props) =>{
    return (
            <section className="about">
           <MiddFlexContent title="About Us" main_descr="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"
             sub_descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit.
              Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque."
               btn="Read more" img={img}/>
            </section>

    )
}
export default About;