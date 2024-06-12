import React from "react";
import { Button as MUIButton } from "@mui/material";

type Props = {
  onClick?: any;
  name: string;
  type: any;
  className?: string;
  form?: string;
};

function Button({
  onClick,
  name = "",
  type,
  className = "",
  form = "",
}: Props) {
  return (
    <MUIButton
      form={form}
      onClick={onClick}
      type={type}
      className={`${className} w-full bg-black text-white text-sm p-3`}
    >
      {name}
    </MUIButton>
  );
}

export default Button;
