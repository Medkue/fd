import { Button, Container, Modal, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { CustomInput } from ".";
type BasicModalProps = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

export const BasicModal = (props: BasicModalProps) => {
  //   const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { open, handleClose, handleOpen } = props;
  const [password, setPassword] = useState("");
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  const emailHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack position={"relative"} top={"30%"} left={"40%"}>
        <Stack
          alignItems="center"
          justifyContent="center"
          height="549px"
          width={"448px"}
          borderRadius={4}
          bgcolor={"white"}
          sx={{}}
        >
          <Stack gap={2}>
            <Typography alignSelf={"center"} fontSize={28} fontWeight={700}>
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
              sx={{ width: "384px", height: "48px" }}
            >
              Нэвтрэх
            </Button>
            <Typography fontSize={14} fontWeight={400} alignSelf={"center"}>
              Эсвэл
            </Typography>
            <Button
              variant="outlined"
              disableElevation
              sx={{ width: "384px", height: "48px" }}
            >
              Бүртгүүлэх
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};
