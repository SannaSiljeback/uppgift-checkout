interface ILoginProps {
  setUser: (user: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

export const Login = ({setUser, email, setEmail, password, setPassword}: ILoginProps) => {
  //state för email password

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
          setUser("");
        }
      };

      const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      };
    
      const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };

    return (
        <>
        <input type="text" value={email} onChange={handleEmail} placeholder="Email" />
        <input type="text" value={password} onChange={handlePassword} placeholder="Password"/>
        <button onClick={handleLogin}>logga in</button>
        </>
    );
};