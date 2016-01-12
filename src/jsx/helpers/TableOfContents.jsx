import React, {Component} from 'react'

export default class TableOfContents extends Component {
	render () {
		return (
			<div>
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
			</div>
		)
	}
}