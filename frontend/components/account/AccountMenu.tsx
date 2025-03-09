"use client";

import React from "react";
import { Box, Menu } from "@mui/material";
import { useTheme } from "next-themes";
import { lightTheme, darkTheme } from "../../styles/theme";
import AccountButton from "./AccountButton";
import MenuItems from "./MenuItems";

export default function AccountMenu() {
    const { theme } = useTheme();
    const currentTheme = theme === "dark" ? darkTheme : lightTheme;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        handleClose();
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        handleClose();
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <AccountButton onClick={handleClick} />
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            backgroundColor: currentTheme.sidebar,
                            color: currentTheme.text,
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: currentTheme.sidebar,
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItems isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} onClose={handleClose} />
            </Menu>
        </Box>
    );
}