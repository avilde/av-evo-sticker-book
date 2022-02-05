import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StickerBookState } from '../../state/StickerBookState'
import { StickerPack } from '../../state/types'
import { TimeoutMap } from '../../utils/TimeoutMap'
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
			currentStickerPack.isTurned ||
			isOpenDisabled ||
			currentStickerPack.isUsed

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

		function openStickerPack() {
			if (!currentStickerPack) return

			stickerBookState.decreaseStickerPacksAcquired()
			stickerBookState.increaseStickerPacksOpened()

			const newStickerPack: StickerPack = { ...currentStickerPack }
			newStickerPack.isUsed = true
			setCurrentStickerPack(newStickerPack)
		}

		function updateStickerCount() {
			if (!currentStickerPack) return

			stickerBookState.updateStickerCount()
		}

		return (
			<div
				className={cn(
					'stickerPackZoom',
					'absolute fixed w-full h-full',
					'pointer-events-auto',
					{ isUsed: currentStickerPack.isUsed }
				)}
			>
				<div className="stickerPackContainer absolute flex justify-center items-center">
					<div className="stickerPack absolute">
						<StickerPackComponent
							{...currentStickerPack}
							updateStickerCount={updateStickerCount}
						/>
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
						style={{ opacity: !currentStickerPack.isUsed ? 1 : 0 }}
					>
						+
					</div>

					<div
						className="flex justify-center items-center absolute -bottom-20"
						style={{
							opacity: !currentStickerPack.isUsed ? 1 : 0,
							transition: 'opacity 0.5s linear',
						}}
					>
						<button
							className={cn(
								'flex',
								'bg-blue-500 shadow-md',
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
								'ml-2 py-2 px-2 rounded-lg shadow-md',
								'text-white text-[10px] sm:text-sm',
								!isOpenStickerDisabled
									? 'hover:shadow-blue-300 hover:scale-105 bg-blue-500'
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
