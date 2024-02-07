import { Stack, Typography } from "@mui/material"
import Image from "next/image";
import { useState } from "react";
import { number } from "yup";
type BasketOrderProps = {
    image: string;
    name: string;
    price: number;
    ingedrients: string;

}

export const BasketOrder = (props: BasketOrderProps) => {

    const { image, name, price, ingedrients } = props;

    return (
        <Stack width={"100%"} p={3} gap={2}>
            <Stack width={"100%"} height={1.5} bgcolor={"#D6D8DB"} />
            <Stack direction={"row"} gap={2}>
                <Image src={image} width={245} height={150} alt="food image" />
                <Stack gap={2}>
                    <Typography fontSize={18} fontWeight={600}>{name}</Typography>
                    <Typography fontSize={18} fontWeight={600} color={"#18BA51"}>{price}</Typography>
                    <Typography color={"#767676"}>{ingedrients}</Typography>
                    <Stack direction={"row"}>
                        <Stack width={45} height={40} bgcolor={"#18BA51"} borderRadius={"10px"} justifyContent={"center"} alignItems={"center"}>
                            <Image src={"/svg/minus.svg"} width={13} height={13} alt="minus logo" />
                        </Stack>
                        <Stack width={45} height={40} borderRadius={"10px"} justifyContent={"center"} alignItems={"center"}>
                            <Typography fontSize={16} fontWeight={500}> 1 </Typography>
                        </Stack>
                        <Stack width={45} height={40} bgcolor={"#18BA51"} borderRadius={"10px"} justifyContent={"center"} alignItems={"center"}>
                            <Image src={"/svg/plus.svg"} width={13} height={13} alt="minus logo" />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width={"100%"} height={1.5} bgcolor={"#D6D8DB"} />
        </Stack >
    )
}