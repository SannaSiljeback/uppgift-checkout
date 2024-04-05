const initStripe = require("../stripe");

const createCheckoutSession = async (req, res) => {

  const cart = req.body;

  const stripe = initStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer: "cus_PruslmAylNykoy", //stripe ID här som ej är hårdkodat
    line_items: cart.map(item => {
      return {
        price: item.product,
        quantity: item.quantity,
      }
    }), //kundvagnen som kommer från clienten ska matcha det vi skickar ut från stripe och förmodlingen behöver vi göra en map emellan
    success_url: "http://localhost:5173/confirmation",
    cancel_url: "http://localhost:5173", //ska denna också gå någonstans??
  });

    res.status(200).json({url: session.url, sessionId: session.id});
    //spara session id i localstorgae för att sen när man kommer till confirmation sidan, hämta ut det från localstorgae hämta ut sessionen också har vi massa info, det blir flödet
};

const verifySession = async (req, res) => {
  const stripe = initStripe();
  const sessionId = req.body.sessionId;
 
  
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  console.log(session);
};

module.exports = { createCheckoutSession, verifySession };
