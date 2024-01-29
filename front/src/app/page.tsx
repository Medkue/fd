"use client";

import { CustomInput, LogIn } from "@/app/components";
import { CustomSearch } from "@/app/components";

import { Stack } from "@mui/material";
import { ChangeEvent, useState } from "react";

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
      <LogIn />
      {/* <Stack width={"screen"} height={"screen"} bgcolor={"white"} gap={10}>
        <CustomInput label={"Password"} type="password" onChange={onChangeHandler} value={value} />
        <CustomSearch placeHolder={"Search"} onChange={searchOnChangeHandler} />
      </Stack> */}
    </>
  );
}
