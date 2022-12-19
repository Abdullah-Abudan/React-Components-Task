import { Component } from "react";
import "./style.css"
class NumberDiv extends Component{
    render(){
        return (
            <div className="mainDivNum">
            <img src={this.props.img} alt="icon" />
            <div>
                <span className="incrementNumber">{this.props.num}</span> <br />
                <span className="span-2">{this.props.descr}</span>
            </div>
    </div>
        )
    }
} 
export default NumberDiv;