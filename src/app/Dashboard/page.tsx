"use client";
import React from "react";

//Redux
import { useSelector } from "react-redux";

type Props = {};

function page({}: Props) {
  const getUserInfo = useSelector((state: any) => state.generalReducer);
  return <div className="h-full">page</div>;
}

export default page;
