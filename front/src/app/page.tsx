"use client";

import { ChangeEvent, useState } from "react";
import { MainBanner } from "../components/mainPageComps/MainBanner";


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
      <MainBanner />
    </>
  );
}
