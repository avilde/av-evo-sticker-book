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
			setCurrentPage={noop}
			isTurned={false}
			isOdd={true}
			isEven={false}
			zIndex={1}
			pageType={PageType.DreamCatcher}
		/>
	</React.StrictMode>,
	document.getElementById('root')
)
