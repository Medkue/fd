"use client"

import { api } from "@/app/common";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
    isLogged: boolean;
    setIsLogged: Dispatch<SetStateAction<boolean>>;
    signUp: (values: any) => void

};

type AuthProviderType = {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderType) => {
    const [isLogged, setIsLogged] = useState(false);
    const router = useRouter();

    const signUp = async (values: any) => {
        try {
            const res = await api.post("/logIn", {
                values
            })

            const { token } = res.data;


            if (!token) return alert("No token found")

            localStorage.setItem("token", token);

            setIsLogged(true);

            router.push("/")

        } catch (error: any) {
            alert(error.response.data.message)
        }


        return <AuthContext.Provider value={{ isLogged, setIsLogged, signUp }}>{children}</AuthContext.Provider>

    }
}

export const useAuth = () => {
    return useContext(AuthContext)
}