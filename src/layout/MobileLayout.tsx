import cn from 'classnames'
import React from 'react'
import frontCoverPath from '../assets/backgrounds/frontCover.webp'

import './MobileLayout.css'

export const MobileLayout: React.FC = () => {
	const frontCoverClasses = cn(
		'mobileLayout',
		'w-full h-full fixed top-0 left-0',
		'border border-black'
	)

	const frontCoverStyle = {
		backgroundImage: `url(${frontCoverPath})`,
	} as React.CSSProperties

	const textSizeClasses =
		'text-sm md:text-lg lg:text-2xl xl:text-4xl 2xl:text-4xl'

	return (
		<div className={frontCoverClasses} style={frontCoverStyle}>
			<span
				className={cn(
					'textContainer',
					'w-full h-10 lg:h-16 flex items-center justify-center',
					'shadow-xl shadow-sky-200 bg-gradient-to-r from-indigo-400 to-sky-700'
				)}
			></span>
			<span
				className={cn(
					'coverText',
					'w-full h-10 lg:h-16 flex items-center justify-center',
					'border-t border-b border-black',
					'text-white px-2 text-center font-semibold text-shadow',
					textSizeClasses
				)}
			>
				The demo works only on desktop devices )
			</span>
		</div>
	)
}
