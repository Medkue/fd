"use client";

import { Container, IconButton, Stack, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { BasicModal } from "../modals/BasicModal";
import { useAuth } from "../providers/AuthProvider";
import { CustomSearch } from "..";
import { useUser } from "../providers/UserProvider";
import { Drawer } from "../orderComps/Drawer";

type HeaderProps = {
  // toggleDrawer: () => void;
}
export const Header = (props: HeaderProps) => {
  const { userName, isAdmin } = useUser();
  const { isLogged, setIsLogged } = useAuth();
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const searchOnChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchValue(event.target.value);
  };

  const toggleDrawer = () => {
    setState((prev) => !prev);
  }



  return (
    <Stack
      width="100vw"
      position="fixed"
      bgcolor="white"
      top={0}
      left={0}
      zIndex={10}
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
              color={pathName.includes("main") ? "#18BA51" : "#000"}
              onClick={() => {
                router.push("/main");
              }}
              sx={{ cursor: "pointer" }}
            >
              НҮҮР
            </Typography>

            <Typography
              fontSize={14}
              fontWeight={700}
              paddingY={1}
              paddingX={2}
              color={pathName.includes("menu") ? "#18BA51" : "#000"}
              onClick={() => {
                router.push("/menu");
              }}
              sx={{ cursor: "pointer" }}
            >
              ХООЛНЫ ЦЭС
            </Typography>


            <Typography
              fontSize={14}
              fontWeight={700}
              paddingY={1}
              paddingX={2}
              color={pathName.includes("delivery") ? "#18BA51" : "#000"}
              onClick={() => {
                router.push("/delivery");
              }}
              sx={{ cursor: "pointer" }}
            >
              ХҮРГЭЛТИЙН БҮС
            </Typography>
            <Typography
              display={isAdmin ? "flex" : "none"}
              fontSize={14}
              fontWeight={700}
              paddingY={1}
              paddingX={2}
              color={pathName.includes("admin") ? "#18BA51" : "#000"}
              onClick={() => {
                router.push("/admin")
              }}
              sx={{ cursor: "pointer" }}
            >
              ADMIN
            </Typography>

          </Stack>
          <Stack flexDirection={"row"} gap={1}>
            <CustomSearch
              placeHolder={"Search"}
              onChange={searchOnChangeHandler}
            />
            <Stack flexDirection={"row"} gap={1} paddingY={1} paddingX={2} >
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
                  onClick={toggleDrawer}
                />
                <Typography fontSize={14} fontWeight={700} onClick={toggleDrawer} sx={{ cursor: "pointer" }}>
                  Сагс
                </Typography>
                <Drawer state={state} toggleDrawer={toggleDrawer} />
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
                  src={pathName.includes("user") ? "/svg/usergr.svg" : "/svg/Vector.svg"}
                  onClick={handleOpen}
                />
                <Typography fontSize={14} fontWeight={700} color={pathName.includes("user") ? "#18BA51" : "#000"} onClick={() => {
                  if (userName) {
                    router.push("/user")
                  } else {
                    handleOpen()
                  }
                }} sx={{ cursor: "pointer" }}>
                  {isLogged ? userName : "Нэвтрэх"}
                </Typography>
                <BasicModal
                  open={open}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
