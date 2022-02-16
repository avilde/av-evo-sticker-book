import cn from 'classnames'
import React from 'react'
import { pagesImageMapping } from '../../../assets/images'

import './DynamicSticker.css'
import { DynamicSticker } from '../../../state/types'

export interface DynamicStickerComponentProps extends DynamicSticker {
	className?: string
	style?: React.CSSProperties
}

const POSITION_X_RATIO = 1.4
const POSITION_Y_RATIO = 1.2

export const DynamicStickerComponent: React.FC<DynamicStickerComponentProps> =
	React.memo(({ pageType, gameType, top, left, className, style }) => {
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

		const backgroundImage = pagesImageMapping[`${gameType}${pageType}`]
		const backgroundPosition = `${left * POSITION_X_RATIO}% ${
			top * POSITION_Y_RATIO
		}%`

		const stickerFrontStyle = {
			backgroundImage: `url(${backgroundImage})`,
			backgroundPosition: backgroundPosition,
		} as React.CSSProperties

		return (
			<div className={stickerClasses} style={stickerStyle}>
				<div
					className={frontSideClassName}
					style={stickerFrontStyle}
				></div>
			</div>
		)
	})
