import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    stock: number;
}

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await fetch("/mocks/products.json");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Erro ao carregar produtos:", error);
        } finally {
            setLoading(false);
        }
        };

        fetchProducts();
    }, []);

    return { products, loading };
};
