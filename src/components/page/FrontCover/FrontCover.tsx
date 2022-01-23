import cn from 'classnames'
import React from 'react'
import { imagePathMapping } from '../../../assets/images'
import { PageType } from '../../../consts'

import './FrontCover.css'

export interface FrontCoverProps {
	isTurned: boolean
	zIndex: number
	onClick: React.MouseEventHandler<HTMLDivElement>
}

export const FrontCover: React.FC<FrontCoverProps> = ({
	isTurned,
	zIndex,
	onClick,
}) => {
	const frontCoverClasses = cn('frontCover', {
		isTurned: isTurned,
	})

	const frontCoverStyle = {
		backgroundImage: `url(${imagePathMapping[PageType.FrontCover]})`,
		zIndex: zIndex,
	} as React.CSSProperties

	return (
		<div
			className={frontCoverClasses}
			style={frontCoverStyle}
			onClick={onClick}
		>
			<div></div>
		</div>
	)
}
