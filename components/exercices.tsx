import { redirect } from "next/dist/server/api-utils";
import React from "react";
import Link from "next/link";

interface ExerciseProps {
	index: number;
	color: string;
	title: string;
	text: string;
	fruit: string;
	level: number;
}

function Exercise({ index, color, title, text, fruit, level }: ExerciseProps) {
	const backgroundImageUrl = `/img/${fruit}.svg`;

	return (
		<div
			className={`text-xs bg-studys${color} rounded-lg px-8 py-4 bg-left-bottom bg-no-repeat flex flex-col gap-2 relative`}
			style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
			<h3>{title}</h3>
			<span className="text-studysGrey">{text}</span>
			<span className="absolute text-studysDarkBlue right-1 top-2">{`niv.${level}`}</span>
		</div>
	);
}

interface ExercisesProps {
	typeSelected: string;
	max?: number;
}

export default function ExerciseList({typeSelected, max}:ExercisesProps) {
	const textExercises = [
		{
			index: 1,
			color: "Green",
			title: "Prononciation",
			text: "Différence entre 'p' et 'q'",
			fruit: "strawberry",
			level: 0,
		},
		{
			index: 2,
			color: "Blue",
			title: "Association",
			text: "Associe le mot avec l'image",
			fruit: "cherry",
			level: 2,
		},
		{
			index: 3,
			color: "Blue",
			title: "Association",
			text: "Associe le mot avec l'image",
			fruit: "orange",
			level: 1,
		},
		{
			index: 4,
			color: "Green",
			title: "Prononciation",
			text: "Différence entre 'n' et 'm'",
			fruit: "peer",
			level: 0,
		},
		{
			index: 5,
			color: "Green",
			title: "Prononciation",
			text: "Différence entre 'b' et 'p'",
			fruit: "cherry",
			level: 0,
		},
		{
			index: 6,
			color: "Green",
			title: "Prononciation",
			text: "Différence entre 'e' et 'a'",
			fruit: "orange",
			level: 0,
		},
	];

	return (
		<div>
			<div className="inline-grid grid-cols-2 gap-2">
				{textExercises.map((exercise, index) => (
					(typeSelected === 'Tout' || typeSelected === exercise.title) &&
					<div key={index} className={max <= index && 'hidden'}>
						<Exercise
							index={exercise.index}
							color={exercise.color}
							title={exercise.title}
							text={exercise.text}
							fruit={exercise.fruit}
							level={exercise.level}
						/>
					</div>
				))}
			</div>
			{max && <Link href="/home/exercices" className="flex justify-end pt-2"><p className="text-[10px] border-b-[1px] border-b-black">Voir plus</p></Link>}
		</div>
	);
}
