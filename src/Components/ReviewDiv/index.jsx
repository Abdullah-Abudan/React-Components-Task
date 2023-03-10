import { Component } from "react";
import "./style.css";
class ReviewDiv extends Component {
  render() {
    return (
      <div className="mainReview-div">
        <div className="subReview-div">
          <img
            src={this.props.img}
            alt=""
            style={{ display: "flex", marginRight: "20px" }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
            className="subReview-div-1"
          >
            <p>{this.props.title}</p>
            <div style={{ display: "flex" }}>
              <span>
                <img src={this.props.imgStar} alt="" />
              </span>
              <span>
                <img src={this.props.imgStar} alt="" />
              </span>
              <span>
                <img src={this.props.imgStar} alt="" />
              </span>
              <span>
                <img src={this.props.imgStar} alt="" />
              </span>
              <span>
                <img src={this.props.imgStar} alt="" />
              </span>
            </div>
          </div>
        </div>
        <p>{this.props.descr}</p>
      </div>
    );
  }
}
export default ReviewDiv;
