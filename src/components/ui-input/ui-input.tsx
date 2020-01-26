import { MDCTextField } from '@material/textfield';
import { Component, Event, h, Prop } from '@stencil/core';
import { EventEmitter } from 'events';

@Component({
  tag: 'wc-ui-input',
  styleUrl: 'ui-input.scss',
  shadow: true,
})

export class UiInput {

	@Prop() value: string;
	@Event() eventChange: EventEmitter;

	textInput: MDCTextField;
	textInputElement!: HTMLInputElement;

	componentDidLoad() {
		this.textInput = new MDCTextField(this.textInputElement);
		this.textInput.listen('change', () => {
			this.eventChange.emit(this.textInput.value)
		})
	}

	componentDidUnload() {
		this.textInput.unlisten('change', null)
	}

	render() {
		return (
			<div>
				<div class="mdc-text-field" ref={el => this.textInputElement = el as HTMLInputElement }>
					<input class="mdc-text-field__input"
						id="my-text-field"
						name="my-text-field"
						value={this.value}
						type="text"
					/>
					<label class="mdc-floating-label" htmlFor="my-text-field">
						Label
					</label>
					<div class="mdc-line-ripple"></div>
				</div>
				<div class="mdc-text-field-helper-line">
					<div class="mdc-text-field-helper-text">Helper text</div>
				</div>
			</div>
		);
	}
}
