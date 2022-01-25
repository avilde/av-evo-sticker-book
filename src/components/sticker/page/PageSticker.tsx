import cn from 'classnames'
import React from 'react'

import './PageSticker.css'

export interface PageStickerProps {
	top: number
	left: number
	className?: string
}

export const PageSticker: React.FC<PageStickerProps> = ({
	top,
	left,
	className,
}) => {
	const borderSizes = 'sm:border md:border-2 lg:border-4 xl:border-8'
	const stickerClasses = cn(
		'pageSticker',
		borderSizes,
		'border-white',
		className
	)

	const stickerStyle = {
		top: `${top}%`,
		left: `${left}%`,
	} as React.CSSProperties

	return <div className={stickerClasses} style={stickerStyle}></div>
}
