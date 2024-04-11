const Stripe = require("stripe");

const initStripe = () => {
  const apiKey = process.env.STRIPE_API_KEY;
  if (!apiKey) {
    throw new Error("Could not find any Stripe API key");
  }

  return new Stripe(apiKey, { apiVersion: "2023-10-16" });
};

module.exports = initStripe;
