import { create } from "zustand";

interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    cart: CartItem[];
    addToCart: (product: Omit<CartItem, "quantity">) => void;
    removeFromCart: (id: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    
    addToCart: (product) =>
        set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id);

        if (existingItem) {
            return {
            cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
            };
        }

        return {
            cart: [...state.cart, { ...product, quantity: 1 }],
        };
        }),

    removeFromCart: (id) =>
        set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
        })),
}));
