import { Container, Stack, Typography } from "@mui/material";
import { MainDish } from "../../components/mainPageComps/MainDish";

export default function Home() {
    return (
        <Stack width={"100vw"} height={"100vh"} mt={10}>
            <Container >
                <Stack height={37} p={2} width={"fit-content"} borderRadius={2} boxShadow={"0 1 2 0"} border={"1px solid black"} alignItems={"center"} justifyContent={"center"} mx={3} mb={3}>
                    <Typography>
                        Үндсэн хоол
                    </Typography></Stack>
                < MainDish />
            </Container>
        </Stack>
    )
}