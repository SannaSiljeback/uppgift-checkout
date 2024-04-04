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
    success_url: "http://localhost:5173/confirmation",
    cancel_url: "http://localhost:5173", //ska denna också gå någonstans??
  });

    res.status(200).json({url: session.url});
};

module.exports = { createCheckoutSession };
