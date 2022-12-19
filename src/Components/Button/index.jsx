import { Component } from "react";
import "./style.css"
class Button extends Component{
    render(){
        return <button className='button-1-book'>{this.props.children}</button>
    }
} 
export default Button;