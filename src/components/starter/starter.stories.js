import { storiesOf } from '@storybook/html';

storiesOf('Starter', module)
	.add('Default', () => `<wc-starter></wc-starter>`)
	.add('With Input', () => `<wc-starter text="Starter WC"></wc-starter>`);
