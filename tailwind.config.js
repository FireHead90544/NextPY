/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				wave: {
					"0%": { transform: "rotate(0deg)" },
					"15%": { transform: "rotate(14deg)" },
					"30%": { transform: "rotate(-8deg)" },
					"40%": { transform: "rotate(14deg)" },
					"50%": { transform: "rotate(-4deg)" },
					"60%": { transform: "rotate(10deg)" },
					"70%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"wave": "wave 2.5s infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};