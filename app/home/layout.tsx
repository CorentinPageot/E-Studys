import Footer from "@/src/features/layout/Footer";
import { getAuthSession } from "@/lib/auth";
import { FC, ReactNode } from "react";
import { redirect } from "next/navigation";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = async ({ children }) => {
    const session = await getAuthSession();

    if (session?.user) {
            return (
                <div className="">
                    {children}
                    <Footer />
                </div>
            );
    } else {
        redirect('/');
    }
    
};

export default Layout;
