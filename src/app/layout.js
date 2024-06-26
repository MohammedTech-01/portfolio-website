// @refresh reset

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import TransitionProvider from "../components/transitionProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammed's Portfolio",
  description:
    "Explore a dynamic showcase of my projects and skills in this animated portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children} </TransitionProvider>
      </body>
    </html>
  );
}
