import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Register } from "./Register";

import { BsCart2 } from "react-icons/bs";
import "../styles/navbar.css";
import { useCart } from "../context/CartContext";
import { Cart } from "./Cart";

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


  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  }

  const [showRegister, setShowRegister] = useState(false);

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  }

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  }


  //om all quantity ska visas så ska det vara en reduce på p taggen med cart.length eller något liknande
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {!user ? (
              <button onClick={toggleLogin}>Visa login</button>
            
            ) : (
              <>
                {" "}
                <Logout setUser={setUser} />{" "}
              </>
            )}
          </li>
          {showLogin && <Login setUser={setUser} />}

          <li>{!user && <button onClick={toggleRegister}>Visa regrister</button> }</li>
          {showRegister && <Register />}

          <li>
            {user && (
              <div className="cart" onClick={toggleCart}>
              <BsCart2 />
                <p>{cart.length}</p>
            </div>
            )}
          </li>
          {showCart && <Cart />}

        </ul>
      </nav>
      
    </>
  );
};
