/**
 * CAUTION: DO NOT MODIFY THIS FILE
 * .storybook/stencil.js
 */
/**
 * Import the custom addon for adding assets to the manager head.
 */
import withAssets from '../stencil-utilities/addon-assets';
import {kebabCase} from 'lodash';

const { name, stencil } = require('../package.json');

const {
  host,
  port,
  buildDir = 'build',
} = stencil;

// Fix for scoped package names
const normalizedPkgName = kebabCase(name);

/**
 * Function to get the stencil resources
 */
const getStencilResources = () => ({
  'components-css':
    process.env.NODE_ENV === 'development'
      ? `http://${host}:${port}/${buildDir}/${normalizedPkgName}.css`
      : `/${buildDir}/${normalizedPkgName}.css`,
  'component-js':
    process.env.NODE_ENV === 'development'
      ? `http://${host}:${port}/${buildDir}/${normalizedPkgName}.js`
      : `/${buildDir}/${normalizedPkgName}.js`,
  'component-js-module':
    process.env.NODE_ENV === 'development'
      ? `http://${host}:${port}/${buildDir}/${normalizedPkgName}.esm.js`
      : `/${buildDir}/${normalizedPkgName}.esm.js`,
});
/**
 * With assets custom decorator
 */
export default (config) => {
  return withAssets({
    assets: {
      ...getStencilResources(),
      ...config,
    },
  });
};
