import { useEffect, useState } from "react";

const App = () => {
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

  const register = async () => {
    const response = await fetch("http://localhost:3001/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "fakeEmail2@fake.com",
        password: "fakePassword2",
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const login = async () => {
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: "fakeEmail2@fake.com",
        password: "fakePassword2",
      }),
    });
    const data = await response.json();

    if (response.status === 200) {
      setUser(data);
    } else {
      setUser("");
    }
  };

  const logout = async () => {
    const response = await fetch("http://localhost:3001/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    if (response.status === 200) {
      setUser("");
    }
  };

  return (
    <>
      <h1>Webbshoppen</h1>
      <h2>{user ? "inloggad" + user : "utloggad"}</h2>
      <button onClick={register}>registrera</button>
      <button onClick={login}>logga in</button>
      <button onClick={logout}>logga ut</button>
    </>
  );
};

export default App;
