"use client";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import { api } from "../app/common";
import { log } from "console";
import { useAuth } from "./providers/AuthProvider";
import { CustomInput } from "./customUsage/CustomInput";

const validationSchema = yup.object({
  email: yup.string().email(),
  password: yup.string(),
});

export const LogIn = () => {
  const { signUp, setIsLogged } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUp(values);
    },
  });
  return (
    <Container sx={{ width: "100vw" }}>
      <Stack alignItems="center" justifyContent="center" height="100vh">
        <Stack gap={2}>
          <Typography
            alignSelf={"center"}
            fontSize={28}
            fontWeight={700}
            margin={4}
          >
            Нэвтрэх
          </Typography>
          <CustomInput
            label={"Имэйл"}
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <CustomInput
            label={"Нууц үг"}
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Typography
            alignSelf={"end"}
            marginTop={-1}
            fontSize={14}
            fontWeight={400}
          >
            Нууц үг сэргээх
          </Typography>
        </Stack>
        <Stack gap={4} marginTop={4}>
          <Button
            variant="contained"
            disableElevation
            disabled={!formik.values.email || !formik.values.password}
            sx={{ width: "388px", height: "48px" }}
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Нэвтрэх
          </Button>
          <Typography fontSize={14} fontWeight={400} alignSelf={"center"}>
            Эсвэл
          </Typography>
          <Button
            variant="outlined"
            disableElevation
            sx={{ width: "388px", height: "48px" }}
            onClick={() => {
              router.push("/signUp");
            }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
