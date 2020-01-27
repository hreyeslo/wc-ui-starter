import { storiesOf } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

function setCustomProperties(htmlElement, customProperties) {
	if (customProperties) {
		const cssVariables = Object
			.keys(customProperties)
			.reduce((properties, propertyName) => {
				return {
					...properties,
					[propertyName]: text(propertyName, customProperties[propertyName], 'Custom Properties')
				}
			}, {});
		Object.keys(cssVariables)
			.forEach(key => htmlElement.style.setProperty(key, cssVariables[key]));
	}
}

storiesOf('UiInput', module)
	.addDecorator(withA11y)
	.addDecorator(withKnobs)
	.add('Default', () => {
			const el = document.createElement('wc-ui-input');
			setCustomProperties(el, {
				'--ui-input-bg-color': '#F3F2F2',
				'--ui-input-border-radius': '8px',
				'--ui-input-line-color': '#FFCD00',
				'--ui-input-line-color-ripple': '#000066',
				'--ui-input-label-color': '#000066',
				'--ui-input-field-color': '#333333',
				'--ui-input-field-color-empty': '#666666',
				'--ui-input-error-color': '#F32735',
				'--ui-input-valid-color': '#348F41',
			});
			// Object.keys(cssVariables)
			// 	.forEach(key => el.style.setProperty(key, cssVariables[key]));
			el.value = text('value', 'value default');
			// el.reverse = boolean('Reversed', false);
			// el.hidePercentage = boolean('Hide percentage', false);
			el.addEventListener('eventChange', e => action('eventChange')(e.detail));
			return el;
		}
	)
