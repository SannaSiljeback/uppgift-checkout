interface ILoginProps {
  setUser: (user: string) => void;
}

export const Login: React.FC<ILoginProps> = ({setUser}) => {
    const handleLogin = async () => {
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

    return (
        <>
        <button onClick={handleLogin}>logga in</button>
        </>
    );
};