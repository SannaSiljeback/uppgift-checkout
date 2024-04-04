interface ILogoutProps {
  setUser: (user: string) => void;
}

export const Logout: React.FC<ILogoutProps> = ({setUser}) => {
    const handleLogout = async () => {
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
        <button onClick={handleLogout}>logga ut</button>
        </>
    );
};