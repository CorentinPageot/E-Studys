"use client";

import ExerciseList from "@/components/exercices";
import Selector from "@/components/select";
import { FC, useState } from "react";

interface pageProps {}

const textSelectors = [
	{ index: 0, name: "Tout" },
	{ index: 1, name: "Prononciation" },
	{ index: 2, name: "Association" },
];

const page: FC<pageProps> = ({}) => {
	const [typeSelected, setTypeSelected] = useState("Tout");
	return (
		<div>
			<h1 className="bg-studysBlue p-4 pt-8 text-2xl">Exercices</h1>
			<div className="p-4 flex flex-col gap-4">
				<div className="flex gap-2 text-studysGreen">
					{textSelectors.map((selector, index) => (
						<div
							key={index}
							onClick={() =>
								setTypeSelected(selector.name.toString())
							}>
							<Selector
								name={selector.name}
								selected={typeSelected}
							/>
						</div>
					))}
				</div>

				<ExerciseList typeSelected={typeSelected} />
				<span className="text-studysGrey text-xs text-center mt-2">
					Psssstt ! Des exercices arrivent bientôt !
				</span>
			</div>
		</div>
	);
};

export default page;
