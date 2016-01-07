import React from 'react'
import ReactDOM from 'react-dom'
import LibraryPage from './pages/LibraryPage.jsx'

class UIKit {
	constructor() {
		ReactDOM.render(
			<LibraryPage string="Hello World Prop"/>,
			document.getElementById('app')
		)
	}
}

new UIKit()