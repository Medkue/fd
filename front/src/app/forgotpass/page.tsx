"use client"
import { CustomInput } from "@/components/customUsage/CustomInput";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object

export default function Home() {
    const formik = useFormik({
        initialValues: { email: "" },
        validationSchema: val
    })
    return (
        <Stack mt={10} >
            <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Stack p={4}>
                    <Stack width={448} gap={6} >
                        <Typography fontSize={28} fontWeight={700}>Нууц үг сэргээх</Typography>
                        <CustomInput label="Имэйл" placeholder="Имэйл хаягаа оруулна уу" onChange={() => { setEmail() }} />
                        <Button disabled>Үргэлжлүүлэх</Button>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}