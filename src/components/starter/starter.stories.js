/**
 * This file use CSF format
 * https://storybook.js.org/docs/formats/component-story-format
 */

export default {
  title: 'Starter',
  parameters: {
    componentSubtitle: 'Starter webcomponent',
  }
};

export const Default = () => '<wc-starter></wc-starter>';
export const Example1 = () => '<wc-starter text="Starter WC"></wc-starter>';
export const Example2 = () => '<wc-starter text="Starter WC"></wc-starter>';
