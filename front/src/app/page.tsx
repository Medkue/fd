"use client";

import { CustomInput, LogIn } from "@/app/components";
import { CustomSearch } from "@/app/components";

import { Stack } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Main } from "./components/MainBanner";

export default function Home() {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  }

  const searchOnChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchValue(event?.target.value)
  }
  return (
    <>
      <Main />
    </>
  );
}
