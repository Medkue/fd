import { Button, Stack, SwipeableDrawer, Typography } from "@mui/material"
import Image from "next/image";
import { ReactEventHandler } from "react";
import { BasketOrder } from "../order/BasketOrder";
type DrawerProps = {
    state: boolean;
    toggleDrawer: () => void
}
export const Drawer = (props: DrawerProps) => {
    const { state, toggleDrawer } = props;
    return (
        <SwipeableDrawer open={state} anchor="right" onClose={toggleDrawer} onOpen={toggleDrawer} >
            <Stack width={586} alignItems={"center"} p={3} height={"100vh"} position={"relative"} >
                <Stack width={"100%"} direction={"row"} alignItems={"center"} >
                    <Image src={"/svg/arrow_forward_ios.svg"} alt="back arrow svg" width={48} height={48} onClick={toggleDrawer} />
                    <Typography fontSize={20} fontWeight={900} pl={"35%"}>Таны сагс</Typography>
                    <Stack></Stack>
                </Stack>
                <Stack>
                    <BasketOrder name="hool" price={45000} ingedrients="egg, salmon ,cheese, ham, chicken breast, salt ,black,pepper" image="/svg/bowl.png" />
                </Stack>
                <Stack height={172} alignItems={"center"} direction={"row"} width={"100%"} p={"10px 32px"} position={"absolute"} bottom={"0px"} gap={10}>
                    <Stack flex={1} flexBasis={0}>
                        <Typography fontSize={18} color={"#5E6166"}>Нийт төлөх дүн</Typography>
                        <Typography fontSize={18} fontWeight={700}>$</Typography>
                    </Stack>
                    <Button variant="contained" sx={{ flex: 1, flexBasis: 0, height: '48px' }}>Захиалах</Button>
                </Stack>
            </Stack>
        </SwipeableDrawer>
    )
}