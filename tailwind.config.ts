import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				sans: ["var(--font-dyslexic)"],
			},
			colors: {
				studysGreen: "#6fbb7b",
				studysBlue: "#B6E0F9",
				studysDarkBlue: "#477DFF",
				studysGrey: "#5C5C5C",
				studysLightGrey: "#B3B3B3",
				studysYellow: "#FEEA0A",
				studysLightYellow: "#FFFAC7",
				studysOrange: "#EE7B31",
				studysRed: "#C70F0F",
				studysBlack: "#1D1D1B",
			},
		},
	},
	plugins: [],
	safelist: [
		{
			pattern:
				/(bg|text|border)-studys(Green|Blue|DrakBlue|Grey|Yellow|Orange|Red|Black)/,
		},
	],
};
export default config;
