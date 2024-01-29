


import { Container, Link, Stack, Typography } from "@mui/material"
import Image from "next/image"

export const Footer = () => {
    return (
        <Stack width={"100vw"}>

            <Stack width={"100%"} height={545} bgcolor={"#18BA51"} justifyContent={"center"} alignItems={"center"} position="relative">
                <Container>
                    <Image src="/svg/food.png" alt="" fill style={{ objectFit: "cover" }} />
                    <Stack gap={5} width={"100%"} alignItems={"center"}>
                        <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
                            <Image src="/svg/wLogo.svg" alt="" width={41} height={41} />
                            <Typography fontSize={20} fontWeight={700} color={"white"}>Food Delivery</Typography>
                        </Stack>
                        <Stack flexDirection={"row"} width={"100%"} justifyContent={"space-evenly"}>
                            <Link href={""} color="#nnn" sx={{ fontSize: "16px", fontWeight: "590px", color: "white", textDecorationColor: "white" }}>
                                Нүүр
                            </Link >
                            <Link href={""} color="#nnn" sx={{ fontSize: "16px", fontWeight: "590px", color: "white", textDecorationColor: "white" }}>
                                Холбоо барих
                            </Link >
                            <Link href={""} color="#nnn" sx={{ fontSize: "16px", fontWeight: "590px", color: "white", textDecorationColor: "white" }}>
                                Хоолны цэс
                            </Link >
                            <Link href={""} color="#nnn" sx={{ fontSize: "16px", fontWeight: "590px", color: "white", textDecorationColor: "white" }}>
                                Үйлчилгээний нөхцөл
                            </Link >
                            <Link href={""} color="#nnn" sx={{ fontSize: "16px", fontWeight: "590px", color: "white", textDecorationColor: "white" }}>
                                Хүргэлтийн бүс
                            </Link >
                            <Link href={""} color="#nnn" sx={{ fontSize: "16px", fontWeight: "590px", color: "white", textDecorationColor: "white" }}>
                                Нууцлалын бодлого
                            </Link >
                        </Stack>
                        <Stack flexDirection={"row"} gap={2.25} padding={.5}>
                            <Image src="/svg/facebook.svg" alt="facebook logo" width={40} height={46} />
                            <Image src="/svg/instagram.svg" alt="instagram logo" width={40} height={46} />
                            <Image src="/svg/twitter.svg" alt="twitter logo" width={40} height={46} />
                        </Stack>
                        <Stack width={"80%"} height={"1px"} bgcolor={"white"} />
                        <Stack gap={1} alignItems={"center"}>
                            <Typography fontSize={16} fontWeight={400} color={"white"} >
                                © 2024 Pinecone Foods LLC
                            </Typography>
                            <Typography fontSize={16} fontWeight={400} color={"white"} >
                                Зохиогчийн эрх хуулиар хамгаалагдсан.
                            </Typography>
                        </Stack>
                    </Stack>
                </Container>
            </Stack>

        </Stack>
    )
}