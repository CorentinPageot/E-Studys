import { FC } from "react";
import SuccessList from "@/components/success";
import Selector from "@/components/select";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
        <div>
            <div className="bg-studysBlue h-[90px] flex justify-around items-end pb-3 font-bold">
                <p>Challenges</p>
                <p>Quêtes</p>
            </div>
            <div className="p-4 flex flex-col gap-4">
                <p className="text-sm">Ici, retrouve tous les challenges pour obtenir des récompenses !</p>
                <div className="flex gap-2">
                    <Selector name="Tout" />
                    <Selector name="En cours" />
                    <Selector name="Terminé" />
                </div>
                <SuccessList />
            </div>
        </div>
    )
}

export default page