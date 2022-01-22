import cn from 'classnames'
import React from 'react'
import { logoPathMapping } from '../../assets/images'
import { GameType } from '../../consts'

import './LogoSticker.css'

export interface StickerProps {
	gameType: GameType
}

export const LogoSticker: React.FC<StickerProps> = ({ gameType }) => {
	const stickerClasses = cn('logo-sticker', {})

	const stickerStyle = {
		backgroundImage: `url(${logoPathMapping[gameType]})`,
	} as React.CSSProperties

	return <div className={stickerClasses} style={stickerStyle}></div>
}
