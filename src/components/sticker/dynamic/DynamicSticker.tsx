import cn from 'classnames'
import React from 'react'
import { imagePathMapping } from '../../../assets/images'
import { PageType } from '../../../consts'
import stickerBacksidePath from '../../../assets/stickerBackside.png'

import './DynamicSticker.css'

export interface DynamicStickerComponentProps {
	pageType: PageType
	top: number
	left: number
	isTurned: boolean
	className?: string
}

export const DynamicStickerComponent: React.FC<DynamicStickerComponentProps> =
	({ pageType, top, left, isTurned, className }) => {
		const borderSizes = 'sm:border md:border-2 lg:border-4 xl:border-4'
		const stickerClasses = cn('dynamicSticker', className)

		const stickerStyle = {
			top: `${top}%`,
			left: `${left}%`,
		} as React.CSSProperties

		const frontSideClassName = cn(
			'front',
			'side',
			'border-white',
			'shadow-xl',
			borderSizes,
			{ isTurned: isTurned }
		)

		const backSideClassNames = cn(
			'back',
			'side',
			borderSizes,
			'border-white',
			'shadow-xl',
			{ isTurned: isTurned }
		)

		const stickerFrontStyle = {
			backgroundImage: `url(${imagePathMapping[pageType]})`,
			backgroundPosition: `${top}% ${left}%`,
			transform: `rotateY(${isTurned ? '180deg' : '0deg'})`,
		} as React.CSSProperties

		const stickerBacksideStyle = {
			backgroundImage: `url(${stickerBacksidePath})`,
		} as React.CSSProperties

		return (
			<div className={stickerClasses} style={stickerStyle}>
				<div
					className={frontSideClassName}
					style={stickerFrontStyle}
				></div>
				<div
					className={backSideClassNames}
					style={stickerBacksideStyle}
				></div>
			</div>
		)
	}
