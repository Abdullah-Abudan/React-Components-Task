import "./style.css"
import img1 from "../../Images/Reviews/Ellipse 1.svg"
import img2 from "../../Images/Reviews/Ellipse 2.svg"
import img3 from "../../Images/Reviews/Ellipse 3.svg"
import imgStar from "../../Images/Reviews/Vector.svg"
import MainTitle from "../../Components/MainTitle"
import Container from "../../Components/Container"
import ReviewDiv from "../../Components/ReviewDiv"

export default function Review (){
        return (
            <section className="reviews">
                <MainTitle title="Reviews" descr="words from our food lovers" />
                <Container> 
                <ReviewDiv img={img1} title="Alex andrina" imgStar={imgStar}
                 descr="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.
                     Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"/>  
                <ReviewDiv img={img2} title="Alex andrina" imgStar={imgStar}
                 descr="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.
                     Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"/>  
                <ReviewDiv img={img3} title="Alex andrina" imgStar={imgStar}
                 descr="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.
                     Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"/>  
                </Container>
            </section>
            );
                }