import UserProfile from "@/src/features/layout/auth/UserProfile";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
        <div>
            <UserProfile />
        </div>
    );
};

export default page;
