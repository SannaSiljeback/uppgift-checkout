const initStripe = require("../stripe");
const fs = require("fs").promises;

const createCheckoutSession = async (req, res) => {
  const cart = req.body;

  const stripe = initStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer: "cus_PruslmAylNykoy", //stripe ID här som ej är hårdkodat i framtiden
    line_items: cart.map((item) => {
      return {
        price: item.product.default_price.id,
        quantity: item.quantity,
      };
    }), //kundvagnen som kommer från clienten ska matcha det vi skickar ut från stripe och förmodlingen behöver vi göra en map emellan
    success_url: "http://localhost:5173/confirmation",
    cancel_url: "http://localhost:5173",
  });

  res.status(200).json({ url: session.url, sessionId: session.id });
  //spara session id i localstorgae för att sen när man kommer till confirmation sidan, hämta ut det från localstorgae hämta ut sessionen också har vi massa info, det blir flödet
};

const verifySession = async (req, res) => {
  const stripe = initStripe();

  const sessionId = req.body.sessionId;

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status === "paid") {
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

    const order = {
      orderNumber: Math.floor(Math.random() * 1000000),
      customerName: session.customer_details.email,
      products: lineItems.data,
      total: session.amount_total,
      date: new Date(),
    };


    const orders = JSON.parse(await fs.readFile("./data/orders.json"));
    orders.push(order);
    await fs.writeFile("./data/orders.json", JSON.stringify(orders, null, 4)); //fredriks kod

    res.status(200).json({ verified: true });
  }

  console.log(session);
};

module.exports = { createCheckoutSession, verifySession };
