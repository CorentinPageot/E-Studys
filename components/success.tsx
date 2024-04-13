import React from "react";
import Image from "next/image";

interface SuccessProps {
	index: number;
	title: string;
	text: string;
	icon: string;
	progress: number;
}

function Success({ index, title, text, icon, progress }: SuccessProps) {
	const iconUrl = `/img/${icon}.svg`;

	return (
		<div className="rounded-lg bg-studysOrange bg-opacity-40 ">
			<div className="bg-studysOrange rounded-l-lg flex items-center">
				<Image src={iconUrl} width={64} height={64} alt={title} />
			</div>
			<div className="p-2">
				<h3>{title}</h3>
				<span className="text-sm">{text}</span>
				<div>{progress}</div>
			</div>
		</div>
	);
}

export default function SuccessList() {
	const textSucess = [
		{
			index: 1,
			title: "LE BON ÉLÈVE",
			text: "Faire 3 exercices dans la même journée",
			icon: "star",
			progress: 66,
		},
		{
			index: 2,
			title: "TOUT FEU TOUT FLAMME",
			text: "Faire ses exercices pendant au moins 7 jours d’affilés.",
			icon: "fire",
			progress: 75,
		},
		{
			index: 3,
			title: "CHALLENGE À VENIR",
			text: "Des challenges sont en préparation pour toi !",
			icon: "success",
			progress: 0,
		},
		{
			index: 4,
			title: "CHALLENGE À VENIR",
			text: "Des challenges sont en préparation pour toi !",
			icon: "success",
			progress: 0,
		},
	];

	return (
		<div className="flex flex-col gap-2">
			{textSucess.map((sucess, index) => (
				<Success
					key={index}
					index={sucess.index}
					title={sucess.title}
					text={sucess.text}
					icon={sucess.icon}
					progress={sucess.progress}
				/>
			))}
		</div>
	);
}
