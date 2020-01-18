/**
 * The stencil config file.
 * https://stenciljs.com/docs/config
 */
// Needed for type issue with TS for protocol option in devServer
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import {kebabCase} from 'lodash';

/**
 * Import the name and stencil keys from package.json
 * name: Will be used as the namespace for the stencil config.
 * stencil: Will be used to get the details of how the dev server should be deployed.
 */
import { name, stencil } from './package.json';

// Fix for scoped package names
const normalizedPkgName = kebabCase(name);

// Assign defaults when importing from package.json
const { host = 'localhost', port = 3333 } = stencil;

/**
 * Export the stencil config to be used with the StencilJS CLI
 * The `devServer` options should ONLY be configured via the `stencil` object in package.json.
 * The `getResourcesURL` is directly dependant on the `stencil` object in package.json.
 * The othe options on the config object can be updated by you as per need.
 */
export const config: Config = {
  namespace: normalizedPkgName,
	enableCache:true,
  devServer: {
    address: host,
    port: port,
    openBrowser: false,
  },
	plugins: [
		sass({
			injectGlobalPaths: [
				'src/scss/styles.scss'
			]
		})
	],
  outputTargets: [
    { type: 'dist' },
    { type: 'docs-readme' },
    {
      type: 'www',
	    buildDir:'build',
      serviceWorker: null, // disable service workers
    }
  ]
};
