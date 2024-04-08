const initStripe = require("../../stripe");

const getProducts = async (req, res) => {
  const stripe = initStripe();

  try {
    const products = await stripe.products.list({
      limit: 8,
      expand: ["data.default_price"],
    });

    res.status(200).json(products);
  } catch (error) {
    console.error("error", error);
    res.status(400).json(error);
  }
};

module.exports = { getProducts };
