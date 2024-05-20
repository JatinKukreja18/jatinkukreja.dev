/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			compact: ['Anton', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				"brand-blue": "var(--brand-primary)",
				"brand-accent": "var(--brand-accent)"
			},
			boxShadow: {
				'card': '1px 1px 14px -1px #f2f2f2'
			}
		},
	},
	plugins: [],
}
