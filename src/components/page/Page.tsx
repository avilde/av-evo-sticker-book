import cn from 'classnames'
import React from 'react'
import { imagePathMapping } from '../../assets/images'
import { PageType } from '../../consts'

import './Page.css'

export interface PageProps {
	pageType: PageType
	isTurned: boolean
	isOdd: boolean
	isEven: boolean
	zIndex: number
	index: number
	setCurrentPage: (index: number) => void
}

export const Page: React.FC<PageProps> = ({
	isTurned,
	isOdd,
	isEven,
	zIndex,
	index,
	pageType,
	setCurrentPage,
}) => {
	const pageClasses = cn('page', {
		isTurned: isTurned,
		isOdd: isOdd,
		isEven: isEven,
	})

	const pageStyle = {
		backgroundImage: `url(${imagePathMapping[pageType]})`,
		zIndex: isOdd ? zIndex : null,
	} as React.CSSProperties

	return (
		<div
			className={pageClasses}
			style={pageStyle}
			onClick={() => setCurrentPage(isOdd ? index + 1 : index - 2)}
		></div>
	)
}
