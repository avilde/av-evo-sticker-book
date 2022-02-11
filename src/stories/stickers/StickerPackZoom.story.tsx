import { Story } from '@storybook/react'
import { StickerPackZoom } from '../../components/stickerPackZoom/StickerPackZoom'
import { StickerBookState } from '../../state/StickerBookState'

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
	randomSeed: 123,
}
StickerPackZoomStory.storyName = 'Sticker pack zoom'
