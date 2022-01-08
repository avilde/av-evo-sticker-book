import React from 'react'
import ReactDOM from 'react-dom'
import { Page } from './components/page/Page'

import { GameType } from './consts'

import './styles/tailwind.css'

ReactDOM.render(
	<React.StrictMode>
		{/* test */}
		<Page pageNumber={1} isEvenPage={false} gameType={GameType.Craps} />
	</React.StrictMode>,
	document.getElementById('root')
)
