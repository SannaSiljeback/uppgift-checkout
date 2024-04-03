export const Register = () => {
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
        <button onClick={handleRegister}>registrera</button>
        </>
    );
  };