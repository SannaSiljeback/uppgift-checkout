import { useEffect, useState } from "react";
import { Payment } from "../components/Payment";
import { Register } from "../components/Register";
import { Login } from "../components/Login";
import { Logout } from "../components/Logout";
import { Products } from "../components/Products";

export const Home = () => {
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

  //rendera in produkterna

  //payment kommer vara inne i en kundkorg, kassa/kundkorg ska visas här

  return (
    <>
      <h1>Kaffeshoppen</h1>
      {!user ? <Login setUser={setUser} /> : <Logout setUser={setUser} />}
      {!user && <Register />}
      <Payment />
      <Products />
    </>
  );
};
