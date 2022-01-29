import { observer } from 'mobx-react-lite'
import React from 'react'
import { StickerBookState } from '../../state/StickerBookState'
import { BackCover } from '../page/BackCover/BackCover'
import { FrontCover } from '../page/FrontCover/FrontCover'
import { PageComponent } from '../page/page/Page'

import './StickerBook.css'

export interface StickerBookProps {
	stickerBookState: StickerBookState
}

export const StickerBook: React.FC<StickerBookProps> = observer(
	({ stickerBookState }) => {
		const { pages } = stickerBookState
		const [currentPage, setCurrentPage] = React.useState<number>(-1)

		return (
			<div className="stickerBook select-none">
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
							<PageComponent
								key={idx}
								index={idx}
								gameType={page.gameType}
								pageType={page.pageType}
								zIndex={pages.length - idx}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
								stickers={page.stickers}
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
)
