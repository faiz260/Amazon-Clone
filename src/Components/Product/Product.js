import React from "react";
import "./Product.css";
import {useStateValue} from "../../Context/StateProvider"; 

function Product({ id, title, price, rating, image }) {

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image
      }
    });
  }

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img className="product-img" src={image} alt="" />
      <button onClick={addToBasket} >Add to basket</button>
    </div>
  );
}

export default Product;
