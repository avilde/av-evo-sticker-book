import cn from 'classnames'
import React from 'react'
import { logoPathMapping } from '../../../assets/images'
import { GameType } from '../../../consts'
import stickerBacksidePath from '../../../assets/stickerBackside.png'

import './LogoSticker.css'

export interface LogoStickerProps {
	gameType: GameType
	isTurned: boolean
	backgroundPositionX: number
	backgroundPositionY: number
	className?: string
}

export const LogoSticker: React.FC<LogoStickerProps> = ({
	gameType,
	isTurned,
	className,
	backgroundPositionX,
	backgroundPositionY,
}) => {
	const stickerClasses = cn('logoSticker', className)

	const stickerStyle = {
		transform: `translate(${backgroundPositionX}%, ${
			backgroundPositionY * 3
		}%)`,
	} as React.CSSProperties

	const frontSideClassName = cn('front', 'side', {
		isTurned: isTurned,
	})

	const backSideClassNames = cn('back', 'side', {
		isTurned: isTurned,
	})

	const frontSideStyle = {
		backgroundImage: `url(${logoPathMapping[gameType]})`,
	} as React.CSSProperties

	const backSideStyle = {
		backgroundImage: `url(${stickerBacksidePath})`,
	} as React.CSSProperties

	return (
		<div className={stickerClasses} style={stickerStyle}>
			<div className={frontSideClassName} style={frontSideStyle}></div>
			<div className={backSideClassNames} style={backSideStyle}></div>
		</div>
	)
}
