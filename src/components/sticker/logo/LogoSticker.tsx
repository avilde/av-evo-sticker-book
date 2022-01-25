import cn from 'classnames'
import React from 'react'
import { logoPathMapping } from '../../../assets/images'
import { GameType } from '../../../consts'
import stickerBacksidePath from '../../../assets/stickerBackside.png'

import './LogoSticker.css'

export interface LogoStickerComponentProps {
	gameType: GameType
	isTurned: boolean
	top: number
	left: number
	className?: string
}

export const LogoStickerComponent: React.FC<LogoStickerComponentProps> = ({
	gameType,
	isTurned,
	className,
	top,
	left,
}) => {
	const stickerClasses = cn('logoSticker', className)

	const stickerStyle = {
		transform: `translate(${top}%, ${left * 3}%)`,
	} as React.CSSProperties

	const borderSizes = 'sm:border md:border-2 lg:border-4 xl:border-8'

	const frontSideClassName = cn('front', 'side', borderSizes, 'shadow-xl', {
		isTurned: isTurned,
	})

	const backSideClassNames = cn(
		'back',
		'side',
		'shadow-xl',
		'shadow-slate-300',
		'border',
		'border-slate-300',
		{ isTurned: isTurned }
	)

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
