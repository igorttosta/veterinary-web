"use client";

import { NAVIGATION } from "../navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import { lightTheme, darkTheme } from "../../styles/theme";
import { useTheme } from "next-themes";
import { useSidebarStore } from "../../store/useSidebarStore";

export default function Sidebar() {
    const { theme } = useTheme();
    const pathname = usePathname();
    const currentTheme = theme === "dark" ? darkTheme : lightTheme;
    const sidebarItems = NAVIGATION.sidebar;
    
    const { isSidebarOpen } = useSidebarStore();

    return (
        <aside
            className={`p-4 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-20"} h-full`}
            style={{ backgroundColor: currentTheme.sidebar, color: currentTheme.text }}
        >
            <nav>
                <ul className="space-y-2">
                    {sidebarItems.map((item, index) => {
                        const isActive = pathname === `/${item.segment}`;

                        if (item.kind === "divider") {
                            return <hr key={index} className="my-2" style={{ borderColor: currentTheme.border }} />;
                        }

                        return (
                            <li key={index}>
                                <Tooltip title={!isSidebarOpen ? item.title : ""} placement="right">
                                    <Link
                                        href={`/${item.segment}`}
                                        className="flex items-center p-2 rounded-md transition cursor-pointer"
                                        style={{
                                            backgroundColor: isActive ? currentTheme.hover : "transparent",
                                            color: currentTheme.text,
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = darkTheme.hover)}
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.backgroundColor = isActive ? currentTheme.hover : "transparent")
                                        }
                                    >
                                        {item.icon}
                                        {isSidebarOpen && <span className="ml-2">{item.title}</span>}
                                    </Link>
                                </Tooltip>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}