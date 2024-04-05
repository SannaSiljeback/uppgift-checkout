import { useEffect, useState } from "react";

interface IProduct {
    id: string;
    name: string;
    images: string[];
    price: number;

    default_price: {
        unit_amount: number;
    };
}

export const Products = () => {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3001/products");
            const fetchedData = await response.json();
            console.log(fetchedData);   

            const productsList: IProduct[] = fetchedData.data.map((product: IProduct) => ({
                ...product,
                price: product.default_price.unit_amount / 100 // Stripe använder cent standardenhet, delar med 100 för att få priset i SEK
            }));
            
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
                <p>{product.price} SEK</p>
                {product.images && product.images.map((image, index) => (
                    <img key={index} src={image} alt={product.name} style={{ width: "200px" }} />

                 ))}
            </div>
        ))}
        </>
    );
};