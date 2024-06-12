"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./Header";

//Redux
import { useSelector } from "react-redux";

type Props = {
  children: any;
};

function Layout({ children }: Props) {
  // const idUser = useSelector((state: any) => state.generalReducer.UserData.id);

  // const router = useRouter();
  const pathname = usePathname();
  const publicRoute = ["/", "/Register"];

  // if (publicRoute.some((val: any) => val === pathname) && idUser !== "") {
  //   router.push("/Dashboard");

  //   return (
  //     <div className="flex flex-col h-full bg-white overflow-x-hidden">
  //       {children}
  //     </div>
  //   );
  // } else {
  //   router.push("/");

  //   return (
  //     <div className="flex flex-col h-full bg-white overflow-x-hidden">
  //       <div className="flex flex-col h-full">
  //         <Header />
  //         <div className="flex [&>*]:max-w-[64rem] h-full items-center justify-center">
  //           {children}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // if (publicRoute.some((val: any) => val === pathname) && idUser !== "") {
  //   router.push("/Dashboard");
  //   isCheckRoute = false;
  // } else {
  //   isCheckRoute = false;
  // }

  // console.log(isCheckRoute)

  return (
    <div className="flex flex-col h-full bg-white overflow-x-hidden">
      {publicRoute.some((val: any) => val === pathname) ? (
        <>{children}</>
      ) : (
        <div className="flex flex-col h-full">
          <Header />
          <div className="flex [&>*]:max-w-[64rem] h-full items-center justify-center">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
