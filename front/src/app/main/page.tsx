"use client"
import { Stack } from "@mui/material";
import { MainBanner } from "../../components/mainPageComps/MainBanner";
import { MonitorSection } from "../../components/mainPageComps/MonitorSection";
import { OnSale } from "../../components/mainPageComps/OnSale";
import { MainDish } from "../../components/mainPageComps/MainDish";
import { Salad } from "../../components/mainPageComps/Salad";
import { useFetch } from "../Hooks/useFetch";
import { useState } from "react";
import { Snack } from "../../components/mainPageComps/Snack";


export default function Home() {

  return <Stack >
    <MainBanner />
    <Stack gap={10}>
      <MonitorSection />
      <OnSale />
      <MainDish />
      <Salad />
      <Snack />
    </Stack>

  </Stack >


}
