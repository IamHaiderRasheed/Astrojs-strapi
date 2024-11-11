/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	safelist: [
    'text-purple-600', 
    'text-red',
    'text-emerald-700',
    'text-pink-600',
    // Add more dynamic classes used in your code
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
	
}
