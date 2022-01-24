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
	const frontCoverClasses = cn(
		'frontCover',
		'border-2',
		'border-black',
		'cursor-pointer',
		{
			isTurned: isTurned,
		}
	)

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
			<span
				className={cn(
					'textContainer',
					'w-full h-16 shadow-xl shadow-sky-200',
					'flex items-center justify-center',
					'bg-gradient-to-r from-slate-100 to-sky-700'
				)}
			></span>
			<span
				className={cn(
					'coverText',
					'w-full h-16 border-t-2 border-b-2 border-black',
					'flex items-center justify-center',
					'text-black text-4xl px-2 text-center font-semibold'
				)}
			>
				Evolution sticker book
				<span className="font-bold text-slate-200 pl-5 text-4xl">
					2022
				</span>
			</span>
		</div>
	)
}
