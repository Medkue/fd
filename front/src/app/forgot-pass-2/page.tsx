"use client";
import { CustomInput } from "@/components/customUsage/CustomInput";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

export default function Home() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { code: "" },
    onSubmit: () => {
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
                example@gmail.com
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
              onChange={formik.handleChange}
              value={formik.values.code}
              error={formik.touched.code && Boolean(formik.errors.code)}
              helperText={formik.touched.code && formik.errors.code}
              onBlur={formik.handleBlur}
            />
            <Button
              variant="contained"
              disableElevation
              disabled={!formik.values.code}
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
