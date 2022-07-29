import tailwindcssNesting from '@tailwindcss/nesting';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export const config = {
	plugins: [
		tailwindcssNesting(),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer()
	]
};
