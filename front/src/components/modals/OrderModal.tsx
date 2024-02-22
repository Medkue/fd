import { Button, Modal, Stack, Typography } from "@mui/material"
import Image from "next/image";
type OrderModalProps = {
    toggleModal: () => void;
    open: boolean;
    svg: string;
    title: any;
    price: any;
    ingedrients: any;
}
export const OrderModal = (props: OrderModalProps) => {
    const { toggleModal, open, svg, title, price, ingedrients } = props;

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
                        <Button variant="contained">Сагслах</Button>
                    </Stack>
                </Stack>
            </Stack >
        </Modal>
    )
}