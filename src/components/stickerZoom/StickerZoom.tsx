import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StickerType } from '../../consts'
import { StickerBookState } from '../../state/StickerBookState'
import { Sticker } from '../../state/types'
import { TimeoutMap } from '../../utils/TimeoutMap'
import { DynamicStickerComponent } from '../sticker/dynamic/DynamicSticker'
import { LogoStickerComponent } from '../sticker/logo/LogoSticker'

import './StickerZoom.css'

interface StickerZoomProps {
	stickerBookState: StickerBookState
}

export const StickerZoom: React.FC<StickerZoomProps> = observer(
	({ stickerBookState }) => {
		const { currentSticker, setCurrentSticker } = stickerBookState
		const [isApplyDisabled, setIsApplyDisabled] = React.useState(false)
		const [timeoutMap] = React.useState<TimeoutMap>(new TimeoutMap())

		if (!currentSticker) return null

		const isApplyButtonDisabled =
			currentSticker.isUsed || currentSticker.isTurned || isApplyDisabled

		function turnAroundSticker() {
			if (!currentSticker) return

			setIsApplyDisabled(true)

			timeoutMap.addTimeout({
				uniqueId: 'unblock-apply-button',
				timer: 600,
				callback: () => setIsApplyDisabled(false),
			})

			const newSticker: Sticker = { ...currentSticker }
			newSticker.isTurned = !newSticker.isTurned
			setCurrentSticker(newSticker)
		}

		function applyStickerPack() {
			if (!currentSticker) return
		}

		const closeButtonClassNames = cn(
			'closeButton',
			'flex justify-center items-center',
			'absolute -top-4 -right-4 lg:-top-10 lg:-right-10 w-6 h-6 lg:w-10 lg:h-10',
			'rounded-full bg-white shadow-black shadow-md rotate-45',
			'text-center font-semibold text-lg sm:text-4xl pb-1 sm:pb-2',
			'hover:scale-105 hover:shadow-lg hover:shadow-black'
		)

		const turnAroundButtonClassNames = cn(
			'flex',
			'py-2 px-2 rounded-lg',
			'bg-blue-500 shadow-md',
			'text-white text-[10px] sm:text-sm',
			'hover:shadow-blue-300 hover:scale-105'
		)

		const applyButtonClassNames = cn(
			'flex',
			'ml-2 py-2 px-2 rounded-lg shadow-md',
			'text-white text-[10px] sm:text-sm',
			!isApplyButtonDisabled
				? 'hover:shadow-blue-300 hover:scale-105 bg-blue-500'
				: 'grayscale-0 bg-gray-200 text-black',
			'disabled:opacity-75'
		)

		return (
			<div className="stickerZoom fixed w-full h-full pointer-events-auto">
				<div className="stickerContainer absolute flex justify-center items-center">
					<div className="sticker absolute">
						{currentSticker.type === StickerType.Logo ? (
							<LogoStickerComponent
								{...currentSticker}
								className="stickerZoomSticker"
							/>
						) : (
							<DynamicStickerComponent
								{...currentSticker}
								className="stickerZoomSticker"
							/>
						)}
					</div>

					<div
						title="Close"
						role="button"
						className={closeButtonClassNames}
						onClick={() => setCurrentSticker(null)}
					>
						+
					</div>

					<div
						className="flex justify-center items-center absolute -bottom-20"
						style={{
							opacity: !currentSticker.isUsed ? 1 : 0,
							transition: 'opacity 0.5s linear',
						}}
					>
						<button
							className={turnAroundButtonClassNames}
							onClick={turnAroundSticker}
						>
							Turn around
						</button>

						<button
							className={applyButtonClassNames}
							onClick={applyStickerPack}
							disabled={isApplyButtonDisabled}
						>
							Apply sticker
						</button>
					</div>
				</div>
			</div>
		)
	}
)
