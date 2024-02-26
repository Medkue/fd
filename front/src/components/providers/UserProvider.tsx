"use client"

import { api } from "@/common";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";

type UserProviderProps = {
    children: React.ReactNode;
}

type UserContextType = {
    userName: string;
    setUserName: Dispatch<SetStateAction<string>>;
    userEmail: string;
    setUserEmail: Dispatch<SetStateAction<string>>;
    userImg: string;
    setUserImg: Dispatch<SetStateAction<string>>;
    userNumber: number;
    isAdmin: boolean;
    setIsAdmin: Dispatch<SetStateAction<boolean>>
    setUserNumber: Dispatch<SetStateAction<number>>
    getUser: () => Promise<void | JSX.Element>;
}

const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: UserProviderProps) => {
    const { isLogged } = useAuth()
    const [userName, setUserName] = useState("");
    const [userNumber, setUserNumber] = useState(Number);
    const [userEmail, setUserEmail] = useState("");
    const [userImg, setUserImg] = useState("")
    const [isUpdated, setIsUpdated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const getUser = async () => {

        const token = localStorage.getItem("token");

        if (!token) return

        const res = await api.get("/user/get", {
            headers: { authorization: token }
        })


        const { name, email, phoneNumber, role, img } = res.data;


        setUserEmail(email);
        setUserName(name);
        setUserNumber(phoneNumber);
        setUserImg(img)
        if (role === "admin") {
            setIsAdmin(true);
        }


    }

    useEffect(() => {
        if (isLogged) {
            getUser()
        }
    }, [isLogged, isUpdated])

    return <UserContext.Provider value={{ userName, setUserName, userNumber, setUserNumber, userEmail, setUserEmail, getUser, isAdmin, setIsAdmin, userImg, setUserImg }}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext);