"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

//Component
import { Input, Button } from "@/components";

//API
import { onRegister as RegisterAPI } from "@/api/authAPI";
import { PAGE_ROUTEPATH } from "../../../utils/general";

//Redux
import { setLoginState } from "@/store/reducer";
import { useDispatch } from "react-redux";
import { error } from "console";

type Props = {};

function page({}: Props) {
  const router = useRouter();
  const dispatch = useDispatch();

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
    phone: {
      value: "",
      error: false,
      message: "",
    },
    name: {
      value: "",
      error: false,
      message: "",
    },
  });

  const onRegister = async (e: any) => {
    e.preventDefault();

    let isEmpty = false;

    Object.entries(form).map((val: any) => {
      if (val[1].value === "") {
        setForm((prev: any) => ({
          ...prev,
          [val[0]]: {
            ...prev[val[0]],
            error: true,
          },
        }));

        isEmpty = true;
      }
    });

    if (!isEmpty) {
      const result: any = await RegisterAPI({
        email: form.email.value,
        password: form.password.value,
        name: form.name.value,
        phone: form.phone.value
      });

      if (result?.status === 200) {
        router.push(PAGE_ROUTEPATH.DEFAULT);
      }
    }
  };

  const onChange = (name: any, value: any) => {
    setForm((prev: any) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: value,
        error: false,
      },
    }));
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
          <span className="text-4xl font-bold">Register</span>
          <span className="text-sm">
            Please fill all field to proceed your signup
          </span>
        </div>

        {/* Input Section */}

        <form
          id="formRegister"
          className="flex flex-col items-center gap-5 w-full max-w-[25rem]"
          onSubmit={onRegister}
        >
          <Input
            onChange={onChange}
            label="Name"
            name={"name"}
            value={form.name.value}
            placeHolder="Input Your Name"
            error={form.name.error}
          />
          <Input
            onChange={onChange}
            label="Email"
            name={"email"}
            value={form.email.value}
            placeHolder="Input Your Email"
            error={form.email.error}
          />
          <Input
            onChange={onChange}
            label="Password"
            name={"password"}
            value={form.password.value}
            placeHolder="********"
            error={form.password.error}
          />
          <Input
            onChange={onChange}
            label="Phone"
            name={"phone"}
            value={form.phone.value}
            placeHolder="+62 821203089234"
            error={form.phone.error}
          />
        </form>

        {/* Button Action */}
        <Button
          name="Sign Up"
          type={"submit"}
          form={"formRegister"}
          className="max-w-[25rem]"
        />

        {/* Sign Up */}
        <span className="text-sm">
          Alread have account?{" "}
          <span
            className="font-bold underline"
            onClick={() => router.push("/")}
          >
            Sign in
          </span>
        </span>
      </div>
    </div>
  );
}

export default page;
