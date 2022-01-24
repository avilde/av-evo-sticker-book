import cn from 'classnames'
import React from 'react'
import { imagePathMapping } from '../../../assets/images'
import { PageType } from '../../../consts'

import './BackCover.css'

export interface BackCoverProps {
	isTurned: boolean
	onClick: React.MouseEventHandler<HTMLDivElement>
}

export const BackCover: React.FC<BackCoverProps> = ({ isTurned, onClick }) => {
	const backCoverClasses = cn(
		'backCover',
		'border-2',
		'border-black',
		'cursor-pointer',
		{
			isTurned: isTurned,
		}
	)

	const backCoverStyle = {
		backgroundImage: `url(${imagePathMapping[PageType.BackCover]})`,
	} as React.CSSProperties

	return (
		<div
			className={backCoverClasses}
			style={backCoverStyle}
			onClick={onClick}
		></div>
	)
}
