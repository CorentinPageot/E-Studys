import { FC } from "react";
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import LogoutButton from "@/src/features/layout/auth/LogoutButton";

interface pageProps {}



const page: FC<pageProps> = async ({}) => {
    const session = await getAuthSession();

    console.log('session', session?.user);
    return (
        <div className="flex flex-col">
            <div className="h-[165px] flex items-center justify-center bg-gradient-to-b from-studys-blue to-white shadow-[0px_0px_10px_0px_#00000026]">
                <Image className="rounded-full" src={session?.user.image} width={80} height={80} alt="pp" />
            </div>
            <div className="flex flex-col p-4 gap-2">
                <div>
                    <p className="text-2xl">{session?.user.name}</p>

                </div>
                <p className="text-studys-grey text-sm">{session?.user.email}</p>
            </div>
            <div className="w-full h-[1px] bg-[#D9D9D9]" />
            <div className="p-4">
                <p className="text-lg">Statistiques</p>
            </div>
            <div className="flex justify-between p-4 text-xs">
                <LogoutButton />
                <p className="text-studys-grey">Mention légales</p>
            </div>
        </div>
    );
};

export default page;
