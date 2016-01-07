import React, {Component, PropTypes} from 'react'

export default class ButtonComponent extends Component {
	static propTypes = {
		string: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	};

	render () {
		return (
			<button onClick={this.props.onClick}>{this.props.string}</button>
		)
	}
}