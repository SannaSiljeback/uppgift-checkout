const getProducts = async (req, res) => {
    //get anrop?
    const stripe = initStripe();

    try {
        const products = await stripe.products.list({
            limit: 3,
          });

        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(400).json("Can not fetch products");
    }
 
};

module.exports = { getProducts };