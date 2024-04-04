export const Payment = () => {

    const handlePayment = async () => {
        const response = await fetch("http://localhost:3001/payments/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([{
            product: "price_1P1RsoArIpoMnMBEBpZhpawg", //blir inte hårdkodat sen, ser ut olika beroende på hur man gjort sin kundvagn
            quantity: 2
          },
          {
            product: "price_1P1RrTArIpoMnMBEgxj5JeiP", //blir inte hårdkodat sen
            quantity: 1
          }
        ])
        })
        const data = await response.json();
        console.log(data);
        window.location = data.url;
        
      };

    return (
        <>
            <button onClick={handlePayment}>Köp</button>
        </>
    );
}