import React from 'react'
import ReactDOM from 'react-dom'
import { Page } from './components/page/Page'

import { GameType } from './consts'

import './index.css'

ReactDOM.render(
	<React.StrictMode>
		{/* test */}
		<Page
			pageNumber={1}
			isEvenPage={false}
			gameType={GameType.DreamCatcher}
		/>
	</React.StrictMode>,
	document.getElementById('root')
)
