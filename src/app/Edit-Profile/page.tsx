"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

//Asset
import UserIcon from "../../../public/user.svg";
import { Button, Input } from "@/components";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { onUpdateUser } from "@/api/userAPI";
import { updateUserState } from "@/store/reducer";

type Props = {};

function page({}: Props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const getUserInfo = useSelector((state: any) => state.generalReducer);

  const [form, setForm] = useState({
    email: {
      value: getUserInfo.UserData.email,
      error: false,
      message: "",
    },
    name: {
      value: getUserInfo.UserData.name,
      error: false,
      message: "",
    },
    phone: {
      value: getUserInfo.UserData.phone,
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

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    const { id } = getUserInfo.UserData;

    const result = await onUpdateUser({
      id,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
    });

    if (result.status === 200) {
      dispatch(
        updateUserState({
          name: form.name.value,
          email: form.email.value,
          phone: form.phone.value,
        })
      );
      router.push("/Dashboard");
    }
  };

  return (
    <div className="flex flex-col h-full w-full gap-10 py-5">
      <span className="text-2xl font-bold text-black">Edit Profile</span>
      <div className="flex gap-10">
        <Image src={UserIcon} alt="icon-only" className="w-[10rem] h-[10rem]" />
        <div className="flex flex-col w-full items-end gap-3">
          <form
            className="flex flex-col w-full gap-5"
            id="submitEditProfile"
            onSubmit={onSubmitForm}
          >
            <Input
              onChange={onChange}
              name="name"
              value={form.name.value}
              label="Name"
            />
            <Input
              onChange={onChange}
              name="email"
              value={form.email.value}
              label="Email"
            />
            <Input
              onChange={onChange}
              name="phone"
              value={form.phone.value}
              label="Phone"
            />
          </form>
          <Button
            name="Submit"
            type={"submit"}
            className="!w-fit"
            form={"submitEditProfile"}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
