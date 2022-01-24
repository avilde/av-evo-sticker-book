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
	const stickerClasses = cn(
		'pageSticker',
		'border-4',
		'border-white',
		className
	)

	const stickerStyle = {
		top: `${top}%`,
		left: `${left}%`,
	} as React.CSSProperties

	return <div className={stickerClasses} style={stickerStyle}></div>
}
