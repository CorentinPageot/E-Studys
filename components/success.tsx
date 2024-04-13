import React from "react";

interface SuccessProps {
	index: number;
	title: string;
	text: string;
	icon: string;
	progress: number;
}

function Success({ index, title, text, icon, progress }: SuccessProps) {
	const backgroundImageUrl = `/img/${icon}.svg`;

	return (
		<div>
			<h3>{title}</h3>
			<span className="text-studysGrey">{text}</span>
		</div>
	);
}

export default function SuccessList() {
	const textSucess = [
		{
			index: 1,
			title: "LE BON ÉLÈVE",
			text: "Faire 3 exercices dans la même journée",
			icon: "strawberry",
			progress: 66,
		},
		{
			index: 2,
			title: "TOUT FEU TOUT FLAMME",
			text: "Faire ses exercices pendant au moins 7 jours d’affilés.",
			icon: "cherry",
			progress: 75,
		},
		{
			index: 3,
			title: "CHALLENGE À VENIR",
			text: "Des challenges sont en préparation pour toi !",
			icon: "none",
			progress: 0,
		},
		{
			index: 4,
			title: "CHALLENGE À VENIR",
			text: "Des challenges sont en préparation pour toi !",
			icon: "none",
			progress: 0,
		},
	];

	return (
		<div className="inline-grid grid-cols-2 gap-2">
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
