import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { NumericFormat } from "react-number-format";
import { number } from "yup";
import { useOrder } from "../providers/OrderProvider";
type BasketOrderProps = {
    image: string;
    name: string;
    price: number;
    ingedrients: string;
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
};

export const BasketOrder = (props: BasketOrderProps) => {
    const { image, name, price, ingedrients, count, setCount } = props;
    const { basketOrder, setBasketOrder } = useOrder();

    return (
        <Stack width={"100%"} p={3} gap={2}>
            <Stack width={"100%"} height={1} bgcolor={"#D6D8DB"} />
            <Stack direction={"row"} gap={2}>
                <Image src={image} width={245} height={150} alt="food image" />
                <Stack gap={2}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Stack gap={2}>
                            <Typography fontSize={18} fontWeight={600}>
                                {name}
                            </Typography>
                            <NumericFormat
                                value={price}
                                thousandSeparator=","
                                displayType="text"
                                suffix="₮"
                                renderText={(value) => <b>{value}</b>}
                                color="#18BA51"
                            />
                        </Stack>
                        <Image src={"/svg/close.svg"} width={14} height={14} alt="close button" onClick={() => {
                            const updatedBasket = basketOrder.filter((item) => item.name !== name)
                            setBasketOrder(updatedBasket);

                        }} />
                    </Stack>

                    <Typography color={"#767676"}>{ingedrients}</Typography>
                    <Stack direction={"row"}>
                        <Stack
                            width={45}
                            height={40}
                            bgcolor={"#18BA51"}
                            borderRadius={"10px"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            onClick={() => {
                                if (count > 0) setCount((prev) => prev - 1);
                            }}
                        >
                            <Image
                                src={"/svg/minus.svg"}
                                width={13}
                                height={13}
                                alt="minus logo"
                            />
                        </Stack>
                        <Stack
                            width={45}
                            height={40}
                            borderRadius={"10px"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Typography fontSize={16} fontWeight={500}>
                                {" "}
                                {count}
                            </Typography>
                        </Stack>
                        <Stack
                            width={45}
                            height={40}
                            bgcolor={"#18BA51"}
                            borderRadius={"10px"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            onClick={() => {
                                setCount((prev) => prev + 1);
                            }}
                        >
                            <Image
                                src={"/svg/plus.svg"}
                                width={13}
                                height={13}
                                alt="plus logo"
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width={"100%"} height={0.5} bgcolor={"#D6D8DB"} />
        </Stack>
    );
};
