import cn from 'classnames'
import React from 'react'
import backCoverPath from '../../../assets/backgrounds/backCover.png'

import './BackCover.css'

export interface BackCoverProps {
	isTurned: boolean
	onClick: React.MouseEventHandler<HTMLDivElement>
}

export const BackCover: React.FC<BackCoverProps> = ({ isTurned, onClick }) => {
	const backCoverClasses = cn(
		'backCover',
		'border',
		'border-black',
		'cursor-pointer',
		{
			isTurned: isTurned,
		}
	)

	const backCoverStyle = {
		backgroundImage: `url(${backCoverPath})`,
	} as React.CSSProperties

	return (
		<div
			className={backCoverClasses}
			style={backCoverStyle}
			onClick={onClick}
		></div>
	)
}
