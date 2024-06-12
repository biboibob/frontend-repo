"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";

type Props = {
  children: any;
};

function Layout({ children }: Props) {
  const pathname = usePathname();
  const publicRoute = ["/", "/register"];

  return (
    <div className="flex flex-col h-full bg-white overflow-x-hidden">
      {publicRoute.some((val: any) => val === pathname) ? (
        <>{children}</>
      ) : (
        <div className="flex flex-col h-full">
          <Header />
          {children}
        </div>
      )}
    </div>
  );
}

export default Layout;
