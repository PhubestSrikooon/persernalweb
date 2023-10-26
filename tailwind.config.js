/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					primary: '#91F3F1',
					secondary: '#D1FAF9',
					accent: '#18E7E3',
					'base-100': '#FFFFFF',
					'base-200': '#F0F4FB',
					'base-300': '#F3F4F6',
					'base-content': '#021717'
				},
        dark: {
          primary: "#0C6E6D",
          secondary: "#052E2D",
          accent:"#18E7E3",
          "base-100" : "#000000",
          "base-200" : "#181818",
          "base-300" : "#383838",
          "base-content": "#E8FDFD"
        }
			}
		]
	}
};
