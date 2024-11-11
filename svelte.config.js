import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	kit: {
		adapter: adapter(),
		files: {
			routes: 'src/routes' // Explicitly specify the routes directory
		}
	},
	preprocess: vitePreprocess(),
};
