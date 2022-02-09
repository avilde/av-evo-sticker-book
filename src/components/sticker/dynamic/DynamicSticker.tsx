import cn from 'classnames'
import React from 'react'
import { imagePathMapping } from '../../../assets/images'

import './DynamicSticker.css'
import { DynamicSticker } from '../../../state/types'

export interface DynamicStickerComponentProps extends DynamicSticker {
	className?: string
	style?: React.CSSProperties
}

export const DynamicStickerComponent: React.FC<DynamicStickerComponentProps> =
	({ pageType, gameType, top, left, className, nr, style }) => {
		const borderSizes = 'border md:border-2 lg:border-4 xl:border-4'
		const stickerClasses = cn('dynamicSticker', className)

		const stickerStyle = {
			top: `${top}%`,
			left: `${left}%`,
			...style,
		} as React.CSSProperties

		const frontSideClassName = cn(
			'front',
			'side',
			'border-white shadow-xl',
			borderSizes
		)

		const backgroundImage = imagePathMapping[`${gameType}${pageType}`]

		const stickerFrontStyle = {
			backgroundImage: `url(${backgroundImage})`,
			backgroundPosition: `${left * 1.6}% ${top * 1.3}%`,
		} as React.CSSProperties

		return (
			<div className={stickerClasses} style={stickerStyle}>
				<div
					className={frontSideClassName}
					style={stickerFrontStyle}
				></div>
			</div>
		)
	}
