import { useCart } from "../context/CartContext";
import { BsCart2 } from "react-icons/bs";
import "../styles/cart.css";

export const Payment = () => {
  const { cart } = useCart();

  const handlePayment = async () => {
    const response = await fetch(
      "http://localhost:3001/payments/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      }
    );
    const data = await response.json();
    console.log(data);
    localStorage.setItem("sessionId", JSON.stringify(data.sessionId));
    window.location = data.url;
  };

  return (
    <>
      <div className="cart" onClick={handlePayment}>
        <BsCart2 />
        <p>{cart.length}</p>
      </div>
    </>
  );
};
