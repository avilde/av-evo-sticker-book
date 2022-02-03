import { Story } from '@storybook/react'
import { StickerZoom } from '../../components/stickerZoom/StickerZoom'
import { StickerBookState } from '../../state/StickerBookState'
import { generatePages } from '../../utils/randomDataUtils'
import { createRandomWithSeed } from '../../utils/randomWithSeed'

interface StickerZoomStoryProps {
	randomSeed: number
}

export const StickerZoomStory: Story<StickerZoomStoryProps> = ({
	randomSeed,
}) => {
	const random = createRandomWithSeed(randomSeed)
	const state = new StickerBookState(generatePages(random), random)

	state.setCurrentSticker(state.getStickers()[0])

	return (
		<div
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
			}}
		>
			<StickerZoom stickerBookState={state} />
		</div>
	)
}
StickerZoomStory.args = {
	randomSeed: 123,
}
StickerZoomStory.storyName = 'Sticker zoom'
