import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { gameThemeMapping, StickerType } from '../../consts'
import { StickerBookState } from '../../state/StickerBookState'
import { DynamicStickerComponent } from '../sticker/dynamic/DynamicSticker'
import { LogoStickerComponent } from '../sticker/logo/LogoSticker'
import stickerPackMiniPath from '../../assets/stickerPackMini.png'

import './StickerList.css'
import React from 'react'
import { Seed } from './seed/Seed'

interface StickerListProps {
	stickerBookState: StickerBookState
	className?: string
}

export const StickerList: React.FC<StickerListProps> = observer(
	({ stickerBookState, className }) => {
		const {
			stickers,
			getNewStickerPack,
			stickerPacksAcquired,
			stickerPacksOpened,
			setSelectedStickerNr,
			stickerPacks,
			setCurrentStickerPack,
			applySticker,
			seed,
			setNewSeed,
		} = stickerBookState

		const [showCount, setShowCount] = React.useState(true)

		return (
			<div
				className={cn(
					'stickerList',
					'relative flex flex-col justify-start align-center mx-3 mt-3',
					className
				)}
			>
				<Seed seed={String(seed)} setNewSeed={setNewSeed} />

				<div
					className={cn(
						'stickerPackButton',
						'relative flex w-20 h-16 lg:w-32 lg:h-28 self-center items-center shrink-0 mb-2',
						'bg-no-repeat select-none',
						stickerPacksAcquired === 0
							? 'pointer-events-none grayscale opacity-50'
							: 'cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-gray-300'
					)}
					style={{
						backgroundImage: `url(${stickerPackMiniPath})`,
					}}
					title="Open sticker pack"
					onClick={() => setCurrentStickerPack(stickerPacks[0])}
				>
					{stickerPacksAcquired > 0 ? (
						<div
							className={cn(
								'stickerPacksAcquired',
								'absolute bottom-4 right-2 w-4 h-4',
								'select-none bg-slate-800 shadow-sm shadow-black',
								'text-[10px] text-white text-center font-semibold'
							)}
						>
							x{stickerPacksAcquired}
						</div>
					) : null}
				</div>

				<div className="flex flex-col justify-center items-center mb-3">
					<button
						className={cn(
							'p-1 lg:py-2 lg:px-4',
							'bg-blue-500 shadow-lg shadow-blue-100 rounded-lg select-none',
							'text-white text-[12px] md:text-baseline',
							'hover:shadow-blue-300 hover:scale-105'
						)}
						onClick={() => getNewStickerPack()}
					>
						Get more stickers
					</button>

					<div className="text-[10px] select-none">
						Sticker packs opened: {stickerPacksOpened}
					</div>
				</div>

				<div
					className={cn(
						'stickers',
						'flex flex-col overflow-y-scroll overflow-x-hidden border px-3 py-1'
					)}
				>
					{stickers.map((sticker) => {
						const count = sticker.count
						const theme = gameThemeMapping[sticker.gameType]
						const key = `${sticker.nr}-${sticker.gameType}-${sticker.left}-${sticker.top}`

						return (
							<div
								key={`${key}-sticker`}
								className={cn(
									'sticker',
									className,
									'relative flex justify-center items-center my-1',
									count === 0
										? 'pointer-events-none'
										: 'cursor-pointer',
									{ disabled: count === 0 }
								)}
								draggable
								onDragStart={() => {
									setShowCount(false)
									setSelectedStickerNr(sticker.nr)
								}}
								onDragEnd={() => {
									applySticker()
									setShowCount(true)
								}}
							>
								{sticker.type === StickerType.Logo ? (
									<LogoStickerComponent
										{...sticker}
										className="stickerListSticker"
									/>
								) : (
									<DynamicStickerComponent
										{...sticker}
										className="stickerListSticker"
									/>
								)}

								{showCount && count > 0 ? (
									<div
										key={`${key}-count`}
										className={cn(
											'stickerCount',
											'absolute bottom-2 right-2 lg:bottom-4 lg:right-4 w-4 h-4',
											'bg-slate-800 shadow-sm shadow-black',
											'text-[10px] select-none text-white text-center font-semibold'
										)}
									>
										x{count}
									</div>
								) : null}

								<div
									key={`${key}-nr`}
									className={cn(
										'stickerNumber',
										'absolute left-2 top-2 w-6 h-6 lg:w-8 lg:h-8',
										'text-sm md:text-baseline lg:text-lg xl:text-xl select-none',
										'text-center text-shadow-md underline rounded-full border font-semibold font-mono',
										count === 0
											? 'grayscale bg-gray-500'
											: 'bg-black',
										theme.textDecorationColor,
										theme.textColor,
										theme.borderColor
									)}
								>
									{sticker.nr}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
)
