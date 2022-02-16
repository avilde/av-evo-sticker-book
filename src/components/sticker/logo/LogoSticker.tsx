import cn from 'classnames'
import React from 'react'
import { logoPathMapping } from '../../../assets/images'

import './LogoSticker.css'
import { LogoSticker } from '../../../state/types'

export interface LogoStickerComponentProps extends LogoSticker {
	className?: string
	style?: React.CSSProperties
}

export const LogoStickerComponent: React.FC<LogoStickerComponentProps> =
	React.memo(({ gameType, top, left, nr, className, style }) => {
		const stickerClasses = cn('logoSticker', className)

		const stickerStyle = {
			top: `${top}%`,
			left: `${left}%`,
			...style,
		} as React.CSSProperties

		const borderSizes = 'border md:border-2 lg:border-4 xl:border-4'

		const frontSideClassName = cn('front', 'side', borderSizes, 'shadow-xl')

		const frontSideStyle = {
			backgroundImage: `url(${logoPathMapping[gameType]})`,
		} as React.CSSProperties

		return (
			<div className={stickerClasses} style={stickerStyle}>
				<div
					className={frontSideClassName}
					style={frontSideStyle}
				></div>
			</div>
		)
	})
