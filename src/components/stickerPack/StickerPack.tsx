import cn from 'classnames'
import React from 'react'
import { Stickers } from '../../state/types'

import frontSidePath from '../../assets/stickerPackFront.webp'
import backSidePath from '../../assets/stickerPackBack.webp'

import './StickerPack.css'
import { StickerType } from '../../consts'
import { DynamicStickerComponent } from '../sticker/dynamic/DynamicSticker'
import { LogoStickerComponent } from '../sticker/logo/LogoSticker'
import { TimeoutMap } from '../../utils/TimeoutMap'
import { getRandomInBetween } from '../../utils/randomDataUtils'
import { RandomWithSeed } from '../../utils/randomWithSeed'

export interface StickerPackProps {
	stickers: Stickers
	isUsed: boolean
	isTurned: boolean
	updateStickerCount: () => void
	random: RandomWithSeed
	className?: string
}

export const StickerPackComponent: React.FC<StickerPackProps> = ({
	stickers,
	isUsed,
	isTurned,
	updateStickerCount,
	random,
	className,
}) => {
	const [startFlyAway, setStartFlyAway] = React.useState(false)
	const [updateStickers, setUpdateStickers] = React.useState(false)
	const [timeoutMap] = React.useState<TimeoutMap>(new TimeoutMap())

	const stickerPackClasses = cn(
		'stickerPack',
		className,
		{ isUsed: isUsed },
		isUsed ? 'absolute' : null
	)

	const frontSideClassName = cn('front', 'side', 'shadow-xl', {
		isTurned: isTurned,
	})

	const backSideClassNames = cn('back', 'side', 'shadow-xl', {
		isTurned: isTurned,
	})

	const frontSideStyle = {
		backgroundImage: `url(${frontSidePath})`,
		zIndex: isUsed ? 6 : 0,
	} as React.CSSProperties

	const backSideStyle = {
		backgroundImage: `url(${backSidePath})`,
		display: isUsed ? 'none' : 'block',
	} as React.CSSProperties

	if (isUsed && !startFlyAway) {
		timeoutMap.addTimeout({
			uniqueId: 'fly-away',
			timer: 1000,
			callback: () => {
				setStartFlyAway(true)
			},
		})
	}

	if (startFlyAway && !updateStickers) {
		setUpdateStickers(true)
	}

	if (isUsed && startFlyAway && updateStickers) {
		timeoutMap.addTimeout({
			uniqueId: 'update-stickers',
			timer: 100,
			callback: () => {
				updateStickerCount()
			},
		})
	}

	return (
		<div className={stickerPackClasses}>
			<div className={frontSideClassName} style={frontSideStyle}></div>
			{isUsed &&
				stickers.map((sticker, index) => {
					const randomRotate = getRandomInBetween(random, -4, 4)
					return (
						<div
							key={index}
							className={cn('sticker', 'absolute', {
								flyAway: startFlyAway,
							})}
							style={{
								zIndex: stickers.length - index,
								animationDelay: startFlyAway
									? `${index * 0.3}s`
									: `${index * 0.01}s`,
							}}
						>
							{sticker.type === StickerType.Logo ? (
								<LogoStickerComponent
									{...sticker}
									className="stickerPackSticker"
									style={{
										transform: `rotate(${
											index * randomRotate
										}deg)`,
									}}
								/>
							) : (
								<DynamicStickerComponent
									{...sticker}
									className="stickerPackSticker"
									style={{
										transform: `rotate(${
											index * randomRotate
										}deg)`,
									}}
								/>
							)}
						</div>
					)
				})}
			<div className={backSideClassNames} style={backSideStyle}></div>
		</div>
	)
}
