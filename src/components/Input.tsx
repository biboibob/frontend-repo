import React from "react";
import { Input as MUIInput } from "@mui/material";

type Props = {
  noLabel?: boolean;
  label: string;
  name: string;
  value: any;
  onChange: any;
  vertical?: boolean;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  placeHolder?: string
};

function Input({
  noLabel = false,
  name = "",
  value,
  onChange,
  label = "",
  vertical = true,
  wrapperClassName = "",
  labelClassName = "",
  className = "",
  placeHolder = "Input Here"
}: Props) {
  return (
    <div
      className={`flex ${
        vertical ? "flex-col" : "flex-row"
      } ${wrapperClassName} w-full`}
    >
      <label className={`${noLabel ? "hidden" : "flex"} ${labelClassName} font-bold`}>
        {label}
      </label>
      <MUIInput
        onChange={(e: any) => onChange(name, e.target.value)}
        name={name}
        value={value}
        className={`${className} py-2`}
        placeholder={placeHolder}
      />
    </div>
  );
}

export default Input;
