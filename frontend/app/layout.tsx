import "./globals.css";
import { Orbitron, Edu_NSW_ACT_Foundation } from "next/font/google";
import type { Metadata } from "next";
import Theme from "../context/theme-provider";
import MuiThemeProvider from "../context/mui-theme-provider";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Igor Tosta | Full-stack developer | Personal portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
});

const eduNSW = Edu_NSW_ACT_Foundation({
  subsets: ["latin"],
  variable: "--font-edu-nsw",
  weight: ["400"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${eduNSW.variable} transition-all duration-300`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Theme>
            <MuiThemeProvider>
                <main>{children}</main>
            </MuiThemeProvider>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}