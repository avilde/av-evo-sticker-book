import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { gameThemeMapping, StickerType } from '../../consts'
import { StickerBookState } from '../../state/StickerBookState'
import { DynamicStickerComponent } from '../sticker/dynamic/DynamicSticker'
import { LogoStickerComponent } from '../sticker/logo/LogoSticker'

import './StickerList.css'

interface StickerListProps {
	stickerBookState: StickerBookState
	className?: string
}

export const StickerList: React.FC<StickerListProps> = observer(
	({ stickerBookState, className }) => {
		const { stickerCountMap, findSticker, getStickers } = stickerBookState

		return (
			<div
				className={cn(
					'stickerList',
					'flex flex-col ml-4 mt-16',
					className
				)}
			>
				<div className="mb-3 flex justify-center items-center">
					<button
						className={cn(
							'bg-blue-500 shadow-lg shadow-blue-100',
							'py-2 px-4 rounded-lg',
							'text-white text-[12px] sm:text-sm md:text-baseline lg:text-lg',
							'hover:shadow-blue-300 hover:scale-105'
						)}
						onClick={() => getStickers()}
					>
						Get more stickers
					</button>
				</div>

				<div className="stickers flex flex-col border overflow-y-auto overflow-x-hidden">
					{Object.keys(stickerCountMap).map((nr) => {
						const sticker = findSticker(+nr)
						const count = stickerCountMap[+nr]
						const theme = gameThemeMapping[sticker.gameType]

						return (
							<div
								key={nr}
								className={cn(
									'sticker',
									'relative flex justify-center items-center my-1',
									{ disabled: count === 0 }
								)}
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

								{count > 0 ? (
									<div
										className={cn(
											'stickerCount',
											'absolute bottom-2 right-2 lg:bottom-4 lg:right-4',
											'w-4 h-4',
											'text-[10px]',
											'bg-slate-800 shadow-sm shadow-black',
											'text-white text-center font-semibold'
										)}
									>
										x{count}
									</div>
								) : null}

								<div
									className={cn(
										'stickerNumber',
										'absolute left-2 top-2',
										'w-6 h-6 lg:w-8 lg:h-8',
										'text-sm md:text-baseline lg:text-lg xl:text-xl',
										'font-semibold font-mono',
										'text-center text-shadow-md underline rounded-full border',
										count === 0
											? 'grayscale bg-gray-500'
											: 'bg-black',
										theme.textDecorationColor,
										theme.textColor,
										theme.borderColor
									)}
								>
									{nr}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
)
