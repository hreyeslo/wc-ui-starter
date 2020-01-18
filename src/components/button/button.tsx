import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'wc-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  /**
   * A test prop
   */
  @Prop() test: string = 'Hello World';

  render() {
    return <div class="button">{this.test}</div>;
  }
}
