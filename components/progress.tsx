import React from "react";

interface BarProps {
	show: boolean;
	progress: number;
}

const ProgressBar: React.FC<BarProps> = ({ show, progress }) => {
	return show ? (
		<div
			className='text-[6px] bg-studysLightYellow bg-opacity-80 rounded-full h-[15px] w-full'>
			<div className='bg-studysYellow flex items-center justify-center rounded-full h-full' style={{ width: `${progress}%` }}>{show && <p>{progress}%</p>}</div>
		</div>
	) : (
		<div
			className='text-[6px] bg-studysLightGrey bg-opacity-80 rounded-full h-[5px] w-full'>
			<div className='bg-studysGreen flex items-center justify-center rounded-full h-full' style={{ width: `${progress}%` }}>{show && <p>{progress}%</p>}</div>
		</div>
	);
};

export default ProgressBar;
