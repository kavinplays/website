const sveltePreprocess = require('svelte-preprocess');
const pkg = require('./package.json');

module.exports = {
    kit: {
	    adapter: require('@sveltejs/adapter-static')(),
		target: '#svelte'
	}
};