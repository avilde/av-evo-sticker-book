import React from 'react'
import { imagePathMapping } from '../../assets/images'
import { GameType, Other } from '../../consts'
import { Page } from '../page/Page'

import './StickerBook.css'

export interface StickerBookProps {}

const pages = [
	{
		background: Other.FrontCover,
		isCover: true,
	},
	{
		background: GameType.DreamCatcher,
	},
	{
		background: GameType.DreamCatcher,
	},
	{
		background: GameType.Megaball,
	},
	{
		background: GameType.Megaball,
	},
	{
		background: Other.BackCover,
		isCover: true,
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
						isCover={page.isCover}
						backgroundImage={imagePathMapping[page.background]}
						zIndex={pages.length - index}
						setCurrentPage={setCurrentPage}
					/>
				))}
			</div>
		</div>
	)
}
