"use client"
import { Button, Stack, SwipeableDrawer, Typography } from "@mui/material"
import Image from "next/image";
import { BasketOrder } from "./BasketOrder";
import { useBasket } from "../providers/BasketProvider";
import { NumericFormat } from 'react-number-format';
import { useRouter } from "next/navigation";

type DrawerProps = {
    state?: boolean;
    toggleDrawer: () => void
}
export const Drawer = (props: DrawerProps) => {
    const { state, toggleDrawer } = props;
    const { basketOrder, setCount, basketTotal } = useBasket();
    const router = useRouter();


    return (
        <SwipeableDrawer open={state} anchor="right" onClose={toggleDrawer} onOpen={toggleDrawer} >
            <Stack width={586} alignItems={"center"} p={3} height={"100vh"} position={"relative"} >
                <Stack width={"100%"} direction={"row"} alignItems={"center"} >
                    <Image src={"/svg/arrow_forward_ios.svg"} alt="back arrow svg" width={48} height={48} onClick={toggleDrawer} />
                    <Typography fontSize={20} fontWeight={900} pl={"35%"}>Таны сагс</Typography>
                    <Stack></Stack>
                </Stack>
                <Stack height={"90%"} overflow={"scroll"} >{basketOrder && basketOrder.map((item, index) => {
                    return (<BasketOrder key={index} name={item.name} price={item.price} ingedrients={item.ingedrients} image={item.img} count={item.count} id={item.id} setCount={setCount} isOrder={false} />)
                })}

                </Stack>
                <Stack height={172} alignItems={"center"} direction={"row"} width={"100%"} p={"10px 32px"} position={"absolute"} bottom={"0px"} gap={10}>
                    <Stack flex={1} flexBasis={0}>
                        <Typography fontSize={18} color={"#5E6166"}>Нийт төлөх дүн</Typography>

                        <NumericFormat value={basketTotal}
                            thousandSeparator=","
                            displayType="text"
                            suffix="₮"
                            renderText={(value) => <b>{value}</b>}
                        />
                    </Stack>
                    <Button variant="contained" sx={{ flex: 1, flexBasis: 0, height: '48px' }} onClick={() => {
                        router.push("order")
                        toggleDrawer();
                    }}>Захиалах</Button>
                </Stack>
            </Stack>
        </SwipeableDrawer>
    )
}