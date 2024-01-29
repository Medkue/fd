"use client";
import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from ".";
import { useAuth } from "@/app/layout";
import { useRouter } from "next/navigation";

export const LogIn = () => {
  const { email, emailHandler, password, passwordHandler } = useAuth();
  const router = useRouter();
  return (
    <Container sx={{ width: "100vw" }}>
      <Stack alignItems="center" justifyContent="center" height="100vh">
        <Stack gap={2}>
          <Typography
            alignSelf={"center"}
            fontSize={28}
            fontWeight={700}
            margin={4}
          >
            Нэвтрэх
          </Typography>
          <CustomInput
            label={"Имэйл"}
            type="text"
            onChange={emailHandler}
            value={email}
          />
          <CustomInput
            label={"Нууц үг"}
            type="password"
            onChange={passwordHandler}
            value={password}
          />
          <Typography
            alignSelf={"end"}
            marginTop={-1}
            fontSize={14}
            fontWeight={400}
          >
            Нууц үг сэргээх
          </Typography>
        </Stack>
        <Stack gap={4} marginTop={4}>
          <Button
            variant="contained"
            disableElevation
            disabled={!email || !password}
            sx={{ width: "388px", height: "48px" }}
          >
            Нэвтрэх
          </Button>
          <Typography fontSize={14} fontWeight={400} alignSelf={"center"}>
            Эсвэл
          </Typography>
          <Button
            variant="outlined"
            disableElevation
            sx={{ width: "388px", height: "48px" }}
            onClick={() => {
              router.push("/signUp");
            }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
