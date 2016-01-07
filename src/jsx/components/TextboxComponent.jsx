import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class TextboxComponent extends Component {
	static propTypes = {
		placeholder: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string,
		error: PropTypes.bool,
		wide: PropTypes.bool,
		// onChange: PropTypes.fn,
		pattern: PropTypes.string,
		value: PropTypes.string
	};

	static defaultProps = {
		placeholder: 'Placeholder',
		name: 'property',
		type: 'text',
		error: false,
		wide: false,
		onChange: () => {},
		pattern: '',
		value: ''
	};

	onChange (evt) {
		const val = evt.target.value

		if (this.props.onChange) {
			this.props.onChange(this.props.name, val)
		}
	}

	render () {
		const classes = classNames({
			'textbox': true,
			'textbox--wide': this.props.wide,
			'textbox--error': this.props.error
		})

		return (
			<input
				className={classes}
				placeholder={this.props.placeholder}
				name={this.props.name}
				type={this.props.type}
				pattern={this.props.pattern}
				onChange={this.onChange.bind(this)}
				value={this.props.value} />
		)
	}
}