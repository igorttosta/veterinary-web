"use client";

import React from "react";
import { useTheme } from "next-themes";
import CloseIcon from '@mui/icons-material/Close';
import { lightTheme, darkTheme } from "../../styles/theme";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function SideRbar({ isOpen, onClose, title, children }: SidebarProps) {
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
                <h2 className="text-lg font-semibold">{title}</h2>
                <CloseIcon onClick={onClose} style={{ color: currentTheme.text }} className="cursor-pointer" />
            </div>

            <div className="p-4 space-y-4">{children}</div>
        </div>
    );
}