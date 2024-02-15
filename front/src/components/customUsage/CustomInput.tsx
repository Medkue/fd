"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";

type CustomInputProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: HTMLInputTypeAttribute;
};

export const CustomInput = (props: TextFieldProps) => {
  const { label, type = "text", ...rest } = props;

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleShowPassword = () => {
    setIsPasswordShown((prev) => !prev);
  };

  return (
    <>
      <Stack width={"384px"} gap={0.5}>
        <Typography fontSize={14}> {label}</Typography>
        <TextField
          {...rest}
          type={type === "password" && isPasswordShown ? "text" : type}
          fullWidth
          inputProps={{ style: { backgroundColor: "#ECEDF0" } }}
          InputProps={{
            endAdornment: type === "password" && (
              <InputAdornment position="end" sx={{ bgcolor: "ECEDF0" }} >
                <IconButton onClick={handleShowPassword} >
                  {isPasswordShown ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ), style: { backgroundColor: "#ECEDF0" }
          }}
        />
      </Stack>
    </>
  );
};
