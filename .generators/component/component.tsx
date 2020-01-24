import { Component, Prop, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'tag-template-component',
  styleUrl: 'template-component.scss',
  shadow: true,
})
export class TemplateComponent {
	/**
	 * A text prop
	 */
	@Prop() text: string = 'Hello World';

	/**
	 * A image prop
	 */
	@Prop() image = 'starter.png';

	render() {
		return (
			<div class="c-template-component">
				<img
					class="c-template-component__image"
					alt="starter image"
					src={getAssetPath(`./assets/images/${this.image}`)}
				/>
				<p class="c-template-component__text">{this.text}</p>
			</div>
		);
	}
}
