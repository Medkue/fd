"use client";

import { api } from "@/common";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { Basket } from "./BasketProvider";

type OrderContextType = {
    district: string; setDistrict: Dispatch<SetStateAction<string>>;
    khoroo: string; setKhoroo: Dispatch<SetStateAction<string>>;
    apartment: string; setApartment: Dispatch<SetStateAction<string>>;
    detailedInfo: string; setDetailedInfo: Dispatch<SetStateAction<string>>;
    phoneNumber: string; setPhoneNumber: Dispatch<SetStateAction<string>>;
    paymentMethod: string; setPaymentMethod: Dispatch<SetStateAction<string>>;
    send: (params: SendType) => Promise<void>;
}

type foodArray = {

}

type SendType = {
    district: string;
    khoroo: string;
    apartment: string;
    detailedInfo: string;
    phoneNumber: string;
    paymentMethod: string;
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

    const send = async (params: SendType) => {
        try {
            const res = await api.post("food/order", {
                district: params.district,
                khoroo: params.khoroo,
                apartment: params.apartment,
                detailedInfo: params.detailedInfo,
                phoneNumber: params.phoneNumber,
                paymentMethod: params.paymentMethod,
                basket: params.basket,
            })

            console.log(res.data.message, "res");


        } catch (error) {

        }
    }



    return (<OrderContext.Provider value={{ district, setDistrict, khoroo, setKhoroo, apartment, setApartment, detailedInfo, setDetailedInfo, phoneNumber, setPhoneNumber, paymentMethod, setPaymentMethod, send }}>{children}</OrderContext.Provider>)


}

export const useOrder = () => useContext(OrderContext);