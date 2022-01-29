import { Story } from '@storybook/react'
import { StickerBook } from '../../components/stickerBook/StickerBook'
import { generatePages } from '../../utils/randomDataUtils'
import { createRandomWithSeed } from '../../utils/randomWithSeed'

interface StickerBookStoryProps {
	randomSeed: number
}

export const StickerBookStory: Story<StickerBookStoryProps> = ({
	randomSeed,
}) => {
	const mockedState = {
		stickers: [],
		pages: generatePages(createRandomWithSeed(randomSeed)),
	}

	return (
		<div>
			<StickerBook stickerBookState={mockedState} />
		</div>
	)
}
StickerBookStory.args = {
	randomSeed: 123,
}
StickerBookStory.storyName = 'Sticker book'
