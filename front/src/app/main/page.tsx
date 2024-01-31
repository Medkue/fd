"use client"
import { Stack } from "@mui/material";
import { MainBanner } from "../components/MainBanner";
import { MonitorSection } from "../components/MonitorSection";
import { OnSale } from "../components/OnSale";


export default function Home() {
  return <Stack>
    <MainBanner />
    <MonitorSection />
    <OnSale />
  </Stack >


}
