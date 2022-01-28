import { observer } from 'mobx-react-lite'
import { StickerType } from '../../consts'
import { StickerBookState } from '../../state/StickerBookState'
import { DynamicStickerComponent } from '../sticker/dynamic/DynamicSticker'
import { LogoStickerComponent } from '../sticker/logo/LogoSticker'

import './StickerList.css'

interface StickerListProps {
	stickerBookState: StickerBookState
}

export const StickerList: React.FC<StickerListProps> = observer(
	({ stickerBookState }) => {
		const { stickers } = stickerBookState

		return (
			<div className="stickerList flex flex-col border overflow-y-auto overflow-x-hidden">
				{stickers.map((sticker) => {
					return (
						<div className="sticker relative flex justify-center items-center my-1">
							{sticker.type === StickerType.Logo ? (
								<LogoStickerComponent
									key={sticker.nr}
									{...sticker}
									className="stickerListSticker"
								/>
							) : (
								<DynamicStickerComponent
									key={sticker.nr}
									{...sticker}
									className="stickerListSticker"
								/>
							)}

							<div className="stickerCount absolute">x1</div>
						</div>
					)
				})}
			</div>
		)
	}
)
