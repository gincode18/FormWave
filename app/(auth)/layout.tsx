import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">

        <div className="flex gap-4 items-center">

        </div>
      </nav>
      <main className="flex w-full flex-grow h-full items-center justify-center">{children}</main>
    </div>
  );
}

export default Layout;