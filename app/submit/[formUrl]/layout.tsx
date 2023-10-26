import Logo from "@/components/Logo";
import React, { ReactNode } from "react";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ToggleTheme";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen h-screen">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Logo size=" w-20 h-20" />
        <div className="font-bold text-3xl bg-gradient-to-r  from-primary  via-accent to-secondary text-transparent bg-clip-text hover:cursor-pointer">
          Formwave
        </div>
        <div className="flex gap-4 items-center">
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
}

export default Layout;
