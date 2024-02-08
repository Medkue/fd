"use client"

import { Dispatch, useContext, useState } from "react";
import { createContext } from "vm";
const [isLogged, setIsLogged] = useState(false);

type AuthContextType = {
    isLogged: boolean;
    setIsLogged: Dispatch<SetStateAction<boolean>>;

};
export const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
);
const useAuth = () => useContext(AuthContext);




const AuthProvider = () => {



}