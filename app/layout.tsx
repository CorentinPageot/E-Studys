import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "@/src/features/layout/Header";
//import Footer from "@/src/features/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "E-Studys",
    description: "Une éducation adaptée à tous les dys.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <body className={clsx(inter.className, "bg-background h-full")} style={{ fontFamily: 'font_estudys' }}>
                {children}
            </body>
        </html>
    );
}
