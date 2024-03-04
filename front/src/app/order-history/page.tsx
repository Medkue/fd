import { useOrder } from "@/components/providers/OrderProvider"
import { Container, Stack, Typography } from "@mui/material"
import Image from "next/image"

export default function Home() {

    return (
        <Stack width="100vw">
            <Container>
                <Stack direction={"row"} justifyContent={"space-between"} gap={20} p={10}>
                    <Stack flex={1} flexBasis={0} height={720} borderRadius={2} p={3} sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px; " }} >
                        <Typography fontSize={20}>Захиалгын түүх</Typography>

                    </Stack>
                    <Stack flex={1} flexBasis={0} height={720} borderRadius={2} p={3} sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px; " }}  >
                        <Typography fontSize={20}>Захиалгын дэлгэрэнгүй</Typography>
                        <Stack direction={"row"} gap={3} alignItems={"center"} p={2} >
                            <Image src={"/svg/State.svg"} alt="state img" width={48} height={48} />
                            <Stack >

                                <Typography >Захиалга {" "} { } </Typography>
                                <Typography color={"#0468C8"} fontSize={14}>{ }</Typography>
                            </Stack>
                        </Stack>

                    </Stack>
                </Stack>
            </Container >
        </Stack >
    )
}
