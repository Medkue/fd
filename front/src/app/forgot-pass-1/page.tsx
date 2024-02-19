"use client";
import { CustomInput } from "@/components/customUsage/CustomInput";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email(),
});

export default function Home() {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
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
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
            />
            <Button
              variant="contained"
              disableElevation
              disabled={!formik.values.email}
              sx={{ width: "388px", height: "48px" }}
              onClick={() => {}}
            >
              Үргэлжлүүлэх
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
