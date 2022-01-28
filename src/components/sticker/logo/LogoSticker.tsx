import cn from 'classnames'
import React from 'react'
import { logoPathMapping } from '../../../assets/images'
import stickerBacksidePath from '../../../assets/stickerBackside.png'

import './LogoSticker.css'
import { LogoSticker } from '../../../state/types'

export interface LogoStickerComponentProps extends LogoSticker {
	className?: string
}

export const LogoStickerComponent: React.FC<LogoStickerComponentProps> = ({
	gameType,
	isTurned,
	top,
	left,
	className,
	nr,
}) => {
	const stickerClasses = cn('logoSticker', className)

	const stickerStyle = {
		top: `${top}%`,
		left: `${left}%`,
	} as React.CSSProperties

	const borderSizes = 'sm:border md:border-2 lg:border-4 xl:border-4'

	const frontSideClassName = cn('front', 'side', borderSizes, 'shadow-xl', {
		isTurned: isTurned,
	})

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
		backgroundImage: `url(${logoPathMapping[gameType]})`,
	} as React.CSSProperties

	const backSideStyle = {
		backgroundImage: `url(${stickerBacksidePath})`,
	} as React.CSSProperties

	const pageNumberClassNames = cn(
		'pageNumber',
		'absolute w-20 h-8 flex items-center justify-center',
		'font-extrabold text-2xl font-mono text-center'
	)

	return (
		<div className={stickerClasses} style={stickerStyle}>
			<div className={frontSideClassName} style={frontSideStyle}></div>
			<div className={backSideClassNames} style={backSideStyle}>
				<div className={cn(pageNumberClassNames, 'text-gray-50')}>
					{nr}
				</div>
			</div>
		</div>
	)
}
