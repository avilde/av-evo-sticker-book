import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { StickerType } from '../../consts'
import { StickerBookState } from '../../state/StickerBookState'
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
							'absolute flex justify-center items-center -top-6 -right-6',
							'w-6 h-6 rounded-full bg-white shadow-black shadow-md rotate-45',
							'text-center font-semibold text-xl pb-1',
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
							'py-2 px-2 rounded-lg',
							'text-white text-[10px] sm:text-sm',
							'hover:shadow-blue-300 hover:scale-105'
						)}
						onClick={() => {
							currentSticker.isTurned = !currentSticker.isTurned
						}}
					>
						Turn around
					</button>
				</div>
			</div>
		)
	}
)
