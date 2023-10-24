import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/themeprovider";
import DesignerContextProvider from "@/components/context/DesignerContext";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ToggleTheme";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <DesignerContextProvider>
            <ThemeProvider
              attribute="data-theme"
              defaultTheme="dark"
              enableSystem={false}
              storageKey="notes-theme"
            >
              <ModeToggle></ModeToggle>
              {children}
            </ThemeProvider>
          </DesignerContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
