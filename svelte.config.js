import adapter from '@sveltejs/adapter-static';

// then in the config object, add an adapter key under kit, and call the imported library
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter()
	}
};
export default config;
