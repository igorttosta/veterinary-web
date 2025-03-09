"use client";

import React from "react";
import { MenuItem, ListItemIcon, Divider } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import { NAVIGATION } from "../navigation";
import { useTheme } from "next-themes";
import { lightTheme, darkTheme } from "../../styles/theme";

interface MenuItemsProps {
    isLoggedIn: boolean;
    onLogin: () => void;
    onLogout: () => void;
    onClose: () => void;
}

export default function MenuItems({ isLoggedIn, onLogin, onLogout, onClose }: MenuItemsProps) {
    const { theme } = useTheme();
    const currentTheme = theme === "dark" ? darkTheme : lightTheme;

    return (
        <>
            {NAVIGATION.menu.map((item, index) =>
                item.kind === "divider" ? (
                    <Divider key={index} style={{ borderColor: currentTheme.border }} />
                ) : (
                    <MenuItem key={index} onClick={onClose} style={{ color: currentTheme.text }}>
                        <ListItemIcon style={{ color: currentTheme.text }}>{item.icon}</ListItemIcon>
                        {item.title}
                    </MenuItem>
                )
            )}
            <Divider style={{ borderColor: currentTheme.border }} />
            <MenuItem onClick={isLoggedIn ? onLogout : onLogin} style={{ color: currentTheme.text }}>
                <ListItemIcon style={{ color: currentTheme.text }}>
                    {isLoggedIn ? <Logout fontSize="small" /> : <Login fontSize="small" />}
                </ListItemIcon>
                {isLoggedIn ? "Logout" : "Login"}
            </MenuItem>
        </>
    );
}
