import React from "react";
import "./Checkout.css";
import Subtotal from "./Substotal/Subtotal";
import { useStateValue } from "../../Context/StateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("User", user);

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user.email}</h3>
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping basket is empty</h2>
            </div>
          ) : (
            <div>
              <h2 className="checkout_title">Your Shopping Basket</h2>

              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {basket.length > 0 && (
        <div className="checkout_right"> 
        <Subtotal/></div>
      )}
    </div>
  );
}

export default Checkout;
