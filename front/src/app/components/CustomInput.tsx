"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";


type CustomInputProps = {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    type?: HTMLInputTypeAttribute;
}

export const CustomInput = (props: CustomInputProps) => {
    const { label, placeholder, value, type = "text", onChange } = props

    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const handleShowPassword = () => {
        setIsPasswordShown((prev) => !prev)
    }

    return (<>
        <Stack width={"384px"}  gap={0.5}>
            <Typography fontSize={14}> {label}</Typography>
            <TextField placeholder={placeholder}
                value={value}
                type={type === "password" && isPasswordShown ? "text" : type} fullWidth
                onChange={onChange}
                sx={{
                    bgcolor: "#ECEDF0"
                }}
                inputProps={{ style: { padding: "14px 16px" } }}
                InputProps={{
                    endAdornment: type === "password" && (<InputAdornment position="end"><IconButton onClick={handleShowPassword} >
                        {isPasswordShown ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>)
                }}
            />
        </Stack >
    </>)
}