"use client"
import { Button, Container, Stack, Typography } from "@mui/material"
import { useAuth } from "../providers/AuthProvider";
import { useFormik } from "formik";
import * as yup from "yup";
import { CustomInput } from "../customUsage/CustomInput";

const validationSchema = yup.object({
    email: yup.string().email(),
    password: yup.string(),
});

export const LogInModal = () => {
    const { isLogged, setIsLogged, signUp } = useAuth();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        }, validationSchema: validationSchema,
        onSubmit: (values) => {
            signUp(values)
        }
    });

    return (
        <Container sx={{ display: "flex", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center", bgcolor: "black", padding: "32px" }} >
            <Stack alignItems="center" justifyContent="center" height="549px" width={"448px"} borderRadius={4} bgcolor={"white"} sx={{}} >
                <Stack gap={2} >
                    <Typography alignSelf={"center"} fontSize={28} fontWeight={700} >Нэвтрэх</Typography>
                    <CustomInput label={"Имэйл"} type="text" name="email" onChange={formik.handleChange} value={formik.values.email} />
                    <CustomInput label={"Нууц үг"} type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                    <Typography alignSelf={"end"} marginTop={-1} fontSize={14} fontWeight={400}>Нууц үг сэргээх</Typography>
                </Stack>
                <Stack gap={4} marginTop={4}>
                    <Button variant="contained" disableElevation disabled={!formik.values.email || !formik.values.password} sx={{ width: "384px", height: "48px" }}>Нэвтрэх</Button>
                    <Typography fontSize={14} fontWeight={400} alignSelf={"center"}>Эсвэл</Typography>
                    <Button variant="outlined" disableElevation sx={{ width: "384px", height: "48px" }}>Бүртгүүлэх</Button>
                </Stack>
            </Stack>
        </Container >
    )
}