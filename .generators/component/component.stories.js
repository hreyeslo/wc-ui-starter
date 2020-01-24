/**
 * This file use CSF format
 * https://storybook.js.org/docs/formats/component-story-format
 */
export default {
  title: 'TemplateComponent',
  parameters: {
    componentSubtitle: 'TemplateComponent webcomponent',
  },
};

export const Default = () => '<template-component></template-component>';
export const Example1 = () => '<template-component text="TemplateComponent WC"></template-component>';
export const Example2 = () => '<template-component text="TemplateComponent WC"></template-component>';
