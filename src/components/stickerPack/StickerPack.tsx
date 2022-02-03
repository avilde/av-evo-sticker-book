import cn from 'classnames'
import React from 'react'
import { Stickers } from '../../state/types'

import frontSidePath from '../../assets/stickerPackFront.png'
import backSidePath from '../../assets/stickerPackBack.png'

import './StickerPack.css'

export interface StickerPackProps {
	stickers: Stickers
	isUsed: boolean
	isTurned: boolean
	className?: string
}

export const StickerPackComponent: React.FC<StickerPackProps> = ({
	stickers,
	isUsed,
	isTurned,
	className,
}) => {
	const stickerPackClasses = cn('stickerPack', className)

	const frontSideClassName = cn('front', 'side', 'shadow-xl', {
		isTurned: isTurned,
	})

	const backSideClassNames = cn(
		'back',
		'side',
		'shadow-xl',
		'shadow-slate-300',
		{ isTurned: isTurned }
	)

	const frontSideStyle = {
		backgroundImage: `url(${frontSidePath})`,
	} as React.CSSProperties

	const backSideStyle = {
		backgroundImage: `url(${backSidePath})`,
	} as React.CSSProperties

	return (
		<div className={stickerPackClasses}>
			<div className={frontSideClassName} style={frontSideStyle}></div>
			<div className={backSideClassNames} style={backSideStyle}></div>
		</div>
	)
}
