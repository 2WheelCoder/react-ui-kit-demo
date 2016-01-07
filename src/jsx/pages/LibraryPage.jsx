import React, {Component, PropTypes} from 'react'
import Heading1 from '../components/Heading1Component.jsx'
import ComponentView from '../helpers/ComponentViewComponent.jsx'
import Textbox from '../components/TextboxComponent.jsx'
import Slider from 'react-slick'

export default class LibraryPage extends Component {
	constructor (props) {
		super(props)

		this.state = {
			textboxValue: ''
		}
	}

	onChange(prop, val) {
		this.setState((prevState) => {
			let newState = {}
			newState[prop] = val
			return newState
		})
	}

	render () {
		const carouselSettings = {
			autoplay: false,
			// autoplaySpeed: 4000,
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		}

		return (
			<section className="page library-page">
				<Heading1 content="React UI Kit Demo" centered={true} />

				<p className="copy">
					Welcome to the React UI Kit Demo. The purpose of this demo is to demonstrate how React can be compenetized and used as UI Kit.
				</p>

				<h2 className="heading-2">Table of Contents</h2>
				<ul className="bulleted-list">
					<li>Introduction
						<ol className="numeric-list">
							<li>Rules</li>
							<li>Resources</li>
						</ol>
					</li>
					<li>Headings
						<ol className="numeric-list">
							<li>Heading 1</li>
							<li>Heading 2</li>
							<li>Heading 3</li>
						</ol>
					</li>
				</ul>

				<section>
					<h1 className="heading-2">Headings</h1>

					<ComponentView title="Heading 1" desc="First-level heading">
						<h1 className="heading-1">This is Heading 1</h1>
					</ComponentView>

					<ComponentView title="Heading 2" desc="Second-level heading">
						<h1 className="heading-2">This is Heading 2</h1>
					</ComponentView>

					<ComponentView title="Heading 3" desc="Third-level heading">
						<h1 className="heading-3">This is Heading 3</h1>
					</ComponentView>
				</section>

				<section>
					<h1 className="heading-2">Text Input</h1>

					<ComponentView title="Textbox" desc="Text input with various properties for error handling, placeholders, etc.">
						<Textbox
							placeholder="type here"
							name="textboxValue"
							value={this.state.textboxValue}
							onChange={this.onChange.bind(this)} />

						<Textbox
							placeholder="type here"
							name="textboxValue"
							error={true}
							value="invalid value" />
					</ComponentView>
				</section>

				<section>
					<h1 className="heading-2">Slick Slider</h1>

					<ComponentView title="Textbox" desc="An example of a third party component, styled to fit into the UI kit.">

						<Slider className="slider" {...carouselSettings}>
							<div className="slider__item">
								<h2 className="heading-1">Slide 1</h2>
							</div>

							<div className="slider__item">
								<h2 className="heading-1">Slide 2</h2>
							</div>

							<div className="slider__item">
								<h2 className="heading-1">Slide 3</h2>
							</div>
						</Slider>
					</ComponentView>
				</section>
			</section>
		)
	}
}