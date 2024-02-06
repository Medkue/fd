import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Delivery() {
    return (
        <Stack width={"100vw"} mt={15}>
            <Container>
                <Stack width={"100%"}>
                    <Image alt="map image" width={1200} height={600} src="/svg/map.svg" />
                    <Stack direction={"row"} p={2} gap={2} alignItems={"center"}>
                        <Image src="/svg/Star 1.svg" width={24} height={24} alt="star image" />
                        <Typography fontSize={22} fontWeight={700}>Хүргэлтийн бүс дэх хаягууд</Typography>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
} 