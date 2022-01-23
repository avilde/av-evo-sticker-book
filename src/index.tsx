import { noop } from 'lodash-es'
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
			currentPage={0}
			setCurrentPage={noop}
			zIndex={1}
			backgroundImage={PageType.DreamCatcherLeft}
		/>
	</React.StrictMode>,
	document.getElementById('root')
)
