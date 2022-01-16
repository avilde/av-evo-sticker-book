import cn from 'classnames'
import React from 'react'
import { imagePathMapping } from '../../assets/images'
import { PageType } from '../../consts'

import './Page.css'

export interface PageProps {
	pageType: PageType
	isTurned: boolean
	setIsTurned: (index: number) => void
	index: number
}

export const Page: React.FC<PageProps> = ({
	isTurned,
	setIsTurned,
	index,
	pageType,
}) => {
	const pageClasses = cn('page', {
		isTurned: isTurned,
		isOdd: index % 2 > 0,
		isEven: index % 2 === 0,
	})

	const pageStyle = {
		backgroundImage: `url(${imagePathMapping[pageType]})`,
		zIndex: `${index}`,
	} as React.CSSProperties

	return (
		<div
			className={pageClasses}
			onClick={() => setIsTurned(index)}
			style={pageStyle}
		></div>
	)
}
