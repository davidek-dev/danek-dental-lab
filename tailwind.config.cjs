/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	variants: {},
	mode: 'jit',
	purge: [],
	darkMode: false,
	plugins: [
		require('daisyui'), // Make sure this line is present
		// other plugins if any
	  ],
}
