import { observer } from 'mobx-react-lite'
import { StickerBook } from '../components/stickerBook/StickerBook'
import { StickerList } from '../components/stickerList/StickerList'
import { StickerPackZoom } from '../components/stickerPackZoom/StickerPackZoom'
import { StickerZoom } from '../components/stickerZoom/StickerZoom'
import { StickerBookState } from '../state/StickerBookState'

import './DesktopLayout.css'

interface DesktopLayoutProps {
	stickerBookState: StickerBookState
}

export const DesktopLayout: React.FC<DesktopLayoutProps> = observer(
	({ stickerBookState }) => {
		const { currentSticker, currentStickerPack } = stickerBookState

		return (
			<div className="desktopLayout flex w-full h-full fixed top-0 left-0">
				<StickerBook
					stickerBookState={stickerBookState}
					className="desktopStickerBook"
				/>

				<StickerList
					stickerBookState={stickerBookState}
					className="desktopStickerList"
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
