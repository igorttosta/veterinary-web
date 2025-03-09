"use client";

import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../styles/theme";

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();
    const [muiTheme, setMuiTheme] = useState(createTheme({ palette: { mode: "dark" } }));
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const selectedTheme = theme === "light" ? lightTheme : darkTheme;

        setMuiTheme(
        createTheme({
            palette: {
            mode: theme === "light" ? "light" : "dark",
            primary: { main: selectedTheme.primary },
            secondary: { main: selectedTheme.secondary },
            background: { default: selectedTheme.background },
            text: {
                primary: selectedTheme.text,
                secondary: selectedTheme.hover,
            },
            },
        })
        );
    }, [theme, mounted]);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <MUIThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
        </MUIThemeProvider>
    );
}
