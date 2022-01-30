import { Story } from '@storybook/react'
import { StickerList } from '../../components/stickerList/StickerList'
import { StickerBookState } from '../../state/StickerBookState'
import { generatePages } from '../../utils/randomDataUtils'
import { createRandomWithSeed } from '../../utils/randomWithSeed'

interface StickerListStoryProps {
	count: number
	randomSeed: number
}

export const StickerListStory: Story<StickerListStoryProps> = ({
	count,
	randomSeed,
}) => {
	const state = new StickerBookState(
		generatePages(createRandomWithSeed(randomSeed))
	)

	return (
		<div className="w-64 h-full">
			<StickerList stickerBookState={state} />
		</div>
	)
}
StickerListStory.args = {
	count: 5,
	randomSeed: 123,
}
StickerListStory.storyName = 'Sticker list'
