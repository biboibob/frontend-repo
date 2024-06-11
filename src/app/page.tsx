"use client";
import { useState } from "react";

//Component
import { Input, Button } from "@/components";

export default function Home() {
  const [generalCondition, setGeneralConditon] = useState({});

  const [form, setForm] = useState({
    email: {
      value: "",
      error: false,
      message: "",
    },
    password: {
      value: "",
      error: false,
      message: "",
    },
  });

  const onChange = (name: any, value: any) => {
    setForm((prev: any) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: value,
      },
    }));
  };

  const onLogin = (e: any) => {
    e.preventDefault();
    console.log("test");
  };

  return (
    <div className="flex h-full">
      <div className="hidden lg:flex basis-1/2 bg-white p-10">
        <div className="bg-[url('../../public/background.webp')] bg-center rounded-2xl bg-cover w-full h-full" />
        {/* <Image src={BgLogin} alt="bg-login" className="w-full rounded-xl bg-cover" /> */}
      </div>
      <div className="flex flex-col justify-center items-center gap-10 basis-full lg:basis-1/2 bg-white text-black px-5 lg:px-0">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl font-bold">Welcome Back</span>
          <span className="text-sm">
            Enter email and password to access your account
          </span>
        </div>  

        {/* Input Section */}

        <form
          id="formLogin"
          className="flex flex-col items-center gap-5 w-full max-w-[25rem]"
          onSubmit={onLogin}
        >
          <Input
            onChange={onChange}
            label="Email"
            name={"email"}
            value={form.email.value}
            placeHolder="Input Your Email"
          />
          <Input
            onChange={onChange}
            label="Password"
            name={"password"}
            value={form.password.value}
            placeHolder="********"
          />
        </form>

        {/* Button Action */}
        <Button
          name="Sign In"
          type={"submit"}
          form={"formLogin"}
          className="max-w-[25rem]"
        />

        {/* Sign Up */}
        <span className="text-sm">
          Dont have any account?{" "}
          <span className="font-bold underline">Sign Up</span>
        </span>
      </div>
    </div>
  );
}
