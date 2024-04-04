const initStripe = require("../../stripe");

const getProducts = async (req, res) => {
    //get anrop?
    const stripe = initStripe();

    try {
        const products = await stripe.products.list({
            limit: 8,
          });

        res.status(200).json(products);
    } catch (error) {
        console.error("error",error);
        res.status(400).json(error);
    }
 
};

module.exports = { getProducts };