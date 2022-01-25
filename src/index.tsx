import { noop } from 'lodash-es'
import React from 'react'
import ReactDOM from 'react-dom'
import { PageComponent } from './components/page/page/Page'

import { PageType } from './consts'

import './index.css'

ReactDOM.render(
	<React.StrictMode>
		{/* test */}
		<PageComponent
			index={0}
			currentPage={0}
			setCurrentPage={noop}
			zIndex={1}
			backgroundImage={PageType.DreamCatcherLeft}
		/>
	</React.StrictMode>,
	document.getElementById('root')
)
