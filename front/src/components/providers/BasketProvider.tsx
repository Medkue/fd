"use client";

import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";


type BasketProviderType = {
    children: React.ReactNode;
}

export type Basket = {
    img: string,
    name: string,
    price: number,
    ingedrients: string,
    count: number,
    id: string,
}


type BasketContextType = {
    basketOrder: Basket[];
    setBasketOrder: Dispatch<SetStateAction<Basket[]>>;
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    totalCost: () => void;
    basketTotal: string;
}

const BasketContext = createContext<BasketContextType>({} as BasketContextType)

export const BasketProvider = ({ children }: BasketProviderType) => {
    const [basketOrder, setBasketOrder] = useState<Basket[]>([]);
    const [iseFirstRender, setIsFirstRender] = useState(true);
    const [count, setCount] = useState(1);
    const [basketTotal, setBasketTotal] = useState("");

    const totalCost = () => {
        let total = 0;
        basketOrder.map((item) => {
            total += item.price * item.count
        })

        setBasketTotal(total.toString());
    }

    useEffect(() => {
        const basket = localStorage.getItem("basket");

        if (basket) { setBasketOrder(JSON.parse(basket)) }

        setIsFirstRender(false)

        totalCost();
    }, [])

    useEffect(() => {
        if (iseFirstRender) return;

        localStorage.setItem("basket", JSON.stringify(basketOrder));

        totalCost();

    }, [basketOrder])

    return <BasketContext.Provider value={{ basketOrder, setBasketOrder, count, setCount, totalCost, basketTotal }}>{children}</BasketContext.Provider>

}

export const useBasket = () => useContext(BasketContext);