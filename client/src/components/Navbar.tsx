import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const { cart } = useCart();

  //om all quantity ska visas så ska det vara en reduce på p taggen med cart.length eller något liknande
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <div className="cart">
              <BsCart2 />
              <p>{cart.length}</p>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};
