"use client";

import Footer from "@/src/features/layout/Footer";
import { FC, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-blue-600 p-4">
            {children}
            <div>Footer</div>
            <Footer />
        </div>
    );
};

export default Layout;
