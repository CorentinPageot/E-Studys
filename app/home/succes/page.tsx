import { FC } from "react";
import SuccessList from "@/components/success";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
        <div>
            <SuccessList />
        </div>
    )
}

export default page