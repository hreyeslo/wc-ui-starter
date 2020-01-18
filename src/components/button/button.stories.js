import { storiesOf } from '@storybook/html';

storiesOf('Button', module)
  .add('Default', () => `<wc-button></wc-button>`)
  .add(
    'With Input',
    () => `<wc-button test="John"></wc-button>`,
  );
