"use client";

import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTheme } from "next-themes";
import { lightTheme, darkTheme } from "../../styles/theme";

interface AccountButtonProps {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function AccountButton({ onClick }: AccountButtonProps) {
    const { theme } = useTheme();
    const currentTheme = theme === "dark" ? darkTheme : lightTheme;

    
    return (
        <Tooltip title="Configurações da conta">
            <IconButton
                onClick={onClick}
                size="small"
                aria-controls="account-menu"
                aria-haspopup="true"
                style={{ color: currentTheme.text }}
            >
                <AccountCircleIcon />
            </IconButton>
        </Tooltip>
    );
}
