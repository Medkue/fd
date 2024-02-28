"use client";
import { Button, Modal, Stack, Typography } from "@mui/material"
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { useOrder } from "../providers/OrderProvider";

type OrderModalProps = {
    toggleModal: () => void;
    open: boolean;
    svg: string;
    title: string;
    price: number;
    ingedrients: string;
    id: string;
    // basketOrder: Basket[];
    // setBasketOrder: Dispatch<SetStateAction<Basket[]>>
}

export const OrderModal = (props: OrderModalProps) => {
    const { toggleModal, open, svg, title, price, ingedrients, id } = props;
    const { basketOrder, setBasketOrder, count, setCount } = useOrder();

    // const setOrder = () => {
    //     setBasketOrder([
    //         ...basketOrder, {
    //             img: svg,
    //             name: title,
    //             price: price,
    //             ingedrients: ingedrients,
    //             count: count,
    //         }
    //     ])

    //     localStorage.setItem("basket", basketOrder);
    // }

    return (
        <Modal open={open} onClose={toggleModal} disableEnforceFocus>
            <Stack width={981} p={3} gap={2} bgcolor={"white"} borderRadius={2} position={"absolute"} top={"30%"} left={"30%"}>
                <Stack direction={"row"} gap={2}>
                    <Stack flex={1} height={"100%"} position={"relative"} >
                        <Stack width={"100%"} height={250} borderRadius={2} overflow={"hidden"}> <Image src={svg} fill alt="food image" /></Stack>
                    </Stack>
                    <Stack flex={1} gap={2}>
                        <Typography fontSize={18} fontWeight={600}>{title}</Typography>
                        <Typography fontSize={18} fontWeight={600} color={"#18BA51"}>{price}$</Typography>
                        <Typography color={"#767676"}>{ingedrients}</Typography>
                        <Stack direction={"row"} justifyContent={"center"}>
                            <Stack width={45} height={40} bgcolor={"#18BA51"} borderRadius={"10px"} justifyContent={"center"} alignItems={"center"} onClick={() => {
                                if (count > 0) setCount((prev) => prev - 1);
                            }}>
                                <Image src={"/svg/minus.svg"} width={13} height={13} alt="minus logo" />
                            </Stack>
                            <Stack width={45} height={40} borderRadius={"10px"} justifyContent={"center"} alignItems={"center"}>
                                <Typography fontSize={16} fontWeight={500}> {count} </Typography>
                            </Stack>
                            <Stack width={45} height={40} bgcolor={"#18BA51"} borderRadius={"10px"} justifyContent={"center"} alignItems={"center"} onClick={() => {
                                setCount((prev) => prev + 1)
                            }}>
                                <Image src={"/svg/plus.svg"} width={13} height={13} alt="plus logo" />
                            </Stack>
                        </Stack>
                        <Button variant="contained" onClick={() => {
                            let contained = false;
                            const updatedBasket = [...basketOrder].map((item) => {
                                if (item.id === id) {
                                    item.count += count
                                    contained = true;
                                }
                                return item;
                            })
                            if (contained === false) {
                                setBasketOrder([
                                    ...basketOrder, {
                                        img: svg,
                                        name: title,
                                        price: price,
                                        ingedrients: ingedrients,
                                        count: count,
                                        id: id
                                    }
                                ])
                            } else {
                                setBasketOrder(updatedBasket)
                            }


                        }}>Сагслах</Button>
                    </Stack>
                </Stack>
            </Stack >
        </Modal >
    )
}