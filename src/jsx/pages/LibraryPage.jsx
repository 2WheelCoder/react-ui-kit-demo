import React, {Component, PropTypes} from 'react'
import TableOfContents from '../helpers/TableOfContents'
import Introduction from '../helpers/Introduction'
import docs from '../components/ComponentDocs'
import ComponentView from '../helpers/ComponentViewComponent'
import TextboxExample from '../examples/TextboxComponentExample'
import SliderExample from '../examples/SliderComponentExample'
import ProgressBarExample from '../examples/ProgressBarComponentExample'

export default class LibraryPage extends Component {
	render () {
		return (
			<section className="page library-page">
				<h1 className="heading-1">React UI Kit Demo</h1>

				<p className="copy">
					Welcome to the React UI Kit Demo. The purpose of this demo is to demonstrate how React can be compenetized and used as UI Kit.
				</p>

				<TableOfContents />

				<Introduction />

				<section id="headings">
					<h1 className="heading-2">Headings</h1>

					<ComponentView title="Heading 1" desc="First-level heading">
						<div className="component-view__example">
							<h1 className="heading-1">This is Heading 1</h1>
						</div>

						<div className="component-view__code">
							{'<h1 className="heading-1">This is Heading 1</h1>'}
						</div>
					</ComponentView>

					<ComponentView title="Heading 2" desc="Second-level heading">
						<div className="component-view__example">
							<h1 className="heading-2">This is Heading 2</h1>
						</div>

						<div className="component-view__code">
							{'<h1 className="heading-2">This is Heading 2</h1>'}
						</div>
					</ComponentView>

					<ComponentView title="Heading 3" desc="Third-level heading">
						<div className="component-view__example">
							<h1 className="heading-3">This is Heading 3</h1>
						</div>

						<div className="component-view__code">
							{'<h1 className="heading-3">This is Heading 3</h1>'}
						</div>
					</ComponentView>
				</section>

				<section id="form-elements">
					<h1 className="heading-2">Form Elements</h1>

					<ComponentView title="Textbox" docs={docs['TextboxComponent.jsx']}>
						<TextboxExample />
					</ComponentView>
				</section>

				<section id="status-indicators">
					<h1 className="heading-2">Status Indicators</h1>

					<ComponentView title="Progress Bar" docs={docs['ProgressBarComponent.jsx']}>

						<ProgressBarExample />
					</ComponentView>
				</section>

				<section id="media">
					<h1 className="heading-2">Media</h1>

					<ComponentView title="Slick Slider" desc="An example of a third party component, styled to fit into the UI kit. See https://github.com/akiran/react-slick for additional details on usage.">

						<SliderExample />
					</ComponentView>
				</section>
			</section>
		)
	}
}