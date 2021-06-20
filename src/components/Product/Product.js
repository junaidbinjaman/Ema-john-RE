import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, stock, key } = props.product;
  const { handleAddProduct } = props;

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>{" "}
      <div>
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>{" "}
        </h4>{" "}
        <br />
        <p>
          <small> By: </small> {seller}{" "}
        </p>{" "}
        <p> $ {price} </p> <br />
        <p>
          <small>
            {" "}
            only {stock}
            left in stock - order soon{" "}
          </small>{" "}
        </p>{" "}
        {props.showAddToCart && (
          <button
            className="main-button"
            onClick={() => handleAddProduct(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart{" "}
          </button>
        )}
      </div>{" "}
    </div>
  );
};

export default Product;
