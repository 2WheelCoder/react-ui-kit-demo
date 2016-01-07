import React from 'react'
import ReactDOM from 'react-dom'
import LibraryPage from './pages/LibraryPage.jsx'

class UIKit {
	constructor() {
		ReactDOM.render(
			<LibraryPage />,
			document.getElementById('app')
		)
	}
}

new UIKit()