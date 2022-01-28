import cn from 'classnames'
import React from 'react'
import { imagePathMapping } from '../../../assets/images'
import stickerBacksidePath from '../../../assets/stickerBackside.png'

import './DynamicSticker.css'
import { DynamicSticker } from '../../../state/types'

export interface DynamicStickerComponentProps extends DynamicSticker {
	className?: string
}

export const DynamicStickerComponent: React.FC<DynamicStickerComponentProps> =
	({ pageType, gameType, top, left, isTurned, className, nr }) => {
		const borderSizes = 'border md:border-2 lg:border-4 xl:border-4'
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

		const backgroundImage = imagePathMapping[`${gameType}${pageType}`]

		const stickerFrontStyle = {
			backgroundImage: `url(${backgroundImage})`,
			backgroundPosition: `${top}% ${left}%`,
			transform: `rotateY(${isTurned ? '180deg' : '0deg'})`,
		} as React.CSSProperties

		const stickerBacksideStyle = {
			backgroundImage: `url(${stickerBacksidePath})`,
		} as React.CSSProperties

		const pageNumberClassNames = cn(
			'stickerNumber',
			'absolute w-20 h-10',
			'font-extrabold text-2xl font-mono text-gray-50 text-center'
		)

		return (
			<div className={stickerClasses} style={stickerStyle}>
				<div
					className={frontSideClassName}
					style={stickerFrontStyle}
				></div>
				<div
					className={backSideClassNames}
					style={stickerBacksideStyle}
				>
					<div className={pageNumberClassNames}>{nr}</div>
				</div>
			</div>
		)
	}
