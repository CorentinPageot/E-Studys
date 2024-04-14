import React from "react";

interface BarProps {
	show: boolean;
	progress: number;
}

const ProgressBar: React.FC<BarProps> = ({ show, progress }) => {
    // const color = 'studysYellow';
	return (
		<div
			className={`text-[6px] bg-${show ? 'studysLightYellow' : 'studysLightGrey'} bg-opacity-80 rounded-full h-[${show ? '15' : '5'}px] w-full`}>
			<div className={`bg-${show ? 'studysYellow' : 'studysGreen'} flex items-center justify-center rounded-full h-full`} style={{width: `${progress}%`}}>{show && <p>{progress}%</p>}</div>
		</div>
	);
};

export default ProgressBar;
