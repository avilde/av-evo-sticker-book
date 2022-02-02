import { observer } from 'mobx-react-lite'
import { StickerBook } from '../components/stickerBook/StickerBook'
import { StickerList } from '../components/stickerList/StickerList'
import { StickerZoom } from '../components/stickerZoom/StickerZoom'
import { StickerBookState } from '../state/StickerBookState'

import './DesktopLayout.css'

interface DesktopLayoutProps {
	stickerBookState: StickerBookState
}

export const DesktopLayout: React.FC<DesktopLayoutProps> = observer(
	({ stickerBookState }) => {
		const { currentSticker } = stickerBookState

		return (
			<div className="desktopLayout flex w-full h-full relative">
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
			</div>
		)
	}
)
