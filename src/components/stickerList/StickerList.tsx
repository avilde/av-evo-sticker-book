import { observer } from 'mobx-react-lite'
import { StickerType } from '../../consts'
import { StickerBookState } from '../../state/StickerBookState'
import { DynamicStickerComponent } from '../sticker/dynamic/DynamicSticker'
import { LogoStickerComponent } from '../sticker/logo/LogoSticker'

interface StickerListProps {
	stickerBookState: StickerBookState
}

export const StickerList: React.FC<StickerListProps> = observer(
	({ stickerBookState }) => {
		const { stickers } = stickerBookState

		return (
			<div className="flex flex-col">
				{stickers.map((sticker) => {
					if (sticker.type === StickerType.Dynamic) {
						return <DynamicStickerComponent {...sticker} />
					} else {
						return <LogoStickerComponent {...sticker} />
					}
				})}
			</div>
		)
	}
)
