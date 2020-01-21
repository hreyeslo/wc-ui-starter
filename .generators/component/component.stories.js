import { storiesOf } from '@storybook/html';

storiesOf('TemplateComponent', module)
	.add('Default', () => `<template-component></template-component>`)
	.add('With Input', () => `<template-component text="TemplateComponent WC"></template-component>`);
