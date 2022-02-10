import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { DesktopLayout } from './layout/DesktopLayout'
import { MobileLayout } from './layout/MobileLayout'
import { StickerBookState } from './state/StickerBookState'
import { generatePages } from './utils/randomDataUtils'
import { createRandomWithSeed } from './utils/randomWithSeed'

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
let random, state, component
if (isMobile) {
	component = <MobileLayout />
} else {
	random = createRandomWithSeed(123)
	const { pages, stickers } = generatePages(random)
	state = new StickerBookState(pages, stickers, random)
	component = <DesktopLayout stickerBookState={state} />
}

ReactDOM.render(
	<React.StrictMode>{component}</React.StrictMode>,
	document.getElementById('root')
)
