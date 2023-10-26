import Logo from "@/components/Logo";
import { UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ToggleTheme";
import { ThemeProvider } from "@/components/themeprovider";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Link href={"/"}>
          <Logo size=" w-20 h-20" />
        </Link>
        <Link
          href={"/"}
          className="font-bold text-3xl bg-gradient-to-r  from-primary  via-accent to-secondary text-transparent bg-clip-text hover:cursor-pointer"
        >
          Formwave
        </Link>
        <div className="flex gap-4 items-center">
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
      <main className="flex w-full flex-grow">
        {" "}
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dracula"
          enableSystem={false}
          storageKey="notes-theme"
        >
          <ModeToggle></ModeToggle>
          {children}
        </ThemeProvider>
      </main>
    </div>
  );
}

export default Layout;
