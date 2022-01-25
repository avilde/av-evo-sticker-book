import cn from 'classnames'
import React from 'react'
import { Stickers } from '../../../state/types'
import {
	LogoStickerComponent,
	LogoStickerComponentProps,
} from '../../sticker/logo/LogoSticker'
import { PageSticker } from '../../sticker/page/PageSticker'

import './Page.css'

export interface PageComponentProps {
	backgroundImage: string
	index: number
	currentPage: number
	setCurrentPage: (index: number) => void
	zIndex: number
	stickers?: Stickers
	logoSticker?: LogoStickerComponentProps
}

export const PageComponent: React.FC<PageComponentProps> = ({
	index,
	zIndex,
	backgroundImage,
	currentPage,
	setCurrentPage,
	stickers,
	logoSticker,
}) => {
	const [showPreview, setShowPreview] = React.useState<boolean>(false)
	const isOdd = index % 2 === 0
	const isPreviewEnabled =
		(isOdd && currentPage === index - 1) ||
		(!isOdd && currentPage === index)
	const isTurned = currentPage >= index
	const pageClasses = cn('page', {
		isTurned: isTurned,
		isOdd: isOdd,
		isEven: !isOdd,
		isHover: showPreview,
	})

	const pageStyle = {
		backgroundImage: `url(${backgroundImage})`,
		zIndex: isOdd ? zIndex : null,
	} as React.CSSProperties

	const pageTurnerClasses = cn(
		isOdd ? 'right-0' : 'left-0',
		'bottom-0 top-0 border-4 border-indigo-500 w-12 h-full absolute cursor-pointer',
		{ isTurned: isTurned }
	)

	return (
		<div className={pageClasses} style={pageStyle}>
			<div className="stickerLayer">
				{stickers?.map((sticker, stickerIndex) => (
					<PageSticker
						key={stickerIndex}
						{...sticker}
						className="sticker"
					/>
				))}

				{logoSticker ? (
					<LogoStickerComponent
						{...logoSticker}
						className="sticker"
					/>
				) : null}
			</div>

			<div
				className={pageTurnerClasses}
				onClick={() => {
					setCurrentPage(isOdd ? index + 1 : index - 2)
					setShowPreview(false)
				}}
				onMouseEnter={() => isPreviewEnabled && setShowPreview(true)}
				onMouseLeave={() => isPreviewEnabled && setShowPreview(false)}
			></div>
		</div>
	)
}
