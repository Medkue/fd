import { Container, Stack } from "@mui/material"
import { MonitorCard } from "./MonitorCard"




const data = [
    {
        svg: "/svg/delivery1.svg",
        h1: "Хүргэлтийн төлөв хянах",
        p: "Захиалга бэлтгэлийн явцыг хянах"
    },
    {
        svg: "/svg/delivery2.svg",
        h1: "Шуурхай хүргэлт",
        p: "Захиалга бэлтгэлийн явцыг хянах"
    },
    {
        svg: "/svg/delivery3.svg",
        h1: "Эрүүл, баталгаат орц",
        p: "Захиалга бэлтгэлийн явцыг хянах"
    },
    {
        svg: "/svg/delivery4.svg",
        h1: "Хоолны өргөн сонголт",
        p: "Захиалга бэлтгэлийн явцыг хянах"
    }
]

export const MonitorSection = () => {
    return (
        <Stack width="100vw" mt={"122px"} >
            <Container>
                <Stack direction={"row"} justifyContent={"space-evenly"}>
                    {data.map((item, index) => {
                        return <MonitorCard key={index} svg={item.svg} h1={item.h1} p={item.p} />
                    })}
                </Stack>
            </Container>
        </Stack>
    )
}