import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StickerBookState } from '../../state/StickerBookState'
import { BackCover } from '../page/BackCover/BackCover'
import { FrontCover } from '../page/FrontCover/FrontCover'
import { PageComponent } from '../page/page/Page'

import './StickerBook.css'

export interface StickerBookProps {
	stickerBookState: StickerBookState
	className?: string
}

export const StickerBook: React.FC<StickerBookProps> = observer(
	({ stickerBookState, className }) => {
		const {
			pages,
			stickers,
			setDragTarget,
			currentPage,
			setCurrentPage,
			selectedStickerNr,
		} = stickerBookState

		const margins = 'mt-16 mx-2 md:mx-3 xl:mx-8'

		return (
			<div
				className={cn('stickerBook', 'select-none', className, margins)}
			>
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
								stickers={stickers.filter(
									(s) =>
										s.gameType === page.gameType &&
										s.pageType === page.pageType
								)}
								selectedStickerNr={selectedStickerNr}
								setDragTarget={setDragTarget}
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
