import { Story } from '@storybook/react'
import { StickerBook } from '../../components/stickerBook/StickerBook'
import { StickerBookState } from '../../state/StickerBookState'
import { generatePages } from '../../utils/randomDataUtils'
import { createRandomWithSeed } from '../../utils/randomWithSeed'

interface StickerBookStoryProps {
	randomSeed: number
}

export const StickerBookStory: Story<StickerBookStoryProps> = ({
	randomSeed,
}) => {
	const random = createRandomWithSeed(randomSeed)
	const { pages, stickers } = generatePages(random)
	const state = new StickerBookState(pages, stickers, random)

	return (
		<div>
			<StickerBook stickerBookState={state} />
		</div>
	)
}
StickerBookStory.args = {
	randomSeed: 123,
}
StickerBookStory.storyName = 'Sticker book'
