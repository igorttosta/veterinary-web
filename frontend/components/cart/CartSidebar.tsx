"use client";

import React from "react";
import { useTheme } from "next-themes";
import { lightTheme, darkTheme } from "../../styles/theme";

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
    const { theme } = useTheme();
    const currentTheme = theme === "dark" ? darkTheme : lightTheme;

    return (
        <div
            className={`fixed top-0 right-0 h-full w-80 shadow-lg transition-transform transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ 
                zIndex: 1000, 
                backgroundColor: currentTheme.sidebar, 
                color: currentTheme.text, 
                borderLeft: `1px solid ${currentTheme.border}` 
            }}
        >
            <div 
                className="p-4 flex justify-between items-center border-b"
                style={{ borderColor: currentTheme.border }}
            >
                <h2 className="text-lg font-semibold">Carrinho</h2>
                <button onClick={onClose} style={{ color: currentTheme.text }}>
                    ✕
                </button>
            </div>
            <div className="p-4">
                <p>Seu carrinho está vazio.</p>
            </div>
        </div>
    );
}
