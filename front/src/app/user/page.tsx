"use client"
import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { LogOutModal } from "@/components/modals/LogOutModal";
import { useState } from "react";

export default function Home() {
    const [open, setOpen] = useState(false)
    const toggleModal = () => {
        setOpen((prev) => !prev)
    }
    return (
        <Stack width={"100vw"} justifyContent={"center"} alignItems={"center"} height={"100vh"}>
            <Container sx={{ display: "flex", justifyContent: 'center' }}>
                <Stack width={432} gap={3} alignItems={"center"}>
                    <Stack position={"relative"} width={120} height={120}>
                        <Stack width={120} height={120} borderRadius={"100%"} position={"relative"}>
                            <Image src={"/svg/Photo.svg"} fill alt="user image" />
                        </Stack>
                        <Stack width={34} height={34} borderRadius={"100%"} border={"2px solid #D6D8DB"} position={"absolute"} bottom={-2} right={-2} alignItems="center" justifyContent="center" bgcolor="white">
                            <Image src="/svg/edit.svg" width={24} height={24} alt="user image" />
                        </Stack>
                    </Stack>
                    <Typography fontSize={28} fontWeight={700}>
                        Ugtakgaa
                    </Typography>
                    <Stack gap={2} px={"20px"}>
                        <Stack direction="row" width={392} height={64} bgcolor="#F6F6F6" px={"20px"} py={1} justifyContent="space-between" borderRadius="4px" alignItems={"center"}>
                            <Stack direction={"row"} gap={2} alignItems={"center"}>
                                <Stack width={48} height={48} borderRadius={"100%"} alignItems="center" justifyContent="center" bgcolor="white">
                                    <Image src="/svg/person.svg" width={24} height={24} alt="user image" />
                                </Stack>
                                <Stack gap={0}>
                                    <Typography fontSize={12} color={"#888A99"}>Таны нэр</Typography>
                                    <Typography>Ugtakhaa</Typography>
                                </Stack>
                            </Stack>
                            <Image src="/svg/edit.svg" width={24} height={24} alt="edit logo" />
                        </Stack>
                        <Stack direction="row" width={392} height={64} bgcolor="#F6F6F6" px={"20px"} py={1} justifyContent="space-between" borderRadius="4px" alignItems={"center"}>
                            <Stack direction={"row"} gap={2} alignItems={"center"}>
                                <Stack width={48} height={48} borderRadius={"100%"} alignItems="center" justifyContent="center" bgcolor="white">
                                    <Image src="/svg/call.svg" width={24} height={24} alt="user image" />
                                </Stack>
                                <Stack gap={0}>
                                    <Typography fontSize={12} color={"#888A99"}>Утасны дугаар</Typography>
                                    <Typography>Ugtakhaa</Typography>
                                </Stack>
                            </Stack>
                            <Image src="/svg/edit.svg" width={24} height={24} alt="edit logo" />
                        </Stack>
                        <Stack direction="row" width={392} height={64} bgcolor="#F6F6F6" px={"20px"} py={1} justifyContent="space-between" borderRadius="4px" alignItems={"center"}>
                            <Stack direction={"row"} gap={2} alignItems={"center"}>
                                <Stack width={48} height={48} borderRadius={"100%"} alignItems="center" justifyContent="center" bgcolor="white">
                                    <Image src="/svg/forward_to_inbox.svg" width={24} height={24} alt="user image" />
                                </Stack>
                                <Stack gap={0}>
                                    <Typography fontSize={12} color={"#888A99"}>Имэйл хаяг</Typography>
                                    <Typography>Ugtakhaa</Typography>
                                </Stack>
                            </Stack>
                            <Image src="/svg/edit.svg" width={24} height={24} alt="edit logo" />
                        </Stack>
                        <Stack direction="row" width={392} height={64} px={"20px"} py={1} justifyContent="space-between" borderRadius="4px" alignItems={"center"}>
                            <Stack direction={"row"} gap={2} alignItems={"center"}>
                                <Stack width={48} height={48} borderRadius={"100%"} alignItems="center" justifyContent="center" bgcolor="white" border="1px solid #F6F6F6">
                                    <Image src="/svg/history.svg" width={24} height={24} alt="user image" />
                                </Stack>
                                <Typography>Захиалгын түүх</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" width={392} height={64} px={"20px"} py={1} borderRadius="4px" alignItems={"center"} onClick={toggleModal}>
                            <Stack direction={"row"} gap={2} alignItems={"center"} >
                                <Stack width={48} height={48} borderRadius={"100%"} alignItems="center" justifyContent="center" bgcolor="white" border="1px solid #F6F6F6">
                                    <Image src="/svg/logout.svg" width={24} height={24} alt="user image" />
                                </Stack>
                                <Typography>Гарах</Typography>
                                <LogOutModal open={open} toggleModal={toggleModal} />
                            </Stack>

                        </Stack>


                    </Stack>
                </Stack>
            </Container>

        </Stack>
    )
}