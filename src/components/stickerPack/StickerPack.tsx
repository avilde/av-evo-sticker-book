import cn from 'classnames'
import React from 'react'
import { Stickers } from '../../state/types'

import frontSidePath from '../../assets/stickerPackFront.png'
import backSidePath from '../../assets/stickerPackBack.png'

import './StickerPack.css'
import { StickerType } from '../../consts'
import { DynamicStickerComponent } from '../sticker/dynamic/DynamicSticker'
import { LogoStickerComponent } from '../sticker/logo/LogoSticker'

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

	const backSideClassNames = cn('back', 'side', 'shadow-xl', {
		isTurned: isTurned,
	})

	const frontSideStyle = {
		backgroundImage: `url(${frontSidePath})`,
		zIndex: isTurned ? 0 : 6,
	} as React.CSSProperties

	const backSideStyle = {
		backgroundImage: `url(${backSidePath})`,
		zIndex: isTurned ? 0 : 6,
	} as React.CSSProperties

	return (
		<div className={stickerPackClasses}>
			<div className={frontSideClassName} style={frontSideStyle}></div>
			{isUsed &&
				stickers.map((sticker, index) => {
					return (
						<div
							key={index}
							className={cn(
								'sticker',
								'absolute',
								'top-50',
								'left-50'
							)}
							style={{ zIndex: stickers.length - index }}
						>
							{sticker.type === StickerType.Logo ? (
								<LogoStickerComponent
									{...sticker}
									className="stickerPackSticker"
								/>
							) : (
								<DynamicStickerComponent
									{...sticker}
									className="stickerPackSticker"
								/>
							)}
						</div>
					)
				})}
			<div className={backSideClassNames} style={backSideStyle}></div>
		</div>
	)
}
