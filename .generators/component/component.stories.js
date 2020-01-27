import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';

/**
 * Story docs configuration
 */
storiesOf('StoryNameTemplateComponent', module)
  /**
   * Default story
   */
  .add('Default', () => document.createElement('template-component'))
  /**
   * Story with text
   */
  .add('Dynamic text', () => {
    const element = document.createElement('template-component');
    element.text = text('Text', 'TemplateComponent WC');
    return element;
  })
  /**
   * Story with text and image
   */
  .add('Dynaic text & image', () => {
    const element = document.createElement('template-component');
    element.text = text('Text', 'TemplateComponent WC');
    element.image = text('Image', 'starter.png');
    return element;
  });
