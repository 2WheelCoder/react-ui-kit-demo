require("babel-core/register");
import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
import Textbox from '../components/TextboxComponent.jsx'
expect.extend(expectJSX);

const placeholder = "My Placeholder"
const name = "prop-name"

describe('Textbox Component', () => {
	it('renders', () => {
		let renderer = createRenderer();
		renderer.render(
			<Textbox
				placeholder={placeholder}
				name={name} />
		);
		let actualElement = renderer.getRenderOutput();

		let expectedElement = <input
			className="textbox"
			placeholder={placeholder}
			pattern=""
			name={name}
			type="text"
			onChange={() => {}}
			value=''
			/>;

		expect(actualElement).toEqualJSX(expectedElement);
	});

	it('errors', () => {
		let renderer = createRenderer();
		renderer.render(
			<Textbox
				placeholder={placeholder}
				name={name}
				error={true} />
		);
		let actualElement = renderer.getRenderOutput();

		let expectedElement = <input
			className="textbox textbox--error"
			placeholder={placeholder}
			pattern=""
			name={name}
			type="text"
			onChange={() => {}}
			value=''
			/>;

		expect(actualElement).toEqualJSX(expectedElement);
	});

	it('returns changes', () => {
		let renderer = createRenderer();
		let hasChanged = false;
		let change = () => hasChanged = true;
		renderer.render(
			<Textbox
				placeholder={placeholder}
				name={name}
				onChange={change} />
		);
		renderer.getRenderOutput().props.onChange({target: {value: 'my-value'}});
		expect(hasChanged).toBe(true);
	});
});