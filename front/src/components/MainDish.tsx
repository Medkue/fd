"use client";
import { Container, IconButton, Stack, Typography } from "@mui/material"
import { useFetch } from "../app/Hooks/useFetch"
import { FoodCard } from "./FoodCard"
import Image from "next/image"
import { useState } from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { usePathname, useRouter } from "next/navigation";



export const MainDish = () => {
    const { data, isLoading, reFetch } = useFetch("http://localhost:3001/food", "Үндсэн хоол");
    const router = useRouter();

    return (
        <Stack>
            <Container>
                <Stack gap={3}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                        <Stack direction={"row"} p={2} gap={2} alignItems={"center"}>
                            <Image src="/svg/Star 1.svg" width={24} height={24} alt="star image" />
                            <Typography fontSize={22} fontWeight={700}>Үндсэн хоол</Typography>
                        </Stack>
                        <Stack direction={"row"} gap={1} alignItems={"center"}>
                            <Typography fontSize={14} color={"#18BA51"}>Бүгдийг харах</Typography>
                            <IconButton onClick={() => {
                                router.push(`foods/Үндсэн хоол`)

                            }}>
                                <ArrowForwardIosIcon sx={{ width: "15px", height: "30px", color: "#18BA51" }} />
                            </IconButton>
                        </Stack>
                    </Stack>


                    <Stack sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} gap={3} >
                        {data?.map((item: any, index) => {
                            if (index <= 3) return (<FoodCard key={index} svg={item.image} title={item.name} price={item.price} discount={item.discount} />
                            )
                        })}
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}