'use client'

import { Container, Stack, Typography } from "@mui/material";
import { MainDish } from "../../../components/mainPageComps/MainDish";
import { useParams, usePathname } from 'next/navigation'
import { useFetch } from "@/Hooks/useFetch";
import { FoodCard } from "@/components/cards/FoodCard";
import { string } from "yup";
import { useState } from "react";
import { OrderModal } from "@/components/modals/OrderModal";

const labelMap = {
    "foods/map": "G"
}


export default function Home(props: any) {
    const { id } = useParams();
    const pathName = usePathname();
    const decodedId = decodeURIComponent(id);
    const [open, setOpen] = useState(false);
    const toggleModal = () => {
        setOpen((prev) => !prev)
    }

    const { data, isLoading, reFetch } = useFetch("http://localhost:3001/food", decodedId);

    return (
        <Stack width={"100vw"} height={"100vh"} mt={10}>
            <Container >
                <Stack height={37} p={2} width={"fit-content"} borderRadius={2} boxShadow={"0 1 2 0"} border={"1px solid black"} alignItems={"center"} justifyContent={"center"} mx={3} mb={3}>
                    <Typography>
                        {decodedId}
                    </Typography>
                </Stack>
                < Stack />
                <Stack sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} gap={3} >
                    {data?.map((item: any, index) => {
                        return (<Stack key={index} >
                            <FoodCard svg={item.image} title={item.name} price={item.price} discount={item.discount} onclick={toggleModal} />
                            <OrderModal svg={item.image} title={item.name} price={item.price} ingedrients={item.ingedrient} toggleModal={toggleModal} open={open} />
                        </Stack>
                        )
                    })}
                </Stack>
            </Container>
        </Stack>
    )
}