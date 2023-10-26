import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return <div className="flex w-full flex-col flex-grow mx-6 lg:mx-10">{children}</div>;
}

export default layout;
