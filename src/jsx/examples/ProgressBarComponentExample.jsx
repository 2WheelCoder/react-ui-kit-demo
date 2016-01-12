import React, {Component} from 'react'
import ProgressBar from '../components/ProgressBarComponent'

export default class SliderComponentExample extends Component {
	constructor (props) {
		super(props)
		
		this.state = {
			progress: 25
		}

		this.moveProgressBar()
	}
	
	moveProgressBar () {
		setInterval(() => {
			this.setState((prevState) => {
				return {
					progress: prevState.progress === 25 ? 68 : 25
				}
			})
		}, 2000)
	}

	render () {
		return (
			<div>
				<div className="component-view__example">
					<ProgressBar percent={this.props.progress} />
				</div>

				<div className="component-view__code">
					{'<ProgressBar percent={this.state.progress} />'}
				</div>
			</div>
		)
	}
}