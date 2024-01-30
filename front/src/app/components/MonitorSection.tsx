import { Container, Stack } from "@mui/material"
import { MonitorCard } from "./MonitorCard"
import { DataProps } from "../main/page"



const data = [
    {
        svg: "/svg/delivery1",
        h1: "Хүргэлтийн төлөв хянах",
        p: "Захиалга бэлтгэлийн явцыг хянах"
    },
    {
        svg: "/svg/delivery2",
        h1: "Шуурхай хүргэлт",
        p: "Захиалга бэлтгэлийн явцыг хянах"
    },
    {
        svg: "/svg/delivery3",
        h1: "Эрүүл, баталгаат орц",
        p: "Захиалга бэлтгэлийн явцыг хянах"
    },
    {
        svg: "/svg/delivery4",
        h1: "Хоолны өргөн сонголт",
        p: "Захиалга бэлтгэлийн явцыг хянах"
    }
]

export const MonitorSection = () => {
    return (
        <Stack width="100vw">
            <Container>
                <Stack direction={"row"} justifyContent={"space-evenly"}>
                    {data.map((item) => {
                        return <MonitorCard svg={item.svg} h1={item.h1} p={item.p} />
                    })}
                </Stack>
            </Container>
        </Stack>
    )
}