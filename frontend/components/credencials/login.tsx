/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Checkbox from "@mui/material/Checkbox";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/authStore";

const providers = [{ id: "credentials", name: "Email and Password" }];

export default function SlotPropsSignIn() {
    const theme = useTheme();
    const { login } = useAuthStore();
    const router = useRouter();

    const handleSignIn = (provider: any, formData: FormData) => {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (email === "user@example.com" && password === "password123") {
            login({ email, name: "Mock User" });  
            router.push("/"); 
        } else {
            alert("Email ou senha incorretos!");
        }
    };

    return (
        <AppProvider theme={theme}>
            <SignInPage
                signIn={handleSignIn}
                slotProps={{
                    emailField: { variant: "standard", autoFocus: false },
                    passwordField: { variant: "standard" },
                    submitButton: { variant: "outlined" },
                    rememberMe: {
                        control: (
                            <Checkbox
                                name="tandc"
                                value="true"
                                color="primary"
                                sx={{ padding: 0.5, "& .MuiSvgIcon-root": { fontSize: 20 } }}
                            />
                        ),
                        color: "textSecondary",
                        label: "I agree with the T&C",
                    },
                }}
                providers={providers}
            />
        </AppProvider>
    );
}