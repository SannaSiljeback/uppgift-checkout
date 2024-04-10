import { useCart } from "../context/CartContext";
import { Payment } from "./Payment";
import { AiOutlineDelete } from "react-icons/ai";
import "../styles/cart.css";

export const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <>
    <div className="cartContainer">
      <h2>Your cart</h2>
      <ul>
        {cart.map((product) => (
          <div key={product.product.id}>
            <h3>{product.product.name}</h3>
            <img
              src={product.product.images[0]}
              alt={product.product.name}
              style={{ width: "80px" }}
            />
            <p>
              {product.quantity} st -{" "}
              {product.product.default_price.unit_amount / 100} SEK
            </p>
            <div onClick={() => removeFromCart(product.product)} className="delete">
              <AiOutlineDelete />
            </div>
          </div>
        ))}
      </ul>

      <Payment />
      </div>
    </>
  );
};
