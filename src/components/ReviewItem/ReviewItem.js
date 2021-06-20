import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const reviewItemStyle = {
    borderBottom: "1px solid lightgray",
    textAlign: "left",
    marginBottom: "5px",
    paddingBottom: "15px",
    marginLeft: "200px",
  };
  const { name, quantity } = props.product;
  return (
    <div style={reviewItemStyle} className="review-item">
      <h4 className="product-name">{name}</h4>
      <p>{quantity}</p>
      <button className="main-button">Remove</button>
    </div>
  );
};

export default ReviewItem;
