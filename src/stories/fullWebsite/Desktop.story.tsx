import { Story } from '@storybook/react'
import { DesktopLayout } from '../../layout/DesktopLayout'
import { StickerBookState } from '../../state/StickerBookState'
import { generatePages } from '../../utils/randomDataUtils'
import { createRandomWithSeed } from '../../utils/randomWithSeed'

interface FullGameStoryProps {
	randomSeed: number
}

export const DesktopLayoutStory: Story<FullGameStoryProps> = ({
	randomSeed,
}) => {
	const random = createRandomWithSeed(randomSeed)
	const state = new StickerBookState(generatePages(random), random)

	return (
		<div>
			<DesktopLayout stickerBookState={state} />
		</div>
	)
}
DesktopLayoutStory.args = {
	randomSeed: 123,
}
DesktopLayoutStory.storyName = 'Desktop'
