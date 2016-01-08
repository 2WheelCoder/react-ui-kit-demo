require("babel-core/register");
import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
import ProgressBar from '../components/ProgressBarComponent.jsx'
expect.extend(expectJSX);

const percent = 75

describe('ProgressBar', () => {
	it('renders', () => {
		let renderer = createRenderer();
		renderer.render(<ProgressBar percent={percent} />);
		let actualElement = renderer.getRenderOutput();
		let expectedElement =
			<div className="progress-bar">
				<div className="progress-bar__progress" style={{width: percent + '%'}}></div>
			</div>;
		expect(actualElement).toEqualJSX(expectedElement);
	});
});