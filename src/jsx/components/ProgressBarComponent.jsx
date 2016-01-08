import React, {Component, PropTypes} from 'react'

export default class ProgressBar extends Component {
	static propTypes = {
		percent: PropTypes.number.isRequired
	};

	static defaultProps = {
		percent: 0
	};

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