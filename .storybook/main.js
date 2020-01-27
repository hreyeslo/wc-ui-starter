module.exports = {
  stories: ['../src/components/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-knobs/',
    '@storybook/addon-a11y/',
    '@storybook/addon-actions/',
    '@storybook/addon-viewport/',
    '@storybook/addon-backgrounds/',
    '@storybook/addon-docs',
    '@storybook/addon-storysource'
  ]
};
