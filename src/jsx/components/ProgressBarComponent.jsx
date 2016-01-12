import React, {Component, PropTypes} from 'react'

const propTypes = {
	/**
	* number representing the percent of completion the progress bar should show, ex. 50
	*/
	percent: PropTypes.number.isRequired
}

const defaultProps = {
	percent: 0
}

/**
 * Progress bar that animates on completion change
 */
export default class ProgressBar extends Component {

	render () {
		let progressStyle = {
			width: this.props.percent + '%'
		}

		return (
			<div className="progress-bar">
				<div className="progress-bar__progress" style={progressStyle}></div>
			</div>
		)
	}
}

ProgressBar.propTypes = propTypes
ProgressBar.defaultProps = defaultProps