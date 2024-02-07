"use client"
import { Button, Container, Modal, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { CustomInput } from ".";
import { useFormik } from "formik";
import { api } from "../common";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useAuth } from "../layout";

type BasicModalProps = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};


const validationSchema = yup.object({
  email: yup.string().email(),
  password: yup.string(),
});

export const BasicModal = (props: BasicModalProps) => {
  const { setIsLogged } = useAuth();
  const { open, handleClose, handleOpen } = props;
  const router = useRouter();



  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    }, validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await api.post("/logIn", {
          values
        })

        const { token } = res.data;


        if (!token) return alert("No token found")

        localStorage.setItem("token", token);


        setIsLogged(true)
        handleClose();

      } catch (error: any) {
        alert(error.response.data.message)
      }
    }
  });


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <Stack position={"relative"} top={"30%"} left={"40%"}> */}
      <Stack
        alignItems="center"
        justifyContent="center"
        height="549px"
        width={"448px"}
        borderRadius={4}
        bgcolor={"white"}
        position={"relative"} top={"30%"} left={"40%"}
      >
        <Stack gap={2}>
          <Typography alignSelf={"center"} fontSize={28} fontWeight={700}>
            Нэвтрэх
          </Typography>
          <CustomInput
            label={"Имэйл"}
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <CustomInput
            label={"Нууц үг"}
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
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
            sx={{ width: "384px", height: "48px" }}
            onClick={() => { formik.handleSubmit() }}
          >
            Нэвтрэх
          </Button>
          <Typography fontSize={14} fontWeight={400} alignSelf={"center"}>
            Эсвэл
          </Typography>
          <Button
            variant="outlined"
            disableElevation
            sx={{ width: "384px", height: "48px" }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
      {/* </Stack> */}
    </Modal>
  );
};
