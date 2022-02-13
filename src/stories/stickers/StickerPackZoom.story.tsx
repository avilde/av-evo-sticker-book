import { Story } from '@storybook/react'
import { StickerPackZoom } from '../../components/stickerPackZoom/StickerPackZoom'
import { StickerBookState } from '../../state/StickerBookState'
import { DEFAULT_RANDOM_SEED } from '../../utils/randomDataUtils'

interface StickerPackZoomStoryProps {
	randomSeed: number
}

export const StickerPackZoomStory: Story<StickerPackZoomStoryProps> = ({
	randomSeed,
}) => {
	const state = new StickerBookState(randomSeed)

	state.getNewStickerPack()
	state.setCurrentStickerPack(state.stickerPacks[0])

	return (
		<div
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
			}}
		>
			<StickerPackZoom stickerBookState={state} />
		</div>
	)
}
StickerPackZoomStory.args = {
	randomSeed: DEFAULT_RANDOM_SEED,
}
StickerPackZoomStory.storyName = 'Sticker pack zoom'
