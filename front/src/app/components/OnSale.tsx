import { Container, Stack, Typography } from "@mui/material"
import { useFetch } from "../Hooks/useFetch"
import { FoodCard } from "./FoodCard"
import Image from "next/image"



export const OnSale = () => {
    const { data, isLoading, reFetch } = useFetch("http://localhost:3001/food")
    return (
        <Stack>
            <Container>
                <Stack gap={3}>
                    <Stack direction={"row"} justifyContent={"space-between"} >
                        <Stack direction={"row"} p={2} gap={2} alignItems={"center"}>
                            <Image src="/svg/Star 1.svg" width={24} height={24} alt="star image" />
                            <Typography fontSize={22} fontWeight={700}>Хямдралтай</Typography>
                        </Stack>
                    </Stack>

                    <Stack sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} gap={3}>
                        {data?.map((item: any, index) => {
                            return (<FoodCard key={index} svg={item.image} title={item.name} price={item.price} discount={item.discount} />)
                        })}
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}