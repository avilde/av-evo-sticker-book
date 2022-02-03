import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { StickerBookState } from '../../state/StickerBookState'
import { StickerPack } from '../../state/types'
import { StickerPackComponent } from '../stickerPack/StickerPack'

import './StickerPackZoom.css'

interface StickerPackZoomProps {
	stickerBookState: StickerBookState
}

export const StickerPackZoom: React.FC<StickerPackZoomProps> = observer(
	({ stickerBookState }) => {
		const { currentStickerPack, setCurrentStickerPack } = stickerBookState

		if (!currentStickerPack) return null

		function turnAroundStickerPack() {
			if (!currentStickerPack) return

			const newStickerPack: StickerPack = { ...currentStickerPack }
			newStickerPack.isTurned = !newStickerPack.isTurned
			setCurrentStickerPack(newStickerPack)
		}

		return (
			<div className="stickerPackZoom fixed w-full h-full pointer-events-auto">
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

					<button
						className={cn(
							'turnAroundButton',
							'bg-blue-500 shadow-lg shadow-blue-100',
							'absolute flex justify-center items-center -bottom-10',
							'py-2 px-2 rounded-lg',
							'text-white text-[10px] sm:text-sm',
							'hover:shadow-blue-300 hover:scale-105'
						)}
						onClick={turnAroundStickerPack}
					>
						Turn around
					</button>
				</div>
			</div>
		)
	}
)
