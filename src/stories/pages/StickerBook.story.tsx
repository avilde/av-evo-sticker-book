import { Story } from '@storybook/react'
import { StickerBook } from '../../components/stickerBook/StickerBook'
import { StickerBookState } from '../../state/StickerBookState'

interface StickerBookStoryProps {
	randomSeed: number
}

export const StickerBookStory: Story<StickerBookStoryProps> = ({
	randomSeed,
}) => {
	const state = new StickerBookState(randomSeed)

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
