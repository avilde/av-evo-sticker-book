import { Story } from '@storybook/react'
import { MobileLayout } from '../../layout/MobileLayout'
import { StickerBookState } from '../../state/StickerBookState'
import { generatePages } from '../../utils/randomDataUtils'
import { createRandomWithSeed } from '../../utils/randomWithSeed'

interface MobileLayoutStoryProps {
	randomSeed: number
}

export const MobileLayoutStory: Story<MobileLayoutStoryProps> = ({
	randomSeed,
}) => {
	const random = createRandomWithSeed(randomSeed)
	const state = new StickerBookState(generatePages(random), random)

	return (
		<>
			<style>
				{`:root {
				--page-width: 55vh;
				--page-height: 60vh;
				--sticker-width: 26vw;
				--sticker-height: 20vw;
			}`}
			</style>
			<div>
				<MobileLayout stickerBookState={state} />
			</div>
		</>
	)
}
MobileLayoutStory.args = {
	randomSeed: 123,
}
MobileLayoutStory.storyName = 'Mobile'
