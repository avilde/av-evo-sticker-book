import cn from 'classnames'
import React from 'react'
import { imagePathMapping } from '../../assets/images'
import { PageType } from '../../consts'

import './DynamicSticker.css'

export interface StickerProps {
	gameType: PageType
	isOdd: boolean
	backgroundPositionX: number
	backgroundPositionY: number
}

export const DynamicSticker: React.FC<StickerProps> = ({
	gameType,
	isOdd,
	backgroundPositionX,
	backgroundPositionY,
}) => {
	const stickerClasses = cn('dynamic-sticker', {
		isOdd: isOdd,
		isEven: !isOdd,
	})

	const stickerStyle = {
		backgroundImage: `url(${imagePathMapping[gameType]})`,
		backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%`,
	} as React.CSSProperties

	return <div className={stickerClasses} style={stickerStyle}></div>
}
