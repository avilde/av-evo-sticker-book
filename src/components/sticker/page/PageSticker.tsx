import cn from 'classnames'
import React from 'react'
import { logoPathMapping } from '../../../assets/images'
import stickerPlaceholderPath from '../../../assets/stickerPlaceholder.png'
import { PageSticker } from '../../../state/types'

import './PageSticker.css'

export interface PageStickerProps extends PageSticker {
	applySticker: () => void
	isVisible: boolean
	className?: string
}

export const PageStickerComponent: React.FC<PageStickerProps> = ({
	top,
	left,
	isUsed,
	nr,
	isLogo,
	gameType,
	applySticker,
	isVisible,
	className,
}) => {
	const borderSizes = 'border md:border-2 lg:border-4 xl:border-4'
	const stickerClasses = cn(
		'pageSticker',
		isUsed ? 'shadow-sm shadow-black' : null,
		!isUsed && isVisible ? 'cursor-pointer pointer-events-auto' : null,
		borderSizes,
		isLogo ? 'logoBorder' : 'border-white',
		className
	)

	const image =
		isLogo && isUsed
			? logoPathMapping[gameType]
			: isUsed && !isLogo
			? null
			: stickerPlaceholderPath
	const backgroundImage = image ? `url(${image})` : undefined

	const stickerStyle = {
		top: `${top}%`,
		left: `${left}%`,
		backgroundImage: backgroundImage,
		backgroundSize: isUsed && !isLogo ? 'initial' : '100% 100%',
	} as React.CSSProperties

	const stickerNumberClassNames = cn(
		'stickerNumber',
		'absolute w-20 h-8 flex items-center justify-center',
		'font-extrabold font-mono text-center',
		'bg-gray-300 rounded-md text-white',
		'sm:text-xs md:text-baseline lg:text-lg xl:text-2xl'
	)

	return (
		<div
			className={stickerClasses}
			style={stickerStyle}
			onClick={() => !isUsed && isVisible && applySticker()}
		>
			{!isUsed ? (
				<div className={stickerNumberClassNames}>{nr}</div>
			) : null}
		</div>
	)
}
