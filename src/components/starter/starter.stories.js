import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';

/**
 * Story docs configuration
 */
storiesOf('Starter', module)
  /**
   * Default story
   */
  .add('Default', () => document.createElement('wc-starter'))
  /**
   * Story with text
   */
  .add('Dynamic text', () => {
    const element = document.createElement('wc-starter');
    element.text = text('Text', 'Starter WC');
    return element;
  })
  /**
   * Story with text and image
   */
  .add('Dynaic text & image', () => {
    const element = document.createElement('wc-starter');
    element.text = text('Text', 'Starter WC');
    element.image = text('Image', 'starter.png');
    return element;
  });
