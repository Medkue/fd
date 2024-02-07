"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/app/components";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "@/app/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  ChangeEvent,
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

const inter = Inter({ subsets: ["latin"] });

type AuthContextType = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  nameHandler: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  emailHandler: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  passwordHandler: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  locationHandler: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const useAuth = () => useContext(AuthContext);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [location, setLocation] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [basketData, setBasketData] = useState([]);

  const nameHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.target.value);
  };

  const emailHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };

  const locationHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLocation(event.target.value);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AuthContext.Provider
              value={{
                isLogged,
                setIsLogged,
                email,
                setEmail,
                emailHandler,
                password,
                setPassword,
                passwordHandler,
                searchValue,
                setSearchValue,
                name,
                setName,
                nameHandler,
                location,
                setLocation,
                locationHandler,
              }}
            >
              <Header />
              {children}
              <Footer />
            </AuthContext.Provider>
            <CssBaseline />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
