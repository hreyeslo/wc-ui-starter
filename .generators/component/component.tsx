import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tag-template-component',
  styleUrl: 'template-component.scss',
  shadow: true,
})
export class TemplateComponent {
  /**
   * A test prop
   */
  @Prop() test: string = 'Hello World';

  render() {
    return <div class="template-component">{this.test}</div>;
  }
}
