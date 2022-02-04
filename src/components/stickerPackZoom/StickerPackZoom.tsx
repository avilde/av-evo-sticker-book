import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StickerBookState } from '../../state/StickerBookState'
import { StickerPack } from '../../state/types'
import { TimeoutMap } from '../../utils/Timeout'
import { StickerPackComponent } from '../stickerPack/StickerPack'

import './StickerPackZoom.css'

interface StickerPackZoomProps {
	stickerBookState: StickerBookState
}

export const StickerPackZoom: React.FC<StickerPackZoomProps> = observer(
	({ stickerBookState }) => {
		const { currentStickerPack, setCurrentStickerPack } = stickerBookState
		const [isOpenDisabled, setIsOpenDisabled] = React.useState<boolean>()
		const [timeoutMap] = React.useState<TimeoutMap>(new TimeoutMap())

		if (!currentStickerPack) return null

		const isOpenStickerDisabled =
			isOpenDisabled || currentStickerPack.isUsed

		function turnAroundStickerPack() {
			if (!currentStickerPack) return

			setIsOpenDisabled(true)

			timeoutMap.addTimeout({
				uniqueId: 'unblock-open-button',
				timer: 800 /* sticker pack rotate animation duration */,
				callback: () => {
					setIsOpenDisabled(false)
				},
			})

			const newStickerPack: StickerPack = { ...currentStickerPack }
			newStickerPack.isTurned = !newStickerPack.isTurned
			setCurrentStickerPack(newStickerPack)
		}

		function openStickerPack() {}

		return (
			<div className="stickerPackZoom relative fixed w-full h-full pointer-events-auto">
				<div className="stickerPackContainer absolute flex justify-center items-center">
					<div className="stickerPack absolute">
						<StickerPackComponent {...currentStickerPack} />
					</div>

					<div
						title="Close"
						role="button"
						className={cn(
							'closeButton',
							'absolute flex justify-center items-center -top-2 -right-2 lg:-top-10 lg:-right-10',
							'w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-white shadow-black shadow-md rotate-45',
							'text-center font-semibold text-lg md:text-4xl pb-1 md:pb-2',
							'hover:scale-105 hover:shadow-lg hover:shadow-black'
						)}
						onClick={() => setCurrentStickerPack(null)}
					>
						+
					</div>

					<div className="flex justify-center items-center absolute -bottom-12">
						<button
							className={cn(
								'bg-blue-500 shadow-lg shadow-blue-100',
								'flex',
								'py-2 px-2 rounded-lg',
								'text-white text-[10px] sm:text-sm',
								'hover:shadow-blue-300 hover:scale-105'
							)}
							onClick={turnAroundStickerPack}
						>
							Turn around
						</button>

						<button
							className={cn(
								'flex',
								'ml-2 py-2 px-2 rounded-lg',
								'text-white text-[10px] sm:text-sm',
								!isOpenStickerDisabled
									? 'hover:shadow-blue-300 hover:scale-105 bg-blue-500 shadow-lg shadow-blue-100'
									: 'grayscale-0 bg-gray-200 text-black',
								'disabled:opacity-75'
							)}
							onClick={openStickerPack}
							disabled={isOpenStickerDisabled}
						>
							Open sticker pack
						</button>
					</div>
				</div>
			</div>
		)
	}
)
