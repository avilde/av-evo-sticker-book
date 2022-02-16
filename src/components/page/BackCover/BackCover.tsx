import cn from 'classnames'
import React from 'react'
import backCoverPath from '../../../assets/backgrounds/backCover.webp'

import './BackCover.css'

export interface BackCoverProps {
	isTurned: boolean
	onClick: React.MouseEventHandler<HTMLDivElement>
}

export const BackCover: React.FC<BackCoverProps> = React.memo(
	({ isTurned, onClick }) => {
		const backCoverClasses = cn(
			'backCover',
			'relative border border-black cursor-pointer',
			{ isTurned: isTurned }
		)

		const backCoverStyle = {
			backgroundImage: `url(${backCoverPath})`,
		} as React.CSSProperties

		const textSizeClasses = 'text-[12px] sm:text-sm md:text-baseline'

		return (
			<div
				className={backCoverClasses}
				style={backCoverStyle}
				onClick={onClick}
			>
				<span
					className={cn(
						'textContainer',
						'w-full h-6 absolute bottom-12',
						'bg-gradient-to-r from-slate-100 to-amber-700 shadow-xl shadow-amber-200'
					)}
				></span>

				<span
					className={cn(
						'coverText',
						'w-full h-6 flex items-center justify-center',
						'border-t border-b border-black',
						'text-black text-shadow px-2 text-center font-semibold',
						textSizeClasses
					)}
				>
					Made by
					<span className="hover:underline decoration-sky-400 text-white ml-2">
						<a
							href="https://www.linkedin.com/in/andris-vilde/"
							target="_blank"
							rel="noreferrer"
						>
							Andris Vilde
						</a>
					</span>
				</span>
			</div>
		)
	}
)
