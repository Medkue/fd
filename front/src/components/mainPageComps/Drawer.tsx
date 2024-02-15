import { Stack, SwipeableDrawer, Typography } from "@mui/material"
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
            <Stack width={586} alignItems={"center"} p={3}>
                <Stack width={"100%"} direction={"row"} alignItems={"center"} >
                    <Image src={"/svg/arrow_forward_ios.svg"} alt="back arrow svg" width={48} height={48} onClick={toggleDrawer} />
                    <Typography fontSize={20} fontWeight={900} pl={"35%"}>Таны сагс</Typography>
                    <Stack></Stack>
                </Stack>
                <BasketOrder name="hool" price={45000} ingedrients="egg, salmon ,cheese, ham, chicken breast, salt ,black,pepper" image="/svg/bowl.png" />
            </Stack>
        </SwipeableDrawer>
    )
}