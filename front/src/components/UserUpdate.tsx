"use client"
import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { LogOutModal } from "@/components/modals/LogOutModal";
import { useState } from "react";
import { useUser } from "@/components/providers/UserProvider";
import { useAuth } from "@/components/providers/AuthProvider";
import { UploadModal } from "./modals/UploadModal";


export const UserUpdate = () => {
    const { userName, userNumber, userEmail, userImg } = useUser();

    const { isLogged } = useAuth();
    const [open, setOpen] = useState(false)
    const toggleModal = () => {
        setOpen((prev) => !prev)
    }
    return (<>
        {!isLogged ? (<Stack mt={15}>Page not found</Stack>) : (
            <Stack width={"100vw"} justifyContent={"center"} alignItems={"center"} height={"100vh"}>
                <Container sx={{ display: "flex", justifyContent: 'center' }}>
                    <Stack width={432} gap={3} alignItems={"center"}>
                        <Stack position={"relative"} width={120} height={120}>
                            <Stack width={120} height={120} borderRadius={"100%"} position={"relative"} overflow={"hidden"}>
                                {userImg ? <Image src={userImg} fill alt="user profile" objectFit="cover" /> :
                                    <Image src={"/svg/Photo.svg"} fill alt="user image" objectFit="cover" />}
                            </Stack>
                            <Stack width={34} height={34} borderRadius={"100%"} border={"2px solid #D6D8DB"} position={"absolute"} bottom={-2} right={-2} alignItems="center" justifyContent="center" bgcolor="white" onClick={toggleModal}>
                                <Image src="/svg/edit.svg" width={24} height={24} alt="user image" />
                            </Stack>
                            <UploadModal open={open} toggleModal={toggleModal} />
                        </Stack>
                        <Typography fontSize={28} fontWeight={700}>
                            {userName}
                        </Typography>
                        <Stack gap={2} px={"20px"}>
                            <Stack direction="row" width={392} height={64} bgcolor="#F6F6F6" px={"20px"} py={1} justifyContent="space-between" borderRadius="4px" alignItems={"center"}>
                                <Stack direction={"row"} gap={2} alignItems={"center"}>
                                    <Stack width={48} height={48} borderRadius={"100%"} alignItems="center" justifyContent="center" bgcolor="white">
                                        <Image src="/svg/person.svg" width={24} height={24} alt="user image" />
                                    </Stack>
                                    <Stack gap={0}>
                                        <Typography fontSize={12} color={"#888A99"}>Таны нэр</Typography>
                                        <Typography>{userName}</Typography>
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
                                        <Typography>{userNumber}</Typography>
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
                                        <Typography>{userEmail}</Typography>
                                    </Stack>
                                </Stack>
                                <Image src="/svg/edit.svg" width={24} height={24} alt="edit logo" />
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>

            </Stack>)}
    </>
    )
}