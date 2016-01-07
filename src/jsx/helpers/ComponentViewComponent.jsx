import React, {Component, PropTypes} from 'react'

export default class ButtonComponent extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		desc: PropTypes.string
	};

	static defaultProps = {
		content: 'missing heading title'
	};

	render () {
		const children = (() => {
			if (this.props.children.length) {
				return this.props.children.map((child, index) => {
					return (
						<li key={index} className="component-view__example">
							{child}
						</li>
					)
				})
			} else {
				return (
					<li className="component-view__example">
						{this.props.children}
					</li>
				)
			}
		})()

		return (
			<section className="component-view">
				<h1 className="heading-3">{this.props.title}</h1>

				<p className="component-view__desc">
					{this.props.desc}
				</p>

				<div className="component-view__docs">

				</div>

				<ul className="component-view__examples">
					{children}
				</ul>
			</section>
		)
	}
}