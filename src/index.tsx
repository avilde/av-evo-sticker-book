import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { DesktopLayout } from './layout/DesktopLayout'
import { MobileLayout } from './layout/MobileLayout'
import { StickerBookState } from './state/StickerBookState'
import { getRandomInBetween } from './utils/randomDataUtils'

const RANDOM_SEED = getRandomInBetween(Math.random, 1, 9_999_999)

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
let state, component
if (isMobile) {
	component = <MobileLayout />
} else {
	state = new StickerBookState(RANDOM_SEED)
	component = <DesktopLayout stickerBookState={state} />
}

ReactDOM.render(
	<React.StrictMode>{component}</React.StrictMode>,
	document.getElementById('root')
)
