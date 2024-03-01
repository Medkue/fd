"use client"
import { BasketOrder } from "@/components/orderComps/BasketOrder";
import { Drawer } from "@/components/orderComps/Drawer";
import { useBasket } from "@/components/providers/BasketProvider";
import { useOrder } from "@/components/providers/OrderProvider";
import { PlaceOutlined } from "@mui/icons-material";
import { Button, Checkbox, Container, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { NumericFormat } from "react-number-format";


const districts = [
    "Баянзүрх дүүрэг",
    "Хан-Уул дүүрэг",
    "Баянгол дүүрэг",
    "Сонгинохайрхан дүүрэг",
    "Чингэлтэй дүүрэг",
]

const horoo = [
    "1-р хороо",
    "2-р хороо",
    "3-р хороо",
    "4-р хороо",
    "5-р хороо",
    "6-р хороо",
    "7-р хороо",
]

const apartments = [
    "Нархан хотхон",
    "26-р байр",
    "Хоймор хотхон",
    "45-р байр",
    "Зайсан хотхон "
]


export default function Home() {
    // const [paymentMethod, setPaymentMethod] = useState("Бэлнээр")
    const { basketOrder, setCount, basketTotal } = useBasket();
    // const [district, setDistrict] = useState("");
    // const [khoroo, setKhoroo] = useState("");
    // const [apartment, setApartment] = useState("");
    // const [detailedInfo, setDetailedInfo] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState("")

    const { district, setDistrict, khoroo, setKhoroo, apartment, setApartment, detailedInfo, setDetailedInfo, phoneNumber, setPhoneNumber, paymentMethod, setPaymentMethod, send } = useOrder();
    const isValid = district && khoroo && apartment && phoneNumber && detailedInfo

    return (
        <Stack width="100vw">
            <Container>
                <Stack direction={"row"} justifyContent={"space-between"} gap={20} p={10}>
                    <Stack flex={1} flexBasis={0} >
                        <Stack direction={"row"} gap={3} alignItems={"center"} p={2} >
                            {isValid ? <Image src={"/svg/done.svg"} alt="state img" width={48} height={48} /> :
                                <Image src={"/svg/State.svg"} alt="state img" width={48} height={48} />}
                            <Stack >
                                <Typography fontSize={14} color={"#8B8E95"}>Алхам 1</Typography>
                                <Typography fontSize={20}>Хаягийн мэдээлэл оруулах</Typography>
                                {isValid ? <Typography color={"#18BA51"}>Оруулсан</Typography> :
                                    <Typography color={"#0468C8"}>Хүлээгдэж байна</Typography>}
                            </Stack>
                        </Stack>
                        <Stack p={3} gap={5} borderRadius={2} sx={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}>
                            <Stack gap={2}>
                                <Typography fontSize={14} >Хаяг аа оруулна уу</Typography>
                                <Select value={district} sx={{ color: "#000" }} onChange={(event) => {
                                    setDistrict(event.target.value);

                                }}
                                >
                                    {districts.map((item) => {
                                        return (<MenuItem value={item}><Stack direction={"row"} gap={1}> <PlaceOutlined />{item}</Stack></MenuItem>)
                                    })}
                                </Select>
                                <Select value={khoroo} sx={{ color: "#000" }} onChange={(event: SelectChangeEvent) => {
                                    setKhoroo(event.target.value as string)
                                        ;
                                }} >
                                    {horoo.map((item: string) => {
                                        return (<MenuItem value={item}><Stack direction={"row"} gap={1}> <PlaceOutlined />{item}</Stack></MenuItem>)
                                    })}
                                </Select>
                                <Select value={apartment} sx={{ color: "#000" }} onChange={(event: SelectChangeEvent) => {
                                    setApartment(event.target.value as string);
                                }} >
                                    {apartments.map((item: string) => {
                                        return (<MenuItem value={item}>
                                            <Stack direction={"row"} gap={1}> <PlaceOutlined />{item}</Stack></MenuItem>)
                                    })}
                                </Select>
                            </Stack>
                            <Stack gap={1}>
                                <Typography fontSize={14}>Нэмэлт мэдээлэл</Typography>
                                <TextField placeholder="Орц, давхар, орцны код ..." inputProps={{ style: { paddingBottom: "112px" } }} sx={{ bgcolor: "#F7F7F8" }} onChange={(event) => {
                                    setDetailedInfo(event.target.value);
                                }} />
                            </Stack>
                            <Stack gap={1}>
                                <Typography fontSize={14}>Утасны дугаар*</Typography>
                                <TextField type="number" inputProps={{ min: 0, max: 99999999 }} placeholder="Утасны дугаараа оруулна уу" sx={{ bgcolor: "#F7F7F8" }} onChange={(event) => {
                                    setPhoneNumber(event.target.value);
                                }} />
                            </Stack>
                            <Stack gap={1}>
                                <Typography fontSize={14}>Төлбөр төлөх </Typography>
                                <Stack direction={"row"} justifyContent={"space-between"} >
                                    <Stack direction={"row"} gap={1} alignItems={"center"} width={175.5} onClick={() => {
                                        setPaymentMethod("Бэлнээр")
                                    }}>
                                        <Checkbox checked={paymentMethod === "Бэлнээр"} />
                                        <Typography color={"#8B8E95"}>Бэлнээр</Typography>
                                    </Stack>
                                    <Stack direction={"row"} gap={1} alignItems={"center"} width={175.5} onClick={() => {
                                        setPaymentMethod("Картаар")
                                    }}>
                                        <Checkbox checked={paymentMethod === "Картаар"} />
                                        <Typography color={"#8B8E95"}>Картаар</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </Stack>
                    </Stack>
                    <Stack flex={1} flexBasis={0} >
                        <Stack direction={"row"} gap={3} alignItems={"center"} p={2} >
                            <Image src={"/svg/State.svg"} alt="state img" width={48} height={48} />
                            <Stack >
                                <Typography fontSize={14} color={"#8B8E95"}>Алхам 2</Typography>
                                <Typography fontSize={20}>Захиалга баталгаажуулах</Typography>
                                <Typography color={"#0468C8"}>Хүлээгдэж байна</Typography>
                            </Stack>
                        </Stack>
                        <Stack height={612} borderRadius={2} sx={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}>
                            <Stack width={586} alignItems={"center"} p={3} height={"100vh"} position={"relative"} >
                                <Stack height={"90%"} overflow={"scroll"} >{basketOrder && basketOrder.map((item, index) => {
                                    return (<BasketOrder key={index} name={item.name} price={item.price} ingedrients={item.ingedrients} image={item.img} count={item.count} id={item.id} setCount={setCount} isOrder={true} />)
                                })}

                                </Stack>
                                <Stack height={172} alignItems={"center"} direction={"row"} width={"100%"} p={"10px 32px"} position={"absolute"} bottom={"0px"} gap={10}>
                                    <Stack flex={1} flexBasis={0}>
                                        <Typography fontSize={18} color={"#5E6166"}>Нийт төлөх дүн</Typography>

                                        <NumericFormat value={basketTotal}
                                            thousandSeparator=","
                                            displayType="text"
                                            suffix="₮"
                                            renderText={(value) => <b>{value}</b>}
                                        />
                                    </Stack>
                                    <Button variant="contained" sx={{ flex: 1, flexBasis: 0, height: '48px' }} disabled={!isValid || !basketTotal} onClick={() => {
                                        send({ district, khoroo, apartment, detailedInfo, phoneNumber, paymentMethod, basket: basketOrder })
                                    }}>Захиалах</Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Container >
        </Stack >
    )
}