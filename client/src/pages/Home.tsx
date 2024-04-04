import { useEffect, useState } from "react";
import { Payment } from "../components/Payment";
import { Register } from "../components/Register";
import { Login } from "../components/Login";
import { Logout } from "../components/Logout";

export const Home = () => {
  const [user, setUser] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

  //log in och log out komponent ist för strängarna

  //rendera in produkterna

  return (
    <>
      <h1>Kaffeshoppen</h1>
      <h2>{user ? "inloggad" + user : "utloggad"}</h2>
      <Register />
      <Login
        setUser={setUser}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <Logout setUser={setUser} />
      <Payment />
    </>
  );
};
