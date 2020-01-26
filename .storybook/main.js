module.exports = {
  stories: ['../src/components/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-knobs',
		'@storybook/addon-a11y/register',
		'@storybook/addon-knobs/register',
		'@storybook/addon-actions/register',
		'@storybook/addon-storysource',
		'@storybook/addon-viewport/register',
		'@storybook/addon-backgrounds/register',
    '@storybook/addon-docs'
  ],
};
