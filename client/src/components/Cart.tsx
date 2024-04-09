import { useCart } from "../context/CartContext";
import { Payment } from "./Payment";

export const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <h2>din kundkorg</h2>
      <ul>
        {cart.map((product) => (
          <div key={product.product.id}>
            <h3>{product.product.name}</h3>
            {/* <p>{product.description}</p> */}
            <img
              src={product.product.images[0]}
              alt={product.product.name}
              style={{ width: "200px" }}
            />
            <p>
              {product.quantity} st -{" "}
              {product.product.default_price.unit_amount / 100} SEK
            </p>
            <button onClick={() => removeFromCart(product.product)}>ta bort</button>
          </div>
        ))}
      </ul>

      <Payment />
    </>
  );
};
