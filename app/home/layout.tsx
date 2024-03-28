"use client";

import Footer from "@/src/features/layout/Footer";
import { FC, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="">
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
