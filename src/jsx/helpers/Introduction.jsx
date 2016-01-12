import React, {Component} from 'react'

export default class Introduction extends Component {
	render () {
		return (
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

				<ul className="bulleted-list">
					<li>
						<a href="http://cssguidelin.es/" target="_blank">CSS Guildelin.es</a>
					</li>
				</ul>
			</section>
		)
	}
}