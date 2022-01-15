import frontCoverImagePath from '../../assets/backgrounds/frontCover.png'
import backCoverImagePath from '../../assets/backgrounds/backCover.png'

import '../stickerBook/StickerBook.css'
import React from 'react'

export interface CoverPageProps {
	isTurned: boolean
	setIsTurned: (index: number) => void
	index: number
	/** Front or back cover of sticker book */
	isFrontCover?: boolean
}

export const CoverPage: React.FC<CoverPageProps> = ({
	isFrontCover,
	isTurned,
	setIsTurned,
	index,
}) => {
	const imageSrc = !!isFrontCover ? frontCoverImagePath : backCoverImagePath

	return (
		<div
			className={`page${isTurned ? ' flipped' : ''}`}
			onClick={() => setIsTurned(index)}
		>
			<img className="" src={imageSrc} alt={imageSrc} />
		</div>
	)
}
