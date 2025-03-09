/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	darkMode: ['class'],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				custom: ["CustomFont", "sans"],
				orbitron: ['var(--font-orbitron)', 'sans-serif'],
				edu: ['var(--font-edu-nsw)', 'cursive'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			boxShadow: {
				custom: 'var(--shadow)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				border: {
					DEFAULT: 'hsl(var(--border))',
				},
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
			},
			scrollbarWidth: {
				thin: 'thin',
				none: 'none',
			},
			animation: {
				'smooth-scroll': 'smooth-scroll 1s ease-in-out',
			},
			keyframes: {
				'smooth-scroll': {
					'0%': { transform: 'translateY(-10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(({ addVariant }) => {
			addVariant('scrollbar', '&::-webkit-scrollbar');
			addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb');
		}),
	],
};

export default config;