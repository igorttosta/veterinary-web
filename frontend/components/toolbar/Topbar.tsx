"use client";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggle from "../ui/theme-toggle";
import { lightTheme, darkTheme } from "../../styles/theme";
import { useTheme } from "next-themes";
import AccountMenu from "../account/AccountMenu";
import CartSidebar from "../cart/CartSidebar";

interface TopbarProps {
    toggleSidebar: () => void;
}

export default function Topbar({ toggleSidebar }: TopbarProps) {
    const { theme } = useTheme();
    const currentTheme = theme === "dark" ? darkTheme : lightTheme;
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <header
                className="p-4 flex justify-between items-center w-full"
                style={{ backgroundColor: currentTheme.navbar, color: currentTheme.text }}
            >
                <div className="flex items-center gap-4">
                    <IconButton onClick={toggleSidebar} style={{ color: currentTheme.text }}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <div className="flex flex-row gap-4 pr-5 items-center">
                    <ThemeToggle />
                    <IconButton onClick={() => setIsCartOpen(true)} style={{ color: currentTheme.text }}>
                        <ShoppingCartIcon />
                    </IconButton>
                    <AccountMenu />
                </div>
            </header>
            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}