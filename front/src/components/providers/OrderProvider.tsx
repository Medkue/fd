"use client";

import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";


type OrderProviderType = {
    children: React.ReactNode;
}

type Basket = {
    img: string,
    name: string,
    price: number,
    ingedrients: string,
    count: number,
}


type OrderContextType = {
    basketOrder: Basket[];
    setBasketOrder: Dispatch<SetStateAction<Basket[]>>;
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    totalCost: () => void;
    basketTotal: number;
}

const OrderContex = createContext<OrderContextType>({} as OrderContextType)

export const OrderProvider = ({ children }: OrderProviderType) => {
    const [basketOrder, setBasketOrder] = useState<Basket[]>([]);
    const [iseFirstRender, setIsFirstRender] = useState(true);
    const [count, setCount] = useState(1);
    const [basketTotal, setBasketTotal] = useState(0);

    const totalCost = () => {
        basketOrder.map((item) => {
            setBasketTotal((prev) => prev + item.price * item.count)
        })
    }

    useEffect(() => {
        const basket = localStorage.getItem("basket");

        if (basket) { setBasketOrder(JSON.parse(basket)) }

        setIsFirstRender(false)
    }, [])

    useEffect(() => {
        if (iseFirstRender) return;

        localStorage.setItem("basket", JSON.stringify(basketOrder));

        totalCost();

    }, [basketOrder])

    return <OrderContex.Provider value={{ basketOrder, setBasketOrder, count, setCount, totalCost, basketTotal }}>{children}</OrderContex.Provider>

}

export const useOrder = () => useContext(OrderContex);