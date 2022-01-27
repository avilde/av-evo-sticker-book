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
	const isOdd = index % 2 === 0

	const [showPreview, setShowPreview] = React.useState<boolean>(false)

	const isPreviewEnabled =
		(isOdd && currentPage === index - 1) ||
		(!isOdd && currentPage === index)
	const isTurned = currentPage >= index

	const pageClasses = cn('page', 'pointer-events-none', {
		isTurned: isTurned,
		isOdd: isOdd,
		isEven: !isOdd,
		isPreviewEnabled: showPreview,
	})

	const pageStyle = {
		backgroundImage: `url(${backgroundImage})`,
		zIndex: isOdd ? zIndex : null,
	} as React.CSSProperties

	const pageTurnerClasses = cn(
		'pageTurner pointer-events-auto',
		isOdd ? 'right-0' : 'left-0',
		'bottom-0 top-0 w-20 h-full absolute cursor-pointer',
		isOdd
			? 'hover:bg-gradient-to-l from-black'
			: 'hover:bg-gradient-to-r from-black',
		{ isTurned: isTurned }
	)

	return (
		<div className={pageClasses} style={pageStyle}>
			<div className="stickerLayer select-none pointer-events-none">
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

			<div
				className={cn(
					'absolute bottom-0 w-8 h-8 pb-2 select-none pointer-events-none',
					'text-white  text-lg text-bold underline decoration-sky-500',
					isOdd ? 'right-0 pl-2 text-left' : 'left-0 pr-2 text-right'
				)}
			>
				{index}
			</div>
		</div>
	)
}
