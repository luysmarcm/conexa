/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#44d1d4",
				secundary: "#070768",
				fondo: "#000000",
				negro: "#131314",
				azul: "#0a3cda",
			},
			fontFamily: {

        gilroygold: ["Gilroy-Bold"]
        
				// lato: ["Lato"],
				// ps: ["Photograph Signature"],
				// cd: ["Cinzel Decorative"],
				// pshoot: ["Photoshoot"],
			},
			backgroundImage: (theme) => ({
				heading: "url('/imagen/new-heading.png')",
				fondo: "url('/imagen/fondo.png')",
			}),
			maxWidth: {
				max: "1920px",
			},
			minWidth: {
				min: "280px",
			},
			height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
		},
	},
	plugins: [],
};
