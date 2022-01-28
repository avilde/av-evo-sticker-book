import cn from 'classnames'
import React from 'react'
import stickerPlaceholderPath from '../../../assets/stickerPlaceholder.png'

import './PageSticker.css'

// TODO: implement logo stickers

export interface PageStickerProps {
	top: number
	left: number
	isUsed: boolean
	nr: number
	className?: string
}

export const PageSticker: React.FC<PageStickerProps> = ({
	top,
	left,
	isUsed,
	nr,
	className,
}) => {
	const borderSizes = 'sm:border md:border-2 lg:border-4 xl:border-4'
	const stickerClasses = cn(
		'pageSticker',
		isUsed ? 'shadow-sm shadow-black' : null,
		borderSizes,
		'border-white',
		className
	)

	const stickerStyle = {
		top: `${top}%`,
		left: `${left}%`,
		backgroundImage: isUsed ? null : `url(${stickerPlaceholderPath})`,
		backgroundSize: isUsed ? 'initial' : '100% 100%',
	} as React.CSSProperties

	const pageNumberClassNames = cn(
		'pageNumber',
		'absolute w-20 h-8 flex items-center justify-center',
		'font-extrabold font-mono text-center',
		'bg-gray-300 rounded-md text-white',
		'sm:text-sm md:text-baseline lg:text-lg xl:text-2xl'
	)

	return (
		<div className={stickerClasses} style={stickerStyle}>
			{!isUsed ? <div className={pageNumberClassNames}>{nr}</div> : null}
		</div>
	)
}
