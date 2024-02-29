"use client"
import { Drawer } from "@/components/orderComps/Drawer";
import { Checkbox, Container, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const districts = [
    "Баянзүрх дүүрэг",
    "Хан-Уул дүүрэг",
    "Баянгол дүүрэг",
    "Сонгинохайрхан дүүрэг",
    "Чингэлтэй дүүрэг",
]

const khoroo = [
    "1-р хороо",
    "2-р хороо",
    "3-р хороо", "4-р хороо", "5-р хороо", "6-р хороо", "7-р хороо",
]

const apartment = [
    "Нархан хотхон",
    "26-р байр",
    "Хоймор хотхон",
    "45-р байр",
    "Зайсан хотхон "
]


export default function Home() {
    const [paymentMethod, setPaymentMethod] = useState("Бэлнээр")
    return (
        <Stack width="100vw">
            <Container>
                <Stack direction={"row"} justifyContent={"space-between"} gap={20} p={10}>
                    <Stack flex={1} flexBasis={0} >
                        <Stack direction={"row"} gap={3} alignItems={"center"} p={2} >
                            <Image src={"/svg/State.svg"} alt="state img" width={48} height={48} />
                            <Stack >
                                <Typography fontSize={14} color={"#8B8E95"}>Алхам 1</Typography>
                                <Typography fontSize={20}>Хаягийн мэдээлэл оруулах</Typography>
                                <Typography color={"#0468C8"}>Хүлээгдэж байна</Typography>
                            </Stack>
                        </Stack>
                        <Stack p={3} gap={5} borderRadius={2} sx={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}>
                            <Stack gap={2}>
                                <Typography fontSize={14} >Хаяг аа оруулна уу</Typography>
                                <Select value={"Дүүрэг сонгоно уу"} sx={{ color: "#000" }} >
                                    {districts.map((item) => {
                                        return (<MenuItem>{item}</MenuItem>)
                                    })}
                                </Select>
                                <Select value="Хороо сонгоно уу" sx={{ color: "#000" }} >
                                    {khoroo.map((item) => {
                                        return (<MenuItem>{item}</MenuItem>)
                                    })}
                                </Select>
                                <Select value={"Утасны дугаараа оруулна уу"} sx={{ color: "#000" }} >
                                    {apartment.map((item) => {
                                        return (<MenuItem>{item}</MenuItem>)
                                    })}
                                </Select>
                            </Stack>
                            <Stack gap={1}>
                                <Typography fontSize={14}>Нэмэлт мэдээлэл</Typography>
                                <TextField placeholder="Орц, давхар, орцны код ..." inputProps={{ style: { paddingBottom: "112px" } }} sx={{ bgcolor: "#F7F7F8" }} />
                            </Stack>
                            <Stack gap={1}>
                                <Typography fontSize={14}>Утасны дугаар*</Typography>
                                <TextField placeholder="Утасны дугаараа оруулна уу" sx={{ bgcolor: "#F7F7F8" }} />
                            </Stack>
                            <Stack gap={1}>
                                <Typography fontSize={14}>Төлбөр төлөх </Typography>
                                <Stack direction={"row"} justifyContent={"space-between"} >
                                    <Stack direction={"row"} gap={1} alignItems={"center"} width={175.5} onClick={() => {
                                        setPaymentMethod("Бэлнээр")
                                    }}>
                                        <Checkbox checked={paymentMethod === "Бэлнээр"} />
                                        <Typography color={"#8B8E95"}>Бэлнээр</Typography>
                                    </Stack>
                                    <Stack direction={"row"} gap={1} alignItems={"center"} width={175.5} onClick={() => {
                                        setPaymentMethod("Картаар")
                                    }}>
                                        <Checkbox checked={paymentMethod === "Картаар"} />
                                        <Typography color={"#8B8E95"}>Картаар</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </Stack>
                    </Stack>
                    <Stack flex={1} flexBasis={0} >
                        <Stack direction={"row"} gap={3} alignItems={"center"} p={2} >
                            <Image src={"/svg/State.svg"} alt="state img" width={48} height={48} />
                            <Stack >
                                <Typography fontSize={14} color={"#8B8E95"}>Алхам 2</Typography>
                                <Typography fontSize={20}>Захиалга баталгаажуулах</Typography>
                                <Typography color={"#0468C8"}>Хүлээгдэж байна</Typography>
                            </Stack>
                        </Stack>
                        <Stack height={612} borderRadius={2} sx={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}>

                        </Stack>
                    </Stack>
                </Stack>
            </Container >
        </Stack >
    )
}