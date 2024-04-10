import { useState } from "react";
import "../styles/login.css";
import { CiLogin } from "react-icons/ci";

interface ILoginProps {
  setUser: (user: string) => void;
}

export const Login = ({ setUser }: ILoginProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();

    if (response.status === 200) {
      setUser(data);
    } else {
      setErrorMessage("Wrong email and/or password");
      setUser("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <input
        type="text"
        value={email}
        onChange={handleChange}
        placeholder="Email"
        name="email"
      />
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
        name="password"
      />
      <div onClick={handleLogin} className="login">
        <CiLogin />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
