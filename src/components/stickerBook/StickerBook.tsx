import React from 'react'
import { GameType, Other } from '../../consts'
import { Page } from '../page/Page'

import './StickerBook.css'

export interface StickerBookProps {}

const pages = [
	{
		pageType: Other.Cover,
	},
	{
		pageType: GameType.DreamCatcher,
	},
	{
		pageType: GameType.DreamCatcher,
	},
	{
		pageType: GameType.Megaball,
	},
	{
		pageType: GameType.Megaball,
	},
	{
		pageType: Other.Cover,
	},
]

export const StickerBook: React.FC = () => {
	const [currentPage, setCurrentPage] = React.useState<number>(-1)

	return (
		<div className="book">
			<div className="pageContainer">
				{pages.map((page, index) => (
					<Page
						key={index}
						index={index}
						isEven={index % 2 > 0}
						isOdd={index % 2 === 0}
						isTurned={currentPage >= index}
						pageType={page.pageType}
						zIndex={pages.length - index}
						setCurrentPage={setCurrentPage}
					/>
				))}
			</div>
		</div>
	)
}
