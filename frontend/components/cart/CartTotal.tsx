import { useCartStore } from "../../store/cartStore";

export default function CartTotal() {
    const { cart } = useCartStore();
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="flex justify-between items-center font-semibold text-lg mt-4 p-2 border-t">
            <span>Total:</span>
            <span>R$ {total.toFixed(2)}</span>
        </div>
    );
}
