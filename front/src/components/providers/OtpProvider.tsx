"use client"

import { api } from "@/app/common";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState, createContext, useContext, useEffect } from "react";

type OtpProviderType = {
    children: React.ReactNode;
}

type OtpContextType = {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    otp: string;
    setOtp: Dispatch<SetStateAction<string>>
    sendEmail: (email: string) => Promise<void | JSX.Element>;
    sendOtp: (email: string, otp: string) => Promise<void | JSX.Element>;
}

const OtpContext = createContext<OtpContextType>({} as OtpContextType)

export const OtpProvider = ({ children }: OtpProviderType) => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    const sendEmail = async (email: string) => {
        try {
            const res = await api.post("/email/send", {
                email: email
            })

            if (res.data.message !== "Email sent successfully") return alert("user not found")

            const otp = res.data;

            if (!otp) return alert(res.data.message)

            useEffect(() => {
                setEmail(email)
            }, [])
            setOtp(otp)

        } catch (error) {
            console.log(error);
        }
        router.push("/forgot-pass-2")

    }

    const sendOtp = async (email: string, otp: string) => {
        try {
            const res = await api.post("/email/get", {
                email, otp
            })

            if (res.data.message !== "Success") return alert(res.data.message)

            router.push("/forgot-pass-3")

            return console.log(res.data.message);


        } catch (error) {
            console.log(error);
        }

    }
    return <OtpContext.Provider value={{ email, otp, sendEmail, sendOtp, setEmail, setOtp }}>{children}</OtpContext.Provider>
}

export const useOtp = () => useContext(OtpContext);