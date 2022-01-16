import React from 'react'
import { PageType } from '../../consts'
import { Page } from '../page/Page'

import './StickerBook.css'

export interface StickerBookProps {}

export const StickerBook: React.FC = () => {
	const [pages, setPages] = React.useState({
		0: false,
		1: false,
		2: false,
		3: false,
	})

	function setIsTurned(index: number) {
		const newPages = JSON.parse(JSON.stringify(pages))

		newPages[index] = true
		newPages[index + 1] = true

		setPages(newPages)
	}

	return (
		<div className="book">
			<div className="pageContainer">
				<Page
					pageType={PageType.Cover}
					index={0}
					isTurned={pages[0]}
					setIsTurned={setIsTurned}
				/>
				<Page
					pageType={PageType.DreamCatcher}
					index={1}
					isTurned={pages[1]}
					setIsTurned={setIsTurned}
				/>
				<Page
					pageType={PageType.DreamCatcher}
					index={2}
					isTurned={pages[2]}
					setIsTurned={setIsTurned}
				/>
				<Page
					pageType={PageType.Cover}
					index={3}
					isTurned={pages[3]}
					setIsTurned={setIsTurned}
				/>
			</div>
		</div>
	)
}
