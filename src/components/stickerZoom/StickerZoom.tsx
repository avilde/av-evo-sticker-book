import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { StickerType } from '../../consts'
import { StickerBookState } from '../../state/StickerBookState'
import { Sticker } from '../../state/types'
import { DynamicStickerComponent } from '../sticker/dynamic/DynamicSticker'
import { LogoStickerComponent } from '../sticker/logo/LogoSticker'

import './StickerZoom.css'

interface StickerZoomProps {
	stickerBookState: StickerBookState
}

export const StickerZoom: React.FC<StickerZoomProps> = observer(
	({ stickerBookState }) => {
		const { currentSticker, setCurrentSticker } = stickerBookState

		if (!currentSticker) return null

		function turnAroundSticker() {
			if (!currentSticker) return

			const newSticker: Sticker = { ...currentSticker }
			newSticker.isTurned = !newSticker.isTurned
			setCurrentSticker(newSticker)
		}

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
						className={cn(
							'closeButton',
							'absolute flex justify-center items-center -top-4 -right-4 lg:-top-10 lg:-right-10',
							'w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-white shadow-black shadow-md rotate-45',
							'text-center font-semibold text-lg sm:text-4xl pb-1 sm:pb-2',
							'hover:scale-105 hover:shadow-lg hover:shadow-black'
						)}
						onClick={() => setCurrentSticker(null)}
					>
						+
					</div>

					<button
						className={cn(
							'turnAroundButton',
							'bg-blue-500 shadow-lg shadow-blue-100',
							'absolute flex justify-center items-center -bottom-10',
							'py-1 px-1 md:py-2 md:px-2 rounded-lg',
							'text-white text-[10px] sm:text-sm',
							'hover:shadow-blue-300 hover:scale-105'
						)}
						onClick={turnAroundSticker}
					>
						Turn around
					</button>
				</div>
			</div>
		)
	}
)
