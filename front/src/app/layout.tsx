"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
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

};
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
const useAuth = () => useContext(AuthContext);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  // const [isLogged, setIsLogged] = useState(false);
  // const [basketData, setBasketData] = useState([]);



  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* <AuthContext.Provider
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
            > */}
            <Header />
            {children}
            <Footer />
            {/* </AuthContext.Provider> */}
            <CssBaseline />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
