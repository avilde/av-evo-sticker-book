import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { StickerType } from '../../consts'
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
		const { stickerCountMap, getSticker } = stickerBookState

		return (
			<div
				className={cn(
					'stickerList',
					'flex flex-col border overflow-y-auto overflow-x-hidden',
					className
				)}
			>
				{Object.keys(stickerCountMap).map((nr) => {
					const sticker = getSticker(+nr)
					const count = stickerCountMap[+nr]

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
										'absolute',
										'flex',
										'justify-center',
										'w-8 lg:w-10',
										'h-6 lg:h-8',
										'right-8',
										'bottom-4',
										'text-sm md:text-baseline lg:text-lg xl:text-xl',
										'font-semibold shadow-sm shadow-black',
										'text-white bg-slate-800'
									)}
								>
									{count}
								</div>
							) : null}

							<div
								className={cn(
									'stickerNumber',
									'absolute',
									'flex',
									'justify-center',
									'w-6 lg:w-8',
									'h-6 lg:h-8',
									'left-6',
									'top-2',
									'text-sm md:text-baseline lg:text-lg xl:text-xl',
									'font-semibold font-mono',
									'text-white text-shadow'
								)}
							>
								{nr}
							</div>
						</div>
					)
				})}
			</div>
		)
	}
)
