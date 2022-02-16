import cn from 'classnames'
import React from 'react'
import { logoPathMapping } from '../../../assets/images'
import stickerPlaceholderPath from '../../../assets/stickerPlaceholder.webp'
import { PageSticker, SetDragTarget } from '../../../state/types'

import './PageSticker.css'

export interface PageStickerProps extends PageSticker {
	setDragTarget: SetDragTarget
	selectedStickerNr: number
	isVisible: boolean
	className?: string
}

export const PageStickerComponent: React.FC<PageStickerProps> = React.memo(
	({
		top,
		left,
		isUsed,
		nr,
		isLogo,
		gameType,
		setDragTarget,
		selectedStickerNr,
		isVisible,
		className,
	}) => {
		const borderSizes = 'border md:border-2 lg:border-4 xl:border-4'
		const stickerClasses = cn(
			'pageSticker',
			isUsed ? 'shadow-sm shadow-black' : null,
			!isUsed && isVisible ? 'pointer-events-auto' : null,
			borderSizes,
			selectedStickerNr === nr && !isUsed
				? 'border-green-300'
				: isLogo
				? 'logoBorder'
				: 'border-white',
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
			'font-extrabold font-mono text-center text-white',
			'bg-gray-300 rounded-md pointer-events-none',
			'sm:text-xs md:text-baseline lg:text-lg xl:text-2xl'
		)

		const handleDrag = (isOnTarget: boolean) => {
			if (!isUsed && isVisible) {
				setDragTarget(nr, isOnTarget)
			}
		}

		return (
			<div
				className={stickerClasses}
				style={stickerStyle}
				onDragEnter={() => handleDrag(true)}
				onDragLeave={() => handleDrag(false)}
				onDragOver={(event) => event.preventDefault()}
			>
				{!isUsed ? (
					<div className={stickerNumberClassNames}>{nr}</div>
				) : null}
			</div>
		)
	}
)
