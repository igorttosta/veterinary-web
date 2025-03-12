/* eslint-disable @next/next/no-img-element */
"use client";

import { useProducts } from "@/hooks/useProducts";
import { useTheme } from "next-themes";
import { useCartStore } from "@/store/cartStore";
import { lightTheme, darkTheme } from "@/styles/theme";

export default function ProductList() {
    const { products, loading } = useProducts();
    const { theme } = useTheme();
    const { addToCart } = useCartStore();
    
    const currentTheme = theme === "light" ? lightTheme : darkTheme;

    if (loading) return <p className="text-center text-gray-500">Carregando produtos...</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
                <div 
                    key={product.id} 
                    className="border shadow-md rounded-lg p-4"
                    style={{
                        backgroundColor: currentTheme.background,
                        borderColor: currentTheme.border,
                        color: currentTheme.text
                    }}
                >
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-40 object-cover rounded-md"
                        style={{ borderColor: currentTheme.border }}
                    />
                    <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                    <p className="text-sm" style={{ color: currentTheme.textMuted }}>{product.description}</p>
                    <p className="font-bold mt-1" style={{ color: currentTheme.primary }}>
                        R$ {product.price.toFixed(2)}
                    </p>
                    <button 
                        className="mt-2 px-4 py-2 rounded-md w-full"
                        style={{
                            backgroundColor: currentTheme.primary,
                            color: "#fff",
                            borderColor: currentTheme.border
                        }}
                        onClick={() => addToCart({ ...product, id: String(product.id) })}
                    >
                        Adicionar ao Carrinho
                    </button>
                </div>
            ))}
        </div>
    );
}