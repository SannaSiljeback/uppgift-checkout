const initStripe = require("../stripe");

const createCheckoutSession = async (req, res) => {
  const stripe = initStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: "price_1P1RsoArIpoMnMBEBpZhpawg",
        quantity: 1,
      },
    ],
    success_url: "http://localhost:5173", //http://localhost:5173/confirmation, vill hamna på någon slags confirmayion sida 
    cancel_url: "http://localhost:5173", //samma med denna?
  });

    res.status(200).json({url: session.url});
};

module.exports = { createCheckoutSession };
