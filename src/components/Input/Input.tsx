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
  placeHolder?: string;
  error?: boolean;
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
  placeHolder = "Input Here",
  error = false,
}: Props) {
  return (
    <div
      className={`flex ${
        vertical ? "flex-col" : "flex-row"
      } ${wrapperClassName} w-full`}
    >
      <label
        className={`${
          noLabel ? "hidden" : "flex"
        } ${labelClassName} font-bold text-black`}
      >
        {label}
      </label>
      <MUIInput
        onChange={(e: any) => onChange(name, e.target.value)}
        name={name}
        value={value}
        className={`${className} py-2`}
        placeholder={placeHolder}
      />
      {error && <span className="text-sm text-red mt-1">Please fill this field  </span>}
    </div>
  );
}

export default Input;
