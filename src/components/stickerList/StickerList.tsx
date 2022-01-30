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
		const { stickers } = stickerBookState

		return (
			<div
				className={cn(
					'stickerList',
					'flex flex-col border overflow-y-auto overflow-x-hidden',
					className
				)}
			>
				{stickers.map((sticker, index) => {
					return (
						<div
							key={index}
							className={cn(
								'sticker',
								'relative flex justify-center items-center my-1'
							)}
						>
							{sticker.type === StickerType.Logo ? (
								<LogoStickerComponent
									key={sticker.nr}
									{...sticker}
									className="stickerListSticker"
								/>
							) : (
								<DynamicStickerComponent
									key={sticker.nr}
									{...sticker}
									className="stickerListSticker"
								/>
							)}

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
									'text-white font-semibold',
									'shadow-sm shadow-black bg-slate-800'
								)}
							>
								x1
							</div>
						</div>
					)
				})}
			</div>
		)
	}
)
