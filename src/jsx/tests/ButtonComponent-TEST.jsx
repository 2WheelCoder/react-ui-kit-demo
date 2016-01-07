require("babel-core/register");
import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
import Button from '../components/ButtonComponent.jsx'
expect.extend(expectJSX);

describe('Button', () => {
	it('renders', () => {
		let renderer = createRenderer();
		renderer.render(<Button string="Click Me" onClick={() => {}} />);
		let actualElement = renderer.getRenderOutput();
		let expectedElement = <button onClick={() => {}}>Click Me</button>;
		expect(actualElement).toEqualJSX(expectedElement);
	});

	it('clicks', () => {
		let renderer = createRenderer();
		let hasClicked = false;
		let click = () => hasClicked = true;
		renderer.render(<Button string="Click Me" onClick={click} />);
		renderer.getRenderOutput().props.onClick();
		expect(hasClicked).toBe(true);
	});
});