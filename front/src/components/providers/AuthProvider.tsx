"use client"

import { api } from "@/app/common";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
    isLogged: boolean;
    setIsLogged: Dispatch<SetStateAction<boolean>>;
    signUp: (values: ValuesType) => Promise<void | JSX.Element>;
    setCheck: Dispatch<SetStateAction<boolean>>

};

export type ValuesType = {
    email: string;
    password: string;
}

type AuthProviderType = {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderType) => {
    const [isLogged, setIsLogged] = useState(false);
    const [checkToken, setCheck] = useState(false)
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [checkToken])

    const signUp = async (values: ValuesType) => {

        try {
            const res = await api.post("/logIn", {
                email: values.email,
                password: values.password,
            })

            const { token } = res.data;


            if (!token) return alert("No token found")

            localStorage.setItem("token", token);

            setIsLogged(true);



            router.push("/main")

        } catch (error: any) {
            alert(error.response.data.message)
        }
    }
    return <AuthContext.Provider value={{ isLogged, setIsLogged, signUp, setCheck }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}