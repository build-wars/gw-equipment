import json from '@rollup/plugin-json';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
	input  : 'es6/index.js',
	output : [
		{
			file     : 'dist/gw-equipment-es6-src.js',
			format   : 'es',
			sourcemap: true,
		},
		{
			file     : 'dist/gw-equipment-node-src.cjs',
			format   : 'cjs',
			sourcemap: true,
		},
	],
	plugins: [
		json(),
	],
};
