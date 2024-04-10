"use client";

import React, { useState, FC } from "react";
import Image from "next/image";
import ExercicesList from "@/components/exercices";

interface pageProps {}

const Home: FC<pageProps> = ({}) => {
	const [showMoreExercises, setShowMoreExercises] = useState(false);

	const handleShowMoreExercises = () => {
		setShowMoreExercises(!showMoreExercises);
	};
	return (
		<div className="py-8 px-4 flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<h2>Reprendre le dernier exercice</h2>
				<div className="bg-studysGreen rounded-lg py-2 px-[70px] relative bg-[url('/img/apple.svg')] bg-left-bottom bg-no-repeat flex flex-col gap-2">
					<h3>Prononciation</h3>
					<span>
						Exercice sur la différence entre le son &quot;n&quot; et
						&quot;m&quot;
					</span>

					<Image
						className="absolute right-3 -translate-y-1/2 top-[50%] w-[38px] h-[51px]"
						src="/img/arrow.svg"
						width={38}
						height={51}
						alt="Flèche"
					/>
				</div>
			</div>

			<div>
				<h2>Mes exercices</h2>
				
                {/* Boucle pour afficher les 2 premiers exos */}
                <ExercicesList />
                {/* Fin boucle */}

                {/* Afficher plus de div si showMoreExercises est vrai */}
                {/* {showMoreExercises && (
                    <div>plop</div>
                )} */}
			</div>
			{/* <div style={{ textAlign: "right", marginTop: "20px" }}>
				<a
					href="#"
					onClick={handleShowMoreExercises}
					style={{ textDecoration: "underline", color: "black" }}>
					{showMoreExercises ? "Voir moins" : "Voir plus"}
				</a>
			</div> */}
		</div>
	);
};

export default Home;
