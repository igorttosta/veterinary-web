/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useTheme } from "next-themes";
import { lightTheme, darkTheme } from "@/styles/theme";
import DeleteIcon from '@mui/icons-material/Delete';

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    price: number;
    description?: string;
    quantity?: number;
    showRemove?: boolean;
    onAction: () => void;
    actionLabel: string;
}

export default function ProductCard({
    id,
    name,
    image,
    price,
    description,
    quantity,
    showRemove = false,
    onAction,
    actionLabel
}: ProductCardProps) {
    const { theme } = useTheme();
    const currentTheme = theme === "light" ? lightTheme : darkTheme;

    return (
        <div 
            className="border shadow-md rounded-lg p-4 flex items-center justify-between gap-4"
            style={{
                backgroundColor: currentTheme.background,
                borderColor: currentTheme.border,
                color: currentTheme.text
            }}
        >
            <img 
                src={image} 
                alt={name} 
                className="w-16 h-16 object-cover rounded-md"
                style={{ borderColor: currentTheme.border }}
            />
            <div className="flex-1">
                <h2 className="text-lg font-bold">{name}</h2>
                {description && <p className="text-sm" style={{ color: currentTheme.textMuted }}>{description}</p>}
                <p className="font-bold mt-1" style={{ color: currentTheme.primary }}>
                    R$ {price.toFixed(2)} {quantity ? `x ${quantity}` : ""}
                </p>
            </div>
            <button 
                className="px-3 py-1 rounded-md"
                style={{
                    backgroundColor: currentTheme.primary,
                    color: "#fff",
                    borderColor: currentTheme.border
                }}
                onClick={onAction}
            >
                {actionLabel}
            </button>
            {showRemove && <DeleteIcon onClick={onAction} className="cursor-pointer text-red-500" />}
        </div>
    );
}