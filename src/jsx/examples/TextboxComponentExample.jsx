import React, {Component} from 'react'
import Textbox from '../components/TextboxComponent'

export default class TextboxComponentExample extends Component {
	constructor (props) {
		super(props)

		this.state = {
			content: ''
		}
	}

	onChange (prop, value) {
		this.setState(() => {
			let newState = {}
			newState[prop] = value
			return newState
		})
	}

	render () {
		return (
			<div>
				<div className="component-view__example">
					<Textbox
						placeholder="type here"
						name="content"
						value={this.state.content}
						onChange={this.onChange.bind(this)} />
				</div>

				<div className="component-view__code">
					{'<Textbox placeholder="type here" name="content" value={this.state.content} onChange={this.onChange.bind(this)} />'}
				</div>

				<div className="component-view__example">
					<Textbox
						placeholder="type here"
						name="content"
						value={this.state.content}
						onChange={this.onChange.bind(this)}
						error={true} />
				</div>

				<div className="component-view__code">
					{'<Textbox placeholder="type here" name="content" value={this.state.content} onChange={this.onChange.bind(this)} error={true} />'}
				</div>
			</div>
		)
	}
}