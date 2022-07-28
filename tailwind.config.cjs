const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					50: '#E9FFE6',
					100: '#D2EBCE',
					200: '#BCD7B8',
					300: '#A7C4A3',
					400: '#93B08E',
					500: '#7F9C7B',
					600: '#6C8868',
					700: '#5A7456',
					800: '#496046',
					900: '#394D36'
				},
				secondary: {
					50: '#FFFDE6',
					100: '#EBE9CE',
					200: '#D7D5B8',
					300: '#C4C1A3',
					400: '#B0AD8F',
					500: '#9C997B',
					600: '#888668',
					700: '#747257',
					800: '#605E46',
					900: '#4D4B36'
				}
			},
			spacing: {
				112: '28rem'
			}
		}
	},

	plugins: []
};

module.exports = config;
