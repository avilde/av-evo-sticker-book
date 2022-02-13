import { Story } from '@storybook/react'
import { StickerBook } from '../../components/stickerBook/StickerBook'
import { StickerBookState } from '../../state/StickerBookState'
import { DEFAULT_RANDOM_SEED } from '../../utils/randomDataUtils'

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
	randomSeed: DEFAULT_RANDOM_SEED,
}
StickerBookStory.storyName = 'Sticker book'
