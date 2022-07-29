import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$src: path.resolve('./src'),
			$lib: path.resolve('./src/lib'),
			$providers: path.resolve('./src/providers'),
			$models: path.resolve('./src/lib/models'),
			$widgets: path.resolve('./src/lib/widgets')
		}
	}
};

export default config;
