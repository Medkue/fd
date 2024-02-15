import { Container, Hidden, Stack, Typography } from "@mui/material";
import Image from "next/image";

export type FoodCardProps = {
    svg: string;
    title: string;
    price: string;
    discount?: string;
    onclick: () => void
};

export const FoodCard = (props: FoodCardProps) => {
    const { svg, title, price, discount, onclick } = props;

    return (
        <Stack onClick={onclick}>
            <Stack gap={"14px"} >
                <Stack position={"relative"} borderRadius={2} overflow={"hidden"} height={186}>
                    <Image fill src={svg} alt="food image" objectFit="cover " />
                    <Stack
                        display={discount ? "flex" : "none"}
                        position={"absolute"}
                        top={"5%"}
                        right={"5%"}
                        bgcolor={"#18BA51"}
                        border={"2px solid white"}
                        borderRadius={16}
                        px={2}
                        py={0.5}
                    >
                        <Typography fontSize={18} fontWeight={600} color={"white"}>
                            {discount}%
                        </Typography>
                    </Stack>
                </Stack>
                <Stack>
                    <Typography fontSize={18} fontWeight={600}>
                        {title}
                    </Typography>
                    <Stack direction={"row"} gap={2}><Typography fontSize={18} fontWeight={600} color={"#18BA51"}>
                        {discount ? `${Number(price) * (1 - Number(discount) / 100)}$` : `${price}$`}
                    </Typography>
                        <Typography fontSize={18} sx={{ textDecoration: "line-through" }}> {discount ? price : ""}</Typography></Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
