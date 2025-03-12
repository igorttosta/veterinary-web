import SideRbar from "./SideRbar";
import CartItemList from "../cart/CartItemList";
import CartTotal from "../cart/CartTotal";
import CheckoutButton from "../cart/CheckoutButton";

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
    return (
        <SideRbar isOpen={isOpen} onClose={onClose} title="Carrinho">
            <CartItemList />
            <CartTotal />
            <CheckoutButton />
        </SideRbar>
    );
}