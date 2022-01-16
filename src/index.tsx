import React from 'react'
import ReactDOM from 'react-dom'
import { Page } from './components/page/Page'

import { PageType } from './consts'

import './index.css'

ReactDOM.render(
	<React.StrictMode>
		{/* test */}
		<Page
			index={0}
			setIsTurned={() => {}}
			isTurned={false}
			pageType={PageType.DreamCatcher}
		/>
	</React.StrictMode>,
	document.getElementById('root')
)
