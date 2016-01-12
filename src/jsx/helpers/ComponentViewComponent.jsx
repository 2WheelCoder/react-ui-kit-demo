import React, {Component, PropTypes} from 'react'

const propTypes = {
	title: PropTypes.string.isRequired,
	docs: PropTypes.object
}

const defaultProps = {
	title: 'missing heading title'
}

export default class ComponentViewComponent extends Component {
	render () {
		const propDocs = (() => {
			const docs = this.props.docs
			
			if (docs) {
				let propsEls = []
				const componentProps = docs.props

				if (docs.props) {
					for (var property in componentProps) {
						if (componentProps.hasOwnProperty(property)) {
							// console.log('property', property, componentProps[property])
							propsEls.push(
								<li key={property}>{'{'}<strong>{property}</strong>, <em>{componentProps[property].type ? componentProps[property].type.name : 'fn'}</em>}: {componentProps[property].description}</li>
							)
						}
					}
				}

				return (
					<div className="component-view__docs">
						<h2 className="heading-4">Properties</h2>
						
						<ul className="bulleted-list">
							{propsEls}
						</ul>
					</div>
				)
			}
		})()

		return (
			<section className="component-view">
				<h1 className="heading-3">{this.props.title}</h1>

				<p className="component-view__desc">
					{this.props.docs ? this.props.docs.description : this.props.desc}
				</p>

				{propDocs}

				<h2 className="heading-4">Examples</h2>
				{this.props.children}
			</section>
		)
	}
}

ComponentViewComponent.propTypes = propTypes
ComponentViewComponent.defaultProps = defaultProps