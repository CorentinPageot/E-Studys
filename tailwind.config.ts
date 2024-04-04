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
				studys: "Studys",
			},
			colors: {
				"studys-green": "#6fbb7b",
				"studys-blue": "#B6E0F9",
				"studys-dark-blue": "#477DFF",
				"studys-grey": "#5C5C5C",
			},
		},
	},
	plugins: [],
};
export default config;
