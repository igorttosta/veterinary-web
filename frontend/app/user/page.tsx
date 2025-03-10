"use client";

import SlotPropsSignIn from "@/components/credencials/login";
import DashboardLayout from "@/components/DashboardLayout";

export default function UserPage() {
    return (
            <DashboardLayout>
                <SlotPropsSignIn />
            </DashboardLayout>
        );
}