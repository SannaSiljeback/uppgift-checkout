import { useEffect, useState } from "react";
import { IProduct, useCart } from "../context/CartContext";

export const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const fetchedData = await response.json();
        console.log(fetchedData);

        setProducts(fetchedData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          {/* <p>{product.description}</p> */}
          <div>
            <img
              src={product.images[0]}
              alt={product.name}
              style={{ width: "200px" }}
            />
          </div>
          <span>{product.default_price.unit_amount / 100} SEK</span>
          <button onClick={() => addToCart(product)}>köp kaffet!</button>
        </div>
      ))}
    </>
  );
};
