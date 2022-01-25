import cn from 'classnames'
import React from 'react'
import stickerPlaceholderPath from '../../../assets/stickerPlaceholder.png'

import './PageSticker.css'

export interface PageStickerProps {
	top: number
	left: number
	isUsed: boolean
	className?: string
}

export const PageSticker: React.FC<PageStickerProps> = ({
	top,
	left,
	isUsed,
	className,
}) => {
	const borderSizes = 'sm:border md:border-2 lg:border-4 xl:border-4'
	const stickerClasses = cn(
		'pageSticker',
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

	return <div className={stickerClasses} style={stickerStyle}></div>
}
