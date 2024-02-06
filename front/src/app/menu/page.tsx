"use client"
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Breakfast } from "../components/Breakfast";
import { Soup } from "../components/Soup";
import { MainCourse } from "../components/MainCourse";
import { Desert } from "../components/Desert";

export default function Menu() {
    const [category, setCategory] = useState("breakfast")
    return (
        <Stack width={"100vw"} mt={15}>
            <Container>
                <Stack gap={8}>
                    <Stack direction={"row"} justifyContent={"space-evenly"} gap={2}>
                        <Stack border={"1px solid #D6D8DB"} borderRadius={2} width={"100%"} justifyContent={"center"} alignItems={"center"} bgcolor={category === "breakfast" ? "#18BA51" : "#fff"}>
                            <Button onClick={() => {
                                setCategory("breakfast")
                            }} sx={{ color: category === "breakfast" ? "#fff" : "#000" }}>Breakfast</Button>
                        </Stack>
                        <Stack border={"1px solid #D6D8DB"} borderRadius={2} width={"100%"} justifyContent={"center"} alignItems={"center"} bgcolor={category === "soup" ? "#18BA51" : "#fff"}>
                            <Button onClick={() => {
                                setCategory("soup")
                            }} sx={{ color: category === "soup" ? "#fff" : "#000" }}>Soup</Button>
                        </Stack>
                        <Stack border={"1px solid #D6D8DB"} borderRadius={2} width={"100%"} justifyContent={"center"} alignItems={"center"} bgcolor={category === "main" ? "#18BA51" : "#fff"}>
                            <Button onClick={() => {
                                setCategory("main")
                            }} sx={{ color: category === "main" ? "#fff" : "#000" }}>Main Course</Button>
                        </Stack>
                        <Stack border={"1px solid #D6D8DB"} borderRadius={2} width={"100%"} justifyContent={"center"} alignItems={"center"} bgcolor={category === "desert" ? "#18BA51" : "#fff"}>
                            <Button onClick={() => {
                                setCategory("desert")
                            }} sx={{ color: category === "desert" ? "#fff" : "#000" }}>Desert</Button>
                        </Stack>
                    </Stack>
                    <Breakfast isShown={category === "breakfast" ? true : false} />
                    <Soup isShown={category === "soup" ? true : false} />
                    <MainCourse isShown={category === "main" ? true : false} />
                    <Desert isShown={category === "desert" ? true : false} />
                </Stack>
            </Container>
        </Stack>
    )
}