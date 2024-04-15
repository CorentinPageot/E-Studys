import React from "react";

interface SelectorProps {
	name: string;
	selected: string;
}

const Selector: React.FC<SelectorProps> = ({ name, selected }) => {
	return selected === name ? (
		<div className="border bg-studysGreen text-white rounded-full py-0.5 px-3 text-sm">
			{name}
		</div>
	) : (
		<div className="border border-studysGreen text-studysGreen rounded-full py-0.5 px-3 text-sm">
			{name}
		</div>
	);
};

export default Selector;
