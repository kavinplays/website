/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: require('@sveltejs/adapter-static')(),
		target: '#svelte'
	}
};

export default config;
