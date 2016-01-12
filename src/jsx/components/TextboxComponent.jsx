import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

const propTypes = {
	/**
	* input placeholder text
	*/
	placeholder: PropTypes.string.isRequired,

	/**
	* input element name, which will be returned in onChange handler
	*/
	name: PropTypes.string.isRequired,

	/**
	* html input type; ex. text, email, etc.
	*/
	type: PropTypes.string,

	/**
	* whether or not the form is in an error state
	*/
	error: PropTypes.bool,

	/**
	* should the input span the full-width of its parent?
	*/
	wide: PropTypes.bool,

	/**
	* function to be called when user enters a value into the field
	*/
	// onChange: PropTypes.fn,

	/**
	* regex input pattern
	*/
	pattern: PropTypes.string,

	/**
	* html value of the input element
	*/
	value: PropTypes.string
}

const defaultProps = {
	placeholder: 'Placeholder',
	name: 'property',
	type: 'text',
	error: false,
	wide: false,
	onChange: () => {},
	pattern: '',
	value: ''
}

/**
 * Text input with various properties for error handling, placeholders, etc.
 */
export default class TextboxComponent extends Component {
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

TextboxComponent.propTypes = propTypes
TextboxComponent.defaultProps = defaultProps