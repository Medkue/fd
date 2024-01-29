"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomSearch } from ".";
import { ChangeEvent, useState } from "react";

import Image from "next/image";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchOnChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchValue(event.target.value);
  };
  return (
    <Stack
      width="100vw"
      position="fixed"
      bgcolor="white"
      top={0}
      left={0}
      zIndex={99999}
    >
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
            <Image
              alt="pinecone logo"
              src="/svg/Logo.svg"
              width={31}
              height={26}
            />

            <Typography
              fontSize={14}
              fontWeight={700}
              paddingY={1}
              paddingX={2}
            >
              НҮҮР
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={700}
              paddingY={1}
              paddingX={2}
            >
              ХООЛНЫ ЦЭС
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={700}
              paddingY={1}
              paddingX={2}
            >
              ХҮРГЭЛТИЙН БҮС
            </Typography>
          </Stack>
          <Stack flexDirection={"row"} gap={1}>
            <CustomSearch
              placeHolder={"Search"}
              onChange={searchOnChangeHandler}
            />
            <Stack flexDirection={"row"} gap={1} paddingY={1} paddingX={2}>
              <Stack
                direction={"row"}
                gap={1}
                px={2}
                py={1}
                alignItems={"center"}
              >
                <Image
                  alt="basket logo"
                  width={24}
                  height={24}
                  src="/svg/Component 2.svg"
                />
                <Typography fontSize={14} fontWeight={700}>
                  Сагс
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                gap={1}
                px={2}
                py={1}
                alignItems={"center"}
              >
                <Image
                  alt="profile logo"
                  width={18}
                  height={18}
                  src="/svg/Vector.svg"
                />
                <Typography fontSize={14} fontWeight={700}>
                  Нэвтрэх
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
