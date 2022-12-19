import { Component } from "react";
import "./style.css"
class BlogsDiv extends Component{
    render(){
        return (
            <div className="BlogsDiv">
            <img src={this.props.img} alt="" />
            <h2>{this.props.main_descr}</h2>
            <p>{this.props.sub_descr} </p>
            <span style={{borderBottom:"2px solid #FFCE6D"}}>{this.props.readM}</span>
        </div>
        )
    }
} 
export default BlogsDiv;