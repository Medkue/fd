"use client";

import { api } from "@/common";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { Basket } from "./BasketProvider";
import { useRouter } from "next/navigation";



type OrderContextType = {
    district: string; setDistrict: Dispatch<SetStateAction<string>>;
    khoroo: string; setKhoroo: Dispatch<SetStateAction<string>>;
    apartment: string; setApartment: Dispatch<SetStateAction<string>>;
    detailedInfo: string; setDetailedInfo: Dispatch<SetStateAction<string>>;
    phoneNumber: string; setPhoneNumber: Dispatch<SetStateAction<string>>;
    paymentMethod: string; setPaymentMethod: Dispatch<SetStateAction<string>>;
    process: string;
    // orderNumber: string;
    // createdAt: string;
    order: Array;
    send: (params: SendType) => Promise<void>;
}

type OrderType = {
    process: string
}


type SendType = {
    district: string;
    khoroo: string;
    apartment: string;
    detailedInfo: string;
    phoneNumber: string;
    paymentMethod: string;
    totalPrice: string;
    process: string;
    basket: Basket[];
}

type OrderProviderType = {
    children: React.ReactNode;
}

const OrderContext = createContext<OrderContextType>({} as OrderContextType);

export const OrderProvider = ({ children }: OrderProviderType) => {
    const [district, setDistrict] = useState("");
    const [khoroo, setKhoroo] = useState("");
    const [apartment, setApartment] = useState("");
    const [detailedInfo, setDetailedInfo] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("Бэлнээр");
    const [process, setProcess] = useState("on waiting list");
    // const [orderNumber, setOrderNumber] = useState("");
    // const [createdAt, setCreatedAt] = useState("");

    const [order, setOrder] = useState([]);
    const router = useRouter();

    const send = async (params: SendType) => {

        const token = localStorage.getItem("token");

        if (!token) return alert("User must log in first "), router.push("/logIn")

        try {
            const res = await api.post("food/order", {
                district: params.district,
                khoroo: params.khoroo,
                apartment: params.apartment,
                detailedInfo: params.detailedInfo,
                phoneNumber: params.phoneNumber,
                paymentMethod: params.paymentMethod,
                basket: params.basket,
                process: params.process,
                totalPrice: params.totalPrice,

            }, {
                headers: { authorization: token }
            })

            console.log(res.data.message, "res");


        } catch (error) {

        }
    }


    const getOrder = async () => {

        const token = localStorage.getItem("token");

        if (!token) return alert("User must log in first "), router.push("/logIn")

        try {
            const res = await api.get("food/getOrder", {
                headers: { authorization: token }
            })

            // const { orderNumber, process, createdAt } = res.data;

            // setCreatedAt(createdAt);
            // setProcess(process);
            // setOrderNumber(orderNumber);


        } catch (error) {
            console.log(error);

        }

    }



    return (<OrderContext.Provider value={{ district, setDistrict, khoroo, setKhoroo, apartment, setApartment, detailedInfo, setDetailedInfo, phoneNumber, setPhoneNumber, paymentMethod, setPaymentMethod, send, process }}>{children}</OrderContext.Provider>)


}

export const useOrder = () => useContext(OrderContext);