import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const MainBanner = () => {
  return (
    <Stack
      width={"100vw"}
      bgcolor={"#18BA51"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"} width={"90%"}>
          <Image
            src="/svg/food.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
          <Stack gap={"23px"} width={"40%"}>
            <Typography
              fontSize={55}
              fontWeight={600}
              fontFamily={"Poppins"}
              color={"white"}
              flexWrap={"wrap"}
            >
              Pinecone Food delivery
            </Typography>
            <Stack width={"100%"} height={"2px"} bgcolor={"white"}></Stack>
            <Typography
              fontSize={22}
              fontWeight={700}
              fontFamily={"Comfortaa"}
              fontStyle={"normal"}
              color={"white"}
              flexWrap={"wrap"}
            >
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Stack>
          <Stack position={"relative"}>
            <Image
              src="/svg/bowl.png"
              alt="bowl of food pic"
              width={443}
              height={438}
            ></Image>
            <Image
              src="/svg/bowl2.png"
              alt="bowl of food pic"
              width={313}
              height={313}
              style={{ position: "absolute", bottom: "0", right: "-25%" }}
            ></Image>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
