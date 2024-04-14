import React from "react";
import Image from "next/image";
import ProgressBar from "./progress";

interface SuccessProps {
	index: number;
	type: string;
	title: string;
	text: string;
	color: string;
	icon: string;
	progress: number;
}

function Success({ index, type, color, title, text, icon, progress }: SuccessProps) {
	const iconUrl = `/img/${icon}.svg`;

	return (
		<div className={`grid grid-flow-row grid-cols-[96px_1fr] rounded-lg bg-${color} bg-opacity-40`}>
			<div className={`bg-${color} rounded-l-lg flex items-center justify-center`}>
				{progress !== 0 ? <Image src={iconUrl} width={64} height={64} alt={title} /> : <div className="text-[32px] text-studysLightGrey bg-studysGrey w-[58px] h-[58px] flex items-center justify-center rounded-full">?</div>}
			</div>
			<div className="p-4">
				<h3 className={`pb-2`}>{title}</h3>
				<span className="text-sm">{text}</span>
				{progress !== 0 && <div className="pt-2"><ProgressBar show={true} number={progress} color="studysYellow" bgColor="grey-500" /></div> }
			</div>
		</div>
	);
}

export default function SuccessList() {
	const textSuccess = [
		{
			index: 1,
			type: "challenge",
			title: "LE BON ÉLÈVE",
			text: "Faire 3 exercices dans la même journée",
			color: 'studysOrange',
			icon: "star",
			progress: 66,
		},
		{
			index: 2,
			type: "challenge",
			title: "TOUT FEU TOUT FLAMME",
			text: "Faire ses exercices pendant au moins 7 jours d’affilés.",
			color: 'studysOrange',
			icon: "fire",
			progress: 75,
		},
		{
			index: 3,
			type: "challenge",
			title: "CHALLENGE À VENIR",
			text: "Des challenges sont en préparation pour toi !",
			color: 'studysLightGrey',
			icon: "success",
			progress: 0,
		},
		{
			index: 4,
			type: "challenge",
			title: "CHALLENGE À VENIR",
			text: "Des challenges sont en préparation pour toi !",
			color: 'studysLightGrey',
			icon: "success",
			progress: 0,
		},
		{
			index: 5,
			type: "quest",
			title: "TRAVAILLER DUR",
			text: "Faire 10 exercices en 24 heures",
			color: 'studysGreen',
			icon: "brain",
			progress: 30,
		},
		{
			index: 6,
			type: "quest",
			title: "LE BON ÉLÈVE",
			text: "Faire un score parfait sur un exercice de prononciation",
			color: 'studysGreen',
			icon: "clapping_hands",
			progress: 50,
		},
	];

	return (
		<div className="flex flex-col gap-2">
			{textSuccess.map((success, index) => (
				<Success
					key={index}
					index={success.index}
					type={success.type}
					title={success.title}
					text={success.text}
					color={success.color}
					icon={success.icon}
					progress={success.progress}
				/>
			))}
		</div>
	);
}
