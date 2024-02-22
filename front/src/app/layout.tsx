"use client"
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
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { OtpProvider } from "@/components/providers/OtpProvider";
import { UserProvider } from "@/components/providers/UserProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* <ToastContainer position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition:Bounce> */}

            <AuthProvider>
              <OtpProvider>
                <UserProvider>
                  <Header />
                  {children}
                  <Footer />
                </UserProvider>
              </OtpProvider>
            </AuthProvider>

            {/* </ToastContainer> */}
            <CssBaseline />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
