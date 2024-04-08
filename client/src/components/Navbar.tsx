import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Register } from "./Register";

import { BsCart2 } from "react-icons/bs";
import "../styles/navbar.css";
import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const { cart } = useCart();

  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const authorize = async () => {
      const response = await fetch("http://localhost:3001/api/auth/authorize", {
        credentials: "include",
      });

      const data = await response.json();
      if (response.status === 200) {
        setUser(data);
      } else {
        setUser("");
      }
    };
    authorize();
  }, []);

  //om all quantity ska visas så ska det vara en reduce på p taggen med cart.length eller något liknande
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {!user ? ( <Login setUser={setUser} /> ) : ( <> <Logout setUser={setUser} /> </> )}
          </li>
          <li>{ !user && <Register /> }</li>
          {user && (
          <li>
            <NavLink to="/cart">
            <div className="cart">
              <BsCart2 />
              <p>{cart.length}</p>
            </div>
            </NavLink>
          </li>
          )}
        </ul>
      </nav>
    </>
  );
};
