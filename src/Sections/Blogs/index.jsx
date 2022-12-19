import "./style.css"
import MainTitle from "../../Components/MainTitle"
import img1 from "../../Images/Blogs/food1.svg"
import img2 from "../../Images/Blogs/food2.svg"
import img3 from "../../Images/Blogs/food3.svg"
import BlogsDiv from "../../Components/BlogsDiv"
import BlogsDivImg from "../../Components/BlogsDiv/BlogsDivImg"
export default function Blogs (){
        return (
            <section className="Blogs" >
                <MainTitle title ="Blogs" descr="words from our food lovers" />
                    <div style={{display:"flex"}}>
                        <BlogsDiv img={img1} main_descr="Cooking Dining Experience" sub_descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin" readM=" Read More" />
                        <BlogsDivImg img={img2} main_descr="Cooking Dining Experience" sub_descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin" readM=" Read More" />
                        <BlogsDiv img={img3} main_descr="Cooking Dining Experience" sub_descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin" readM=" Read More" />
                        </div>
            </section>
            );
                }

            
