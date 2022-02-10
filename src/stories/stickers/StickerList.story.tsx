import { Story } from '@storybook/react'
import { StickerList } from '../../components/stickerList/StickerList'
import { StickerBookState } from '../../state/StickerBookState'
import { generatePages } from '../../utils/randomDataUtils'
import { createRandomWithSeed } from '../../utils/randomWithSeed'

interface StickerListStoryProps {
	randomSeed: number
}

export const StickerListStory: Story<StickerListStoryProps> = ({
	randomSeed,
}) => {
	const random = createRandomWithSeed(randomSeed)
	const { pages, stickers } = generatePages(random)
	const state = new StickerBookState(pages, stickers, random)

	return (
		<div className="w-64 h-full">
			<StickerList stickerBookState={state} />
		</div>
	)
}
StickerListStory.args = {
	randomSeed: 123,
}
StickerListStory.storyName = 'Sticker list'
