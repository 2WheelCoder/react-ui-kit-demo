import React, {Component, PropTypes} from 'react'
import Heading1 from '../components/Heading1Component'
import ComponentView from '../helpers/ComponentViewComponent'
import Textbox from '../components/TextboxComponent'
import ProgressBar from '../components/ProgressBarComponent'
import Slider from 'react-slick'

export default class LibraryPage extends Component {
	constructor (props) {
		super(props)

		this.state = {
			textboxValue: '',
			progress: 25
		}

		this.moveProgressBar()
	}

	onChange(prop, val) {
		this.setState((prevState) => {
			let newState = {}
			newState[prop] = val
			return newState
		})
	}

	moveProgressBar () {
		setInterval(() => {
			this.setState((prevState) => {
				return {
					textboxValue: prevState.textboxValue,
					progress: prevState.progress === 25 ? 68 : 25
				}
			})
		}, 2000)
	}

	render () {
		const carouselSettings = {
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true,
			infinite: true,
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
					<li>
						<a href="#introduction">Introduction</a>
						<ul className="bulleted-list">
							<li>Rules</li>
							<li>Resources</li>
						</ul>
					</li>
					
					<li>
						<a href="#headings">Headings</a>
						<ul className="bulleted-list">
							<li>Heading 1</li>
							<li>Heading 2</li>
							<li>Heading 3</li>
						</ul>
					</li>

					<li>
						<a href="#form-elements">Form Elements</a>
						<ul className="bulleted-list">
							<li>Text Input</li>
						</ul>
					</li>

					<li>
						<a href="#status-indicators">Status Indicators</a>
						<ul className="bulleted-list">
							<li>Progress Bar</li>
						</ul>
					</li>

					<li>
						<a href="#media">Media</a>
						<ul className="bulleted-list">
							<li>Slick Slider</li>
						</ul>
					</li>
				</ul>

				<section id="introduction">
					<h1 className="heading-2">Introduction</h1>

					<h2 className="heading-3">Rules</h2>

					<ul className="bulleted-list">
						<li>
							Child props should be stateless as often as possible. Parent handles all state.
						</li>

						<li>
							Not every UI Kit component needs to be a React component. If it is a single element and has no interaction, it’s probably okay being just regular old HTML.
						</li>
					</ul>

					<h2 className="heading-3">Resources</h2>

					<p className="copy">
						<ul className="bulleted-list">
							<li>
								<a href="http://cssguidelin.es/" target="_blank">CSS Guildelin.es</a>
							</li>
						</ul>
					</p>
				</section>

				<section id="headings">
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

				<section id="form-elements">
					<h1 className="heading-2">Form Elements</h1>

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

				<section id="status-indicators">
					<h1 className="heading-2">Status Indicators</h1>

					<ComponentView title="Progress Bar" desc="Text input with various properties for error handling, placeholders, etc.">
						<ProgressBar percent={this.state.progress} />
					</ComponentView>
				</section>

				<section id="media">
					<h1 className="heading-2">Media</h1>

					<ComponentView title="Slick Slider" desc="An example of a third party component, styled to fit into the UI kit.">
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