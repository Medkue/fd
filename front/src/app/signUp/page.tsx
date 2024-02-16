"use client";
import {
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import Image from "next/image";
import { CloudOff, CloudQueue } from "@mui/icons-material";
import { useState } from "react";
import { api } from "../common";
import { useFormik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";
import { useRouter } from "next/navigation";
import { CustomInput } from "@/components/customUsage/CustomInput";

YupPassword(yup);

const yupp = require("yup");

require("yup-password")(yupp);

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yupp
    .string()
    .password()
    .required(),
  location: yup.string().required(),
});

export default function Home() {
  const [isAgreed, setIsAgreed] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      location: "",
      repass: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await api.post("/signUp", {
          values,
        });

        if (res.data.status === "unsuccessful") return alert(res.data.message);

        router.push("/logIn");

        alert(res.data.message);
      } catch (error) {
        console.log(error);
      }
      console.log(values);
    },
  });

  const handler = () => {
    setIsAgreed((prev) => !prev);
  };

  return (
    <Stack
      width="100vw"
      bgcolor={"white"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={10}
    >
      <Stack width={448} p={4} gap={2}>
        <Typography
          alignSelf={"center"}
          fontSize={28}
          fontWeight={700}
          margin={4}
        >
          Бүртгүүлэх
        </Typography>
        <CustomInput

          label={"Нэр"}
          type="text"
          placeholder="Нэрээ оруулна уу"
          onBlur={formik.handleBlur}
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <CustomInput
          label={"Имэйл"}
          type="text"
          placeholder="И-мэйл хаягаа оруулна уу"
          onBlur={formik.handleBlur}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && (formik.errors.email)}
        />
        <CustomInput
          label={"Хаяг"}
          type="text"
          placeholder="Та хаягаа оруулна уу"
          onBlur={formik.handleBlur}
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          error={formik.touched.location && Boolean(formik.errors.location)}
          helperText={
            formik.touched.location && (formik.errors.location)
          }
        />
        <CustomInput
          label={"Нууц үг"}
          type="password"
          placeholder="Нууц үгээ оруулна уу"
          onBlur={formik.handleBlur}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={
            formik.touched.password && (formik.errors.password)
          }
        />
        <CustomInput
          label={"Нууц үг давтах"}
          type="password"
          placeholder="Нууц үгээ оруулна уу"
          name="re-pass"
        />

        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <IconButton onClick={handler}>
            {isAgreed ? <CloudQueue /> : <CloudOff />}
          </IconButton>
          <Typography fontWeight={400} fontSize={14} color={"#161616"}>
            Үйлчилгээний нөхцөл зөвшөөрөх
          </Typography>
        </Stack>
        <Button
          variant={isAgreed ? "contained" : "outlined"}
          disableElevation
          sx={{ width: "388px", height: "48px" }}
          disabled={!isAgreed}
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
}
