import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Heading1Component extends Component {
	static propTypes = {
		content: PropTypes.string.isRequired,
		centered: PropTypes.bool
	};

	static defaultProps = {
		content: 'missing heading 1 content',
		centered: false
	};

	render () {
		const classes = classNames({
			'heading-1': true,
			'heading-1--centered': this.props.centered
		})

		return (
			<h1 className={classes}>{this.props.content}</h1>
		)
	}
}