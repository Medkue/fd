"use client";
import { CustomInput } from "@/components/customUsage/CustomInput";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { api } from "../../common";
import { useOtp } from "@/components/providers/OtpProvider";

const validationSchema = yup.object({
  email: yup.string().email(),
});

export default function Home() {
  const { email, otp, sendEmail, setEmail } = useOtp();
  const router = useRouter();
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await api.post("/email/send", {
          email: values.email
        })



        router.push("/forgot-pass-2")
      } catch (error) {
        console.log(error);
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
              Нууц үг сэргээх
            </Typography>
            <CustomInput
              name="email"
              type="text"
              label="Имэйл"
              placeholder="Имэйл хаягаа оруулна уу"
              onChange={(event) => {
                event.preventDefault();
                setEmail(event.target.value);
              }}
              value={email}
              // error={email && (email)}
              helperText={email && email}
              onBlur={formik.handleBlur}
            />
            <Button
              variant="contained"
              disableElevation
              disabled={!email}
              sx={{ width: "388px", height: "48px" }}
              onClick={() => {
                sendEmail(email)
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
