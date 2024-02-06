'use client'

import { Container, Stack, Typography } from "@mui/material";
import { MainDish } from "../../components/MainDish";
import { useParams, usePathname } from 'next/navigation'
import { useFetch } from "@/app/Hooks/useFetch";
import { FoodCard } from "@/app/components/FoodCard";
import { string } from "yup";

const labelMap = {
    "foods/map": "G"
}


export default function Home(props: any) {
    const { id } = useParams();
    const pathName = usePathname();
    const decodedId = decodeURIComponent(id);

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
                        return (
                            <FoodCard key={index} svg={item.image} title={item.name} price={item.price} discount={item.discount} />)
                    })}
                </Stack>
            </Container>
        </Stack>
    )
}