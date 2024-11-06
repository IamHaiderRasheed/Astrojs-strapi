/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	safelist: [
    'text-purple-600', // Example of a class that may be dynamic
    'text-red', // Add more color classes as needed
    'text-emerald-700',
    'text-pink-600',
    // Add more dynamic classes used in your code
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
	
}
