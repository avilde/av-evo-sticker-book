import cn from 'classnames'
import React from 'react'
import { imagePathMapping } from '../../../assets/images'
import { PageType } from '../../../consts'
import stickerBacksidePath from '../../../assets/stickerBackside.png'

import './DynamicSticker.css'

export interface DynamicStickerProps {
	pageType: PageType
	backgroundPositionX: number
	backgroundPositionY: number
	isTurned: boolean
	className?: string
}

export const DynamicSticker: React.FC<DynamicStickerProps> = ({
	pageType,
	backgroundPositionX,
	backgroundPositionY,
	isTurned,
	className,
}) => {
	const stickerClasses = cn('dynamicSticker', className)

	const stickerStyle = {
		left: `${backgroundPositionX}%`,
		top: `${backgroundPositionY}%`,
	} as React.CSSProperties

	const frontSideClassName = cn(
		'front',
		'side',
		'border-8',
		'border-white',
		'shadow-xl',
		{ isTurned: isTurned }
	)

	const backSideClassNames = cn(
		'back',
		'side',
		'border',
		'border-slate-300',
		'shadow-xl',
		{ isTurned: isTurned }
	)

	const stickerFrontStyle = {
		backgroundImage: `url(${imagePathMapping[pageType]})`,
		backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%`,
		transform: `rotateY(${isTurned ? '180deg' : '0deg'})`,
	} as React.CSSProperties

	const stickerBacksideStyle = {
		backgroundImage: `url(${stickerBacksidePath})`,
	} as React.CSSProperties

	return (
		<div className={stickerClasses} style={stickerStyle}>
			<div className={frontSideClassName} style={stickerFrontStyle}></div>
			<div
				className={backSideClassNames}
				style={stickerBacksideStyle}
			></div>
		</div>
	)
}
