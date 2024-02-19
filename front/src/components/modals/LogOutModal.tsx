import { Modal, Stack, Typography } from "@mui/material"


type LogOutModalProps = {
    open: boolean;
    toggleModal: () => void;
}

export const LogOutModal = (props: LogOutModalProps) => {
    const { toggleModal, open } = props
    return (
        // <Modal open={open} onClose={toggleModal} disableEnforceFocus>
        //     <Stack width={384} height={228} borderRadius={2}>
        //         <Stack> <Typography>Та системээс гарахдаа
        //             итгэлтэй байна уу?</Typography></Stack>
        //     </Stack>
        //     <Stack width={"100%"} >
        //         <Stack flex={1}>
        //             <Typography>Тийм </Typography>
        //         </Stack>
        //         <Stack flex={1}>
        //             <Typography>Тийм </Typography>
        //         </Stack>
        //     </Stack>
        // </Modal>
        <Modal open={open} onClose={toggleModal}>
            <Stack width={"100vw"} height={"100vh"} alignItems={"center"} justifyContent={"center"} >
                <Stack width={384} height={228} borderRadius={2} bgcolor={"white"} overflow={"hidden"}>
                    <Stack alignSelf={"center"} justifySelf={"center"} height={167} justifyContent={"center"} p={8}>
                        <Typography fontSize={20} fontWeight={600} flexWrap={"wrap"}>Та системээс гарахдаа
                            итгэлтэй байна уу?</Typography>
                    </Stack>
                    <Stack width={"100%"} direction={"row"} height={61} >
                        <Stack flex={1} alignItems={"center"} bgcolor={"#18BA51"} justifyContent={"center"}>
                            <Typography fontSize={20} fontWeight={600} color={"white"}>Тийм </Typography>
                        </Stack>
                        <Stack flex={1} alignItems={"center"} bgcolor={"#18BA5133"} justifyContent={"center"}>
                            <Typography fontSize={20} fontWeight={600}>Үгүй </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Modal>
    )
}