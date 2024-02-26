"use client"

import { StepOne } from "@/components/pass-recovery/StepOne";
import { StepThree } from "@/components/pass-recovery/StepThree";
import { StepTwo } from "@/components/pass-recovery/StepTwo";
import { useOtp } from "@/components/providers/OtpProvider";


export default function Home() {
    const { step, setStep } = useOtp();
    return (
        <>{step === 1 ?
            <StepOne /> : step === 2 ?
                <StepTwo /> : step === 3 ?
                    <StepThree /> : ""}
        </>
    )

}