import { StickerBook } from '../components/stickerBook/StickerBook'
import { StickerList } from '../components/stickerList/StickerList'
import { StickerBookState } from '../state/StickerBookState'

import './DesktopLayout.css'

interface DesktopLayoutProps {
	stickerBookState: StickerBookState
}

export const DesktopLayout: React.FC<DesktopLayoutProps> = ({
	stickerBookState,
}) => {
	return (
		<div className="desktopLayout flex w-full h-full">
			<StickerBook
				stickerBookState={stickerBookState}
				className="desktopStickerBook"
			/>

			<StickerList
				stickerBookState={stickerBookState}
				className="desktopStickerList"
			/>
		</div>
	)
}
