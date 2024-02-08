"use client"
import { Stack } from "@mui/material";
import { MainBanner } from "../../components/MainBanner";
import { MonitorSection } from "../../components/MonitorSection";
import { OnSale } from "../../components/OnSale";
import { MainDish } from "../../components/MainDish";
import { Salad } from "../../components/Salad";
import { useFetch } from "../Hooks/useFetch";
import { useState } from "react";
import { Snack } from "../../components/Snack";


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
