import { Component } from "react"
import "./style.css"
import Button from "../Button/index"
import img_logo from "../../Images/Header/logo.svg"
import img_search from "../../Images/Header/search.svg"
class Nav extends Component {

    render() {
        return (
            <nav className='nav'>
                    <img src={img_logo} alt="Logo"  />
                    <ul>
                        <li className={this.props.myPage === "Home" ? "active" : ""}> <a href="/#">Home</a> </li>
                        <li className={this.props.myPage === "About" ? "active" : ""}><a href="/#">About Us</a> </li>
                        <li className={this.props.myPage === "Special" ? "active" : ""}><a href="/#">Special</a></li>
                        <li className={this.props.myPage === "Menu" ? "active" : ""}><a href="/#">Menu</a></li>
                        <li className={this.props.myPage === "Blogs" ? "active" : ""}><a href="/#">Blogs</a></li>
                        <li><img src={img_search} alt="search-icon" /></li>
                    </ul>
                    <Button>Book Now</Button>
            </nav>
             );
                }
            }
export default Nav;       