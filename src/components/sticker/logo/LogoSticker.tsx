import cn from 'classnames'
import React from 'react'
import { logoPathMapping } from '../../../assets/images'
import stickerBacksidePath from '../../../assets/stickerBackside.png'

import './LogoSticker.css'
import { LogoSticker } from '../../../state/types'

export interface LogoStickerComponentProps extends LogoSticker {
	className?: string
	style?: React.CSSProperties
}

export const LogoStickerComponent: React.FC<LogoStickerComponentProps> = ({
	gameType,
	isTurned,
	top,
	left,
	nr,
	className,
	style,
}) => {
	const stickerClasses = cn('logoSticker', className)

	const stickerStyle = {
		top: `${top}%`,
		left: `${left}%`,
		...style,
	} as React.CSSProperties

	const borderSizes = 'border md:border-2 lg:border-4 xl:border-4'

	const frontSideClassName = cn('front', 'side', borderSizes, 'shadow-xl', {
		isTurned: isTurned,
	})

	const backSideClassNames = cn(
		'back',
		'side',
		'shadow-xl shadow-slate-300 border-white',
		borderSizes,
		{ isTurned: isTurned }
	)

	const frontSideStyle = {
		backgroundImage: `url(${logoPathMapping[gameType]})`,
	} as React.CSSProperties

	const backSideStyle = {
		backgroundImage: `url(${stickerBacksidePath})`,
	} as React.CSSProperties

	const pageNumberClassNames = cn(
		'stickerNumber',
		'absolute top-0 left-0 md:pt-1 lg:pt-2 w-full h-full flex justify-center items-start',
		'font-extrabold text-[2vw] font-mono text-gray-50 text-center select-none'
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
