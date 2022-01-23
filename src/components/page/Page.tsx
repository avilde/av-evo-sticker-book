import cn from 'classnames'
import React from 'react'
import {
	DynamicSticker,
	DynamicStickerProps,
} from '../sticker/dynamic/DynamicSticker'
import { LogoSticker, LogoStickerProps } from '../sticker/logo/LogoSticker'

import './Page.css'

export interface PageProps {
	backgroundImage: string
	isTurned: boolean
	isOdd: boolean
	isEven: boolean
	zIndex: number
	index: number
	setCurrentPage: (index: number) => void
	isCover?: boolean
	stickers?: DynamicStickerProps[]
	logoSticker?: LogoStickerProps
}

export const Page: React.FC<PageProps> = ({
	isTurned,
	isOdd,
	isEven,
	zIndex,
	index,
	backgroundImage,
	setCurrentPage,
	isCover,
	stickers,
	logoSticker,
}) => {
	const pageClasses = cn('page', {
		isTurned: isTurned,
		isOdd: isOdd,
		isEven: isEven,
		isCover: isCover,
	})

	const pageStyle = {
		backgroundImage: `url(${backgroundImage})`,
		zIndex: isOdd ? zIndex : null,
	} as React.CSSProperties

	const sticker = stickers?.[0]

	return (
		<div
			className={pageClasses}
			style={pageStyle}
			onClick={() => setCurrentPage(isOdd ? index + 1 : index - 2)}
		>
			{sticker ? (
				<DynamicSticker {...sticker} className="sticker" />
			) : null}

			{logoSticker ? (
				<LogoSticker {...logoSticker} className="sticker" />
			) : null}
		</div>
	)
}
