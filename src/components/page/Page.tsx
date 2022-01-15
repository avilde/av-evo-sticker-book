import React from 'react'
import { imagePathMapping } from '../../assets/images'
import { GameType } from '../../consts'

import '../stickerBook/StickerBook.css'

export interface PageProps {
	gameType: GameType
	isTurned: boolean
	setIsTurned: (index: number) => void
	index: number
}

export const Page: React.FC<PageProps> = ({
	isTurned,
	setIsTurned,
	index,
	gameType,
}) => {
	return (
		<div
			className={`page${isTurned ? ' flipped' : ''}`}
			onClick={() => setIsTurned(index)}
		>
			<img className="" src={imagePathMapping[gameType]} alt={gameType} />
		</div>
	)
}
