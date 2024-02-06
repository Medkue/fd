"use client";
import { Button, Container, IconButton, Stack, Typography } from "@mui/material"
import { useFetch } from "../Hooks/useFetch"
import { FoodCard } from "./FoodCard"
import Image from "next/image"
import { MouseEventHandler, useState } from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { usePathname, useRouter } from "next/navigation";

type BreakfastProps = {
    // onClick: MouseEventHandler<HTMLButtonElement> | undefined,
    isShown: boolean
}

export const Breakfast = (props: BreakfastProps) => {
    const { data, isLoading, reFetch } = useFetch("http://localhost:3001/food", "Өглөөний хоол")
    const { isShown } = props;
    const router = useRouter();

    return (
        <Stack display={isShown ? "flex" : "none"}>
            <Container>
                <Stack gap={3}>
                    <Stack sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} gap={3} >
                        {data?.map((item: any, index) => {
                            return (<FoodCard key={index} svg={item.image} title={item.name} price={item.price} discount={item.discount} />
                            )
                        })}

                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}