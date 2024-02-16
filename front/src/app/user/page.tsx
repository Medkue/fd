import { StackedBarChart } from "@mui/icons-material";
import { Container, Stack } from "@mui/material";
import Image from "next/image";
import { relative } from "path";

export default function Home() {
    return (
        <Stack width={"100vw"} mt={25} alignItems={"center"}>
            <Container>
                <Stack width={432} gap={3} alignItems={"center"} >
                    <Stack position={"relative"} width={120} height={120}>
                        <Stack width={120} height={120} borderRadius={"100%"} border={"2px solid black"} position={"relative"}>
                            <Image src={"/svg/food.png"} fill alt="user image" />
                        </Stack>
                        <Stack width={34} height={34} borderRadius={"full"} position={"absolute"} bottom={-2} right={-2}>
                            <Image src="/svg/edit.png" width={24} height={24} alt="user image" />
                        </Stack>

                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}