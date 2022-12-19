import { Component } from "react";
import About from "../Sections/About";
import Header from "../Sections/Header/Header"
import Kitchen from "../Sections/Kitchen";
import Special from "../Sections/Special";
import Number from "../Sections/Number";
import Review from "../Sections/Reviews";
import Blogs from "../Sections/Blogs";
import Footer from "../Sections/Footer";


class HomePage extends Component {
    render() {
      return(
      <div>
        <Header />
        <About />
        <Special />
        <Kitchen />
        <Number />
        <Review />
        <Blogs />
        <Footer />
      </div> ) 
      }
}
export default HomePage;