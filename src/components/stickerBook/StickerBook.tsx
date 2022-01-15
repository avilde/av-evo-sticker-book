import { GameType } from '../../consts'
import { CoverPage } from '../page/CoverPage'
import { Page } from '../page/Page'

import './StickerBook.css'

export interface StickerBookProps {}

export const StickerBook: React.FC = () => {
	return (
		<div className="book">
			<CoverPage isFrontCover={true} />
			<Page
				gameType={GameType.DreamCatcher}
				isEvenPage={true}
				pageNumber={1}
			/>
			<CoverPage />
		</div>
	)
}
