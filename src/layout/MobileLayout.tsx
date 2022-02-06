import { observer } from 'mobx-react-lite'
import { StickerBook } from '../components/stickerBook/StickerBook'
import { StickerList } from '../components/stickerList/StickerList'
import { StickerPackZoom } from '../components/stickerPackZoom/StickerPackZoom'
import { StickerZoom } from '../components/stickerZoom/StickerZoom'
import { StickerBookState } from '../state/StickerBookState'

import './MobileLayout.css'

interface MobileLayoutProps {
	stickerBookState: StickerBookState
}

export const MobileLayout: React.FC<MobileLayoutProps> = observer(
	({ stickerBookState }) => {
		const { currentSticker, currentStickerPack } = stickerBookState

		return (
			<div className="mobileLayout flex flex-col w-full h-full fixed top-0 left-0">
				<StickerList
					stickerBookState={stickerBookState}
					className="mobileStickerList"
				/>

				<StickerBook
					stickerBookState={stickerBookState}
					className="mobileStickerBook"
				/>

				{currentSticker ? (
					<StickerZoom stickerBookState={stickerBookState} />
				) : null}

				{currentStickerPack ? (
					<StickerPackZoom stickerBookState={stickerBookState} />
				) : null}
			</div>
		)
	}
)
