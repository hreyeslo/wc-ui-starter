import { Component, Prop, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'wc-starter',
  styleUrl: 'starter.scss',
  shadow: true,
})
export class Starter {
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
			<div class="c-starter">
				<img
					class="c-starter__image"
					alt="starter image"
					src={getAssetPath(`./assets/images/${this.image}`)}
				/>
				<p class="c-starter__text">{this.text}</p>
			</div>
		);
	}
}
