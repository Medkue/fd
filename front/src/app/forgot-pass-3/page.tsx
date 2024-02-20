"use client";
import { CustomInput } from "@/components/customUsage/CustomInput";
import { useOtp } from "@/components/providers/OtpProvider";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { api } from "../common";

export default function Home() {
  const { email } = useOtp();
  const router = useRouter();

  const formik = useFormik({
    initialValues: { password: "", repassword: "" },
    onSubmit: async (values) => {
      if (values.password !== values.repassword) {
        alert("repass must match with password");
      } else {
        try {
          const res = await api.post("email/password", {
            email: email,
            password: values.password
          })
          if (res.data.message === "Success")
            alert("User password successfully updated")

        } catch (error) {
          console.log(error);

        }

      }
    },
  });
  return (
    <Stack mt={10}>
      <Container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack p={4}>
          <Stack width={448} gap={6} alignItems={"center"}>
            <Typography fontSize={28} fontWeight={700}>
              Шинэ нууц үг зохиох
            </Typography>
            <Stack gap={2}>
              <CustomInput
                name="password"
                type="password"
                label="Нууц үг"
                placeholder="******"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur}
              />
              <CustomInput
                name="repassword"
                type="password"
                label="Нууц үг давтах"
                placeholder="******"
                onChange={formik.handleChange}
                value={formik.values.repassword}
                error={
                  formik.touched.repassword && Boolean(formik.errors.repassword)
                }
                helperText={
                  formik.touched.repassword && formik.errors.repassword
                }
                onBlur={formik.handleBlur}
              />
            </Stack>
            <Button
              variant="contained"
              disableElevation
              disabled={!formik.values.password || !formik.values.repassword}
              sx={{ width: "388px", height: "48px" }}
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Үргэлжлүүлэх
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
