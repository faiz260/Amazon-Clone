import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../../Context/StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div>
      <div className="checkout-product">
      <img className="checkoutProduct-img" src={image} alt="" />
        <div className="checkoutProduct-info">
          <p className="checkoutProduct-title">{title}</p>
          <p className="checkoutProduct-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
        </div>
        {!hideButton &&(
        <button onClick={removeFromBasket}>Add to basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
