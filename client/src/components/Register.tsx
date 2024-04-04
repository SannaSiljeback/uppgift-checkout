interface IRegisterProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
};

export const Register = () => {
  //två state
    const handleRegister = async () => {
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
    

    return (
        <>
        <input type="text" />
        <input type="text" />
        <button onClick={handleRegister}>registrera</button>
        </>
    );
  };