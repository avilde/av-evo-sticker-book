import cn from 'classnames'
import React from 'react'
import { logoPathMapping } from '../../../assets/images'
import { GameType } from '../../../consts'
import stickerBacksidePath from '../../../assets/stickerBackside.png'

import './LogoSticker.css'

export interface LogoStickerProps {
	gameType: GameType
	isTurned: boolean
}

export const LogoSticker: React.FC<LogoStickerProps> = ({
	gameType,
	isTurned,
}) => {
	const frontSideClassName = cn('front', 'side', {
		isTurned: isTurned,
	})

	const backSideClassNames = cn('back', 'side', {
		isTurned: isTurned,
	})

	const stickerStyle = {
		backgroundImage: `url(${logoPathMapping[gameType]})`,
	} as React.CSSProperties

	const stickerBacksideStyle = {
		backgroundImage: `url(${stickerBacksidePath})`,
	} as React.CSSProperties

	return (
		<div className="logo-sticker">
			<div className={frontSideClassName} style={stickerStyle}></div>
			<div
				className={backSideClassNames}
				style={stickerBacksideStyle}
			></div>
		</div>
	)
}
