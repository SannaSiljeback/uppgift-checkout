import { useEffect, useState } from "react";
import { Payment } from "../components/Payment";
import { Register } from "../components/Register";
import { Login } from "../components/Login";
import { Logout } from "../components/Logout";

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


    return (
        <>
        <h1>Kaffeshoppen</h1>
        <h2>{user ? "inloggad" + user : "utloggad"}</h2>
        <Register/>
        <Login setUser={setUser} />
        <Logout setUser={setUser}/>
        <Payment/>
        </>
    );
};