/* eslint-disable @next/next/no-img-element */
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartStore } from "../../store/cartStore";

export default function CartItemList() {
    const { cart, removeFromCart } = useCartStore();

    return (
        <div className="space-y-4">
            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-2">
                        <div className="flex items-center gap-2">
                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.quantity}x R$ {item.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <DeleteIcon onClick={() => removeFromCart(item.id)} />
                    </div>
                ))
            )}
        </div>
    );
}