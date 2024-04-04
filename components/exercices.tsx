import React from 'react';

interface ExerciseProps {
  index: number;
  color: string
  title: string;
  text: string;
  fruit: string;
  level: number;
}

function Exercise({ index, color, title, text, fruit, level }: ExerciseProps) {
  const backgroundImageUrl = `/img/${fruit}.svg`;

  return (
    <div
      className={`text-xs bg-studys-${color} rounded-lg px-8 py-4 bg-left-bottom bg-no-repeat flex flex-col gap-2 relative`}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <h3>{title}</h3>
      <span className="text-studys-grey">{text}</span>
	  <span className='absolute text-studys-dark-blue right-1 top-2'>{`niv.${level}`}</span>
    </div>
  );
}

export default function ExerciseList() {
  const textExercises = [
    {
      index: 1,
	  color: "green",
      title: "Prononciation",
      text: "Différence entre 'p' et 'q'",
      fruit: "strawberry",
	  level: 0,
    },
    {
      index: 2,
	  color: "blue",
      title: "Association",
      text: "Associe le mot avec l'image",
      fruit: "cherry",
      level: 2,
    },
    {
      index: 3,
	  color: "blue",
      title: "Association",
      text: "Associe le mot avec l'image",
      fruit: "orange",
      level: 1,
    },
    {
      index: 4,
	  color: "green",
      title: "Prononciation",
      text: "Différence entre 'n' et 'm'",
      fruit: "peer",
	  level: 0,
    },
  ];

  return (
    <div className='inline-grid grid-cols-2 gap-2'>
      {textExercises.map((exercise, index) => (
        <Exercise
          key={index}
          index={exercise.index}
		  color={exercise.color}
          title={exercise.title}
          text={exercise.text}
          fruit={exercise.fruit}
		  level={exercise.level}
        />
      ))}
    </div>
  );
}
