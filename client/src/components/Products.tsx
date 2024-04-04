import { useEffect, useState } from "react";

interface IProduct {
    id: string;
    name: string;
    price: string;
    images: string[];
}

export const Products = () => {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3001/products");
            const data = await response.json();
            console.log(data);   

            const productsList = data.data; 
            
            setProducts(productsList);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <h2>Products</h2>
        {products.map(product => (
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                {product.images && product.images.map((image, index) => (
                    <img key={index} src={image} alt={product.name} style={{ width: "200px" }} />

                 ))}
            </div>
        ))}
        </>
    );
};