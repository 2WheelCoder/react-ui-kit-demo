import React from 'react'
import ReactDOM from 'react-dom'
import LibraryPage from './pages/LibraryPage'

class UIKit {
	constructor() {
		ReactDOM.render(
			<LibraryPage />,
			document.getElementById('app')
		)
	}
}

new UIKit()