import cn from 'classnames'
import React from 'react'
import { imagePathMapping } from '../../../assets/images'
import { gameNames, gameThemeMapping } from '../../../consts'
import { Page, SetDragTarget } from '../../../state/types'
import { PageStickerComponent } from '../../sticker/page/PageSticker'

import './Page.css'

export interface PageComponentProps extends Page {
	index: number
	currentPage: number
	setCurrentPage: (index: number) => void
	zIndex: number
	selectedStickerNr: number
	setDragTarget: SetDragTarget
}

export const PageComponent: React.FC<PageComponentProps> = ({
	gameType,
	pageType,
	index,
	zIndex,
	currentPage,
	setCurrentPage,
	stickers,
	selectedStickerNr,
	setDragTarget,
}) => {
	const theme = gameThemeMapping[gameType]
	const isOdd = index % 2 === 0

	const [showPreview, setShowPreview] = React.useState<boolean>(false)

	const isPreviewEnabled =
		(isOdd && currentPage === index - 1) ||
		(!isOdd && currentPage === index)
	const isTurned = currentPage >= index

	const pageClasses = cn(
		'page',
		'pointer-events-none',
		'border-y',
		theme.borderColor,
		isOdd ? 'border-r' : 'border-l',
		{
			isTurned: isTurned,
			isOdd: isOdd,
			isEven: !isOdd,
			isPreviewEnabled: showPreview,
		}
	)

	const backgroundImage = imagePathMapping[`${gameType}${pageType}`]

	const pageStyle = {
		backgroundImage: `url(${backgroundImage})`,
		zIndex: isOdd ? zIndex : null,
	} as React.CSSProperties

	const pageTurnerClasses = cn(
		'pageTurner',
		isOdd ? 'right-0' : 'left-0',
		'bottom-0 top-0 w-12 h-full absolute',
		'cursor-pointer pointer-events-auto',
		isOdd
			? 'hover:bg-gradient-to-l from-black'
			: 'hover:bg-gradient-to-r from-black',
		{ isTurned: isTurned }
	)

	return (
		<div className={pageClasses} style={pageStyle}>
			{!isOdd ? (
				<div
					className={cn(
						'gameName',
						'absolute top-0 left-0 px-4 h-6 flex justify-center items-center',
						'select-none pointer-events-none',
						`text-white text-[10px] md:text-sm text-semibold uppercase`,
						theme.backgroundColor
					)}
				>
					{gameNames[gameType]}
				</div>
			) : null}

			<div
				className={cn(
					'stickerLayer',
					'select-none pointer-events-none',
					{ isOdd: isOdd, isEven: !isOdd }
				)}
			>
				{stickers?.map((sticker, stickerIndex) => (
					<PageStickerComponent
						key={stickerIndex}
						{...sticker}
						className="sticker"
						isVisible={isPreviewEnabled}
						selectedStickerNr={selectedStickerNr}
						setDragTarget={setDragTarget}
					/>
				))}
			</div>

			<div
				className={pageTurnerClasses}
				onClick={() => {
					setCurrentPage(isOdd ? index + 1 : index - 2)
					setShowPreview(false)
				}}
				onMouseEnter={() => isPreviewEnabled && setShowPreview(true)}
				onMouseLeave={() => isPreviewEnabled && setShowPreview(false)}
			></div>

			<div
				className={cn(
					'pageNumber',
					'absolute bottom-0 w-4 h-4 md:w-8 md:h-8 mb-2',
					'select-none pointer-events-none',
					`text-white text-xs sm:text-sm lg:text-lg text-bold underline text-shadow`,
					theme.textDecorationColor,
					isOdd ? 'right-0 ml-2 text-left' : 'left-0 mr-2 text-right'
				)}
			>
				{index}
			</div>
		</div>
	)
}
