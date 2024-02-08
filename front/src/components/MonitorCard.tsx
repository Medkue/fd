import { Stack, Typography } from "@mui/material"
import Image from "next/image"


export type DataProps = {
    svg: string,
    h1: string,
    p: string,

}


export const MonitorCard = (props: DataProps) => {
    const { svg, h1, p } = props;
    return (
        <Stack p={2} gap={"15px"} borderRadius={2} boxShadow={"4px 4px 12px 0px rgba(0, 0, 0, 0.10)"}>
            <Image src={svg} width={60} height={60} alt="logo" />
            <Stack gap={.5}>
                <Typography fontSize={18} fontWeight={700}>{h1}</Typography>
                <Typography fontSize={14}>{p}</Typography>
            </Stack>
        </Stack>
    )
}