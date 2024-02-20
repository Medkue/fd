"use client";
import { CustomInput } from "@/components/customUsage/CustomInput";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { api } from "../common";
import { useOtp } from "@/components/providers/OtpProvider";

export default function Home() {
  const { email, otp, sendOtp, setOtp } = useOtp();
  const router = useRouter();

  const formik = useFormik({
    initialValues: { code: "" },
    onSubmit: () => {
      try {
        const res = api.post("/email/get", {

        })
      } catch (error) {

      }
      router.push("/forgot-pass-3");
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
            <Stack direction={"row"} gap={1} width={448}>
              <Typography fontWeight={500} color={"#695C08"}>
                Таны
              </Typography>
              <Typography fontWeight={500} color={"#18BA51"}>
                {email}
              </Typography>
              <Typography fontWeight={500} color={"#695C08"}>
                хаяг руу сэргээх код илгээх болно.
              </Typography>
            </Stack>
            <CustomInput
              name="code"
              type="password"
              label="Нууц үг сэргээх код"
              placeholder="******"
              onChange={(event) => {
                event.preventDefault();
                setOtp(event.target.value);
              }}
              value={otp}
              // error={formik.tou && Boolean(formik.errors.code)}
              // helperText={formik.touched.code && formik.errors.code}
              onBlur={formik.handleBlur}
            />
            <Button
              variant="contained"
              disableElevation
              disabled={!otp}
              sx={{ width: "388px", height: "48px" }}
              onClick={() => {
                sendOtp(email, otp)
                console.log(otp, "otp");

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
