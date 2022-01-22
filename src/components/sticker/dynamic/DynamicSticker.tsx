import cn from 'classnames'
import React from 'react'
import { imagePathMapping } from '../../../assets/images'
import { PageType } from '../../../consts'

import './DynamicSticker.css'

export interface DynamicStickerProps {
	pageType: PageType
	backgroundPositionX: number
	backgroundPositionY: number
	className?: string
}

export const DynamicSticker: React.FC<DynamicStickerProps> = ({
	pageType,
	backgroundPositionX,
	backgroundPositionY,
	className,
}) => {
	const stickerClasses = cn('dynamic-sticker', className)

	const stickerStyle = {
		backgroundImage: `url(${imagePathMapping[pageType]})`,
		backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%`,
		transform: `translate(${backgroundPositionX}%, ${
			backgroundPositionY * 3
		}%)`,
	} as React.CSSProperties

	return <div className={stickerClasses} style={stickerStyle}></div>
}
