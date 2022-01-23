import React from 'react'
import { imagePathMapping } from '../../assets/images'
import { GameType, PageType } from '../../consts'
import { BackCover } from '../page/BackCover/BackCover'
import { FrontCover } from '../page/FrontCover/FrontCover'
import { Page } from '../page/Page'

import './StickerBook.css'

export interface StickerBookProps {}

const pages = [
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
]

export const StickerBook: React.FC = () => {
	const [currentPage, setCurrentPage] = React.useState<number>(-1)

	return (
		<div className="stickerBook">
			<div className="pageContainer">
				<FrontCover
					zIndex={pages.length + 1}
					onClick={() => setCurrentPage(1)}
					isTurned={currentPage >= 0}
					key="front-cover"
				/>

				{pages.map((page, index) => {
					const idx = index + 1
					return (
						<Page
							key={idx}
							index={idx}
							isEven={idx % 2 > 0}
							isOdd={idx % 2 === 0}
							isTurned={currentPage >= idx}
							backgroundImage={imagePathMapping[page.background]}
							zIndex={pages.length - idx}
							setCurrentPage={setCurrentPage}
							stickers={page.stickers}
							logoSticker={page.logoSticker}
						/>
					)
				})}

				<BackCover
					onClick={() => setCurrentPage(currentPage - 2)}
					isTurned={currentPage >= pages.length}
					key="back-cover"
				/>
			</div>
		</div>
	)
}
