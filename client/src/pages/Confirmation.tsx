import { useEffect, useState } from "react";

export const Confirmation = () => {
  const [verified, setVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // inte perfekt att loading står hela tiden, men är så just nu

  useEffect(() => {
    if (!verified) {
        console.log("verified körs");
        
      const verifySession = async () => {
        console.log("hoppar in i funktionen");

        let sessionId;

        const dataFromLs = localStorage.getItem("sessionId");
        
        if (dataFromLs) {
          sessionId = JSON.parse(dataFromLs);
        }

        const response = await fetch(
          "http://localhost:3001/payments/verify-session",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ sessionId }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          setVerified(data.verified);
          setIsLoading(false);
        }
      };
      verifySession();
    }
  }, [verified]);

  return (
    <>
      <h1>{verified && !isLoading ? "TACK FÖR DITT KÖP!!" : "loading...."}</h1>
    </>
  );
};
