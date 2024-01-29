"use client";
import {
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { CustomInput } from "../components";
import Image from "next/image";
import { CloudOff, CloudQueue } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { useAuth } from "../layout";
import { api } from "../common";
import { useFormik } from "formik"
import { string } from "yup";
import * as yup from "yup";

const validationSchema = yup.object(
  {
    name: yup.string().required(),
    email: yup.string().email().required(),

  }
)

export default function Home() {
  const {
    email,
    password,
    emailHandler,
    passwordHandler,
    name,
    nameHandler,
    location,
    locationHandler,
  } = useAuth();
  const [isAgreed, setIsAgreed] = useState(false);
  const [rePass, setRePass] = useState("");

  const formik = useFormik({
    initialValues: {
      name: string,
      email: string,
      password: string,
      location: string,
    }validationSchema: {

    },
    onSubmit: (values)
  });

  const rePassHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRePass(event.target.value);
  };

  const handler = () => {
    setIsAgreed((prev) => !prev);
  };
  type SendProps = {
    name: string;
    email: string;
    password: string;
    location: string;
  };
  const send = async (props: SendProps) => {
    try {
      const res = await api.post("/signUp", {
        name,
        email,
        password,
        location,
      });

      alert(res.data.message);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Stack
      width="100vw"
      bgcolor={"white"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Container>
        <Stack width={448} p={4}>
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
            value={name}
            onChange={nameHandler}
          />
          <CustomInput
            label={"Имэйл"}
            type="text"
            placeholder="И-мэйл хаягаа оруулна уу"
            value={email}
            onChange={emailHandler}
          />
          <CustomInput
            label={"Хаяг"}
            type="text"
            placeholder="Та хаягаа оруулна уу"
            value={location}
            onChange={locationHandler}
          />
          <CustomInput
            label={"Нууц үг"}
            type="password"
            placeholder="Нууц үгээ оруулна уу"
            value={password}
            onChange={passwordHandler}
          />
          <CustomInput
            label={"Нууц үг давтах"}
            type="password"
            placeholder="Нууц үгээ оруулна уу"
            value={rePass}
            onChange={rePassHandler}
          />

          <Stack direction={"row"} gap={1}>
            <IconButton onClick={handler}>
              {isAgreed ? <CloudQueue /> : <CloudOff />}
            </IconButton>
            <Typography fontWeight={400} fontSize={14} color={"#161616"}>
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Typography>
          </Stack>
          <Button
            variant="outlined"
            disableElevation
            sx={{ width: "388px", height: "48px" }}
            disabled={!isAgreed}
            onClick={() => {
              if (password !== rePass) {
                return alert("repass doesn't match");
              }

              send(name, email, password, location);
            }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
}
