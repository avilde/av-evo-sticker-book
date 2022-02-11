import { Story } from '@storybook/react'
import { StickerList } from '../../components/stickerList/StickerList'
import { StickerBookState } from '../../state/StickerBookState'
interface StickerListStoryProps {
	randomSeed: number
}

export const StickerListStory: Story<StickerListStoryProps> = ({
	randomSeed,
}) => {
	const state = new StickerBookState(randomSeed)

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
