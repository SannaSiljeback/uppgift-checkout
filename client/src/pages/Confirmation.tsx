import { useState } from "react";

export const Confirmation = () => {

    const [verified, setVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // inte perfekt att loading står hela tiden, men är så just nu

    return (
        <>
        <h1>{verified && !isLoading ? "TACK FÖR DITT KÖP!!" : "loading...."}</h1>
        </>
    );
};