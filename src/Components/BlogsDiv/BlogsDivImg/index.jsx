import { Component } from "react";
import "./style.css"
class BlogsDivImg extends Component{
    render(){
        return (
            <div className="BlogsDivImg">
            <h2>{this.props.main_descr}</h2>
            <p>{this.props.sub_descr} </p>
            <span style={{borderBottom:"2px solid #FFCE6D"}}>{this.props.readM}</span>
            <img src={this.props.img} alt="" style={{paddingTop:"10px"}} />
        </div>
        )
    }
} 
export default BlogsDivImg;