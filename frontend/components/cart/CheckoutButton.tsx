export default function CheckoutButton() {
    const handleCheckout = () => {
        alert("Finalizando compra...");
    };

    return (
        <button 
            onClick={handleCheckout} 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700 transition"
        >
            Finalizar Compra
        </button>
    );
}