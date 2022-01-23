import React from 'react'
import { imagePathMapping } from '../../assets/images'
import { GameType, PageType } from '../../consts'
import { Page } from '../page/Page'

import './StickerBook.css'

export interface StickerBookProps {}

const pages = [
	{
		background: PageType.FrontCover,
		isCover: true,
	},
	{
		background: PageType.DreamCatcherLeft,
		stickers: [
			{
				pageType: PageType.DreamCatcherLeft,
				backgroundPositionX: 40,
				backgroundPositionY: 50,
				isTurned: false,
			},
		],
	},
	{
		background: PageType.DreamCatcherRight,
		logoSticker: {
			gameType: GameType.DreamCatcher,
			backgroundPositionX: 80,
			backgroundPositionY: 20,
			isTurned: false,
		},
	},
	{
		background: PageType.MegaballLeft,
	},
	{
		background: PageType.MegaballRight,
	},
	{
		background: PageType.BackCover,
		isCover: true,
	},
]

export const StickerBook: React.FC = () => {
	const [currentPage, setCurrentPage] = React.useState<number>(-1)

	return (
		<div className="stickerBook">
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
						stickers={page.stickers}
						logoSticker={page.logoSticker}
					/>
				))}
			</div>
		</div>
	)
}
