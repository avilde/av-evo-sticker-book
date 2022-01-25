import cn from 'classnames'
import React from 'react'
import { logoPathMapping } from '../../../assets/images'
import { GameType } from '../../../consts'
import stickerBacksidePath from '../../../assets/stickerBackside.png'
import stickerPlaceholderPath from '../../../assets/stickerPlaceholder.png'

import './LogoSticker.css'

export interface LogoStickerComponentProps {
	gameType: GameType
	isTurned: boolean
	top: number
	left: number
	isUsed: boolean
	className?: string
}

export const LogoStickerComponent: React.FC<LogoStickerComponentProps> = ({
	gameType,
	isTurned,
	top,
	left,
	isUsed,
	className,
}) => {
	const stickerClasses = cn('logoSticker', className)

	const stickerStyle = {
		top: `${top}%`,
		left: `${left}%`,
	} as React.CSSProperties

	const borderSizes = 'sm:border md:border-2 lg:border-4 xl:border-4'

	const frontSideClassName = cn(
		'front',
		'side',
		borderSizes,
		isUsed ? 'shadow-xl' : null,
		{ isTurned: isTurned }
	)

	const backSideClassNames = cn(
		'back',
		'side',
		'shadow-xl',
		'shadow-slate-300',
		borderSizes,
		'border-white',
		{ isTurned: isTurned }
	)

	const frontSideStyle = {
		backgroundImage: isUsed
			? `url(${logoPathMapping[gameType]})`
			: `url(${stickerPlaceholderPath})`,
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
