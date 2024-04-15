'use client'

import React, { FC, useState } from "react";
import SuccessList from "@/components/success";
import Selector from "@/components/select";

interface pageProps {}

const textSelectors = [
	{ index: 0, name: "Tout" },
	{ index: 1, name: "En cours" },
	{ index: 2, name: "Terminé" },
];

const page: FC<pageProps> = ({}) => {
    const [typeSelected, setTypeSelected] = useState('challenge');
    const [completionSelected, setCompletionSelected] = useState('Tout');
    return (
        <div>
            <div className="relative bg-studysBlue h-[90px] flex items-end font-bold">
                <div className="w-full grid grid-cols-2">
                    <div className={`text-center border-b-${typeSelected === 'challenge' ? 'black' : 'studysBlue'} border-b-[3px] pb-4`} onClick={() => setTypeSelected('challenge')}>Challenges</div>
                    <div className={`text-center border-b-${typeSelected === 'quest' ? 'black' : 'studysBlue'} border-b-[3px] `} onClick={() => setTypeSelected('quest')}>Quêtes</div>
                </div>
            </div>
            <div className="p-4 flex flex-col gap-4">
                <p className="text-sm">Ici, retrouve tous les challenges pour obtenir des récompenses !</p>
                <div className="flex gap-2">
                    {textSelectors.map((selector, index) => (
						<div
							key={index}
							onClick={() =>
								setCompletionSelected(selector.name.toString())
							}>
							<Selector
								name={selector.name}
								selected={completionSelected}
							/>
						</div>
					))}
                </div>
                <SuccessList typeSelected={typeSelected} completionSelected={completionSelected} showAll={true} />
            </div>
        </div>
    )
}

export default page