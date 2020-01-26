/**
 * The stencil config file.
 * https://stenciljs.com/docs/config
 */
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { kebabCase } from 'lodash';
/**
 * Import the name and stencil keys from package.json
 * name: Will be used as the namespace for the stencil config.
 * stencil: Will be used to get the details of how the dev server should be deployed.
 */
import { name } from './package.json';
import { stencil } from './config.json';

// Fix for scoped package names
const normalizedPkgName = kebabCase(name);

// Assign defaults when importing from package.json
const {host = 'localhost', port = 3333} = stencil;

/**
 * Export the stencil config to be used with the StencilJS CLI
 */
export const config: Config = {
	namespace: normalizedPkgName,
	enableCache: true,
	devServer: {
		address: host,
		port: port,
		openBrowser: false
	},
	plugins: [
		sass({
			injectGlobalPaths: [
				'src/scss/styles.scss'
			],
			includePaths: ['./node_modules']
		})
	],
	outputTargets: [
		{
			type: 'dist',
			esmLoaderPath: '../.temp/loader'
		},
		{
			type: 'docs-readme'
		},
		{
			type: 'www',
			dir: './.temp/www',
			copy: [{src: 'assets', dest: 'build/assets'}],
			serviceWorker: null // disable service workers
		}
	]
};
