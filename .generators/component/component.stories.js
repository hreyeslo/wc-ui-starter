import { storiesOf } from '@storybook/html';

storiesOf('TemplateComponent', module)
  .add('Default', () => `<template-component></template-component>`)
  .add(
    'With Input',
    () => `<template-component test="John"></template-component>`,
  );
