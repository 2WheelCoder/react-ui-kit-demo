import React, {Component, PropTypes} from 'react'

export default class LibraryPage extends Component {
	static propTypes = {
		string: PropTypes.string.isRequired
	};

	render () {
		return (
			<h1>{this.props.string}</h1>
		)
	}
}