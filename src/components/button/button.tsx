import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
	tag: 'wc-button',
	styleUrl: 'button.scss',
	shadow: true
})
export class Button {
	/**
	 * A test prop
	 */
	@Prop() text: string = 'Hello World';

	/**
	 * A test asset
	 */
	@Prop() image = 'starter.png';

	render() {
		return (
			<div class="c-button">
				<img
					class="c-button__image"
					alt="starter image"
					src={getAssetPath(`./assets/images/${this.image}`)}
				/>
				<p class="c-button__text">{this.text}</p>
			</div>
		);
	}
}
