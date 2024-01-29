"use client"
import { Search } from "@mui/icons-material";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { ChangeEventHandler } from "react";


type SearchProps = {
    placeHolder: string;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}

export const CustomSearch = (props: SearchProps) => {
    const { placeHolder, onChange } = props;
    return (
        <Stack pt={1} >
            <TextField sx={{ borderRadius: "8px", width: "250px", height: "40px" }} placeholder="Хайх" onChange={onChange}
                inputProps={{
                    style: {
                        padding: "8px 16px",
                    }
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start"><Search /></InputAdornment>
                    )
                }} />
        </Stack>
    )
}