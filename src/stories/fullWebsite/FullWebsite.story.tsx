import { Story } from '@storybook/react'
import { StickerBook } from '../../components/stickerBook/StickerBook'
import { StickerList } from '../../components/stickerList/StickerList'
import { StickerBookState } from '../../state/StickerBookState'

interface FullGameStoryProps {
	randomWithSeed: number
}

export const FullWebsiteStory: Story<FullGameStoryProps> = (props) => {
	const state = new StickerBookState()

	return (
		<div>
			<StickerBook stickerBookState={state} />

			<StickerList stickerBookState={state} />
		</div>
	)
}
FullWebsiteStory.args = {
	randomWithSeed: 123,
}
FullWebsiteStory.storyName = 'Full website'
