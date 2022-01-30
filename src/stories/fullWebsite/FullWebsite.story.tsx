import { Story } from '@storybook/react'
import { DesktopLayout } from '../../layout/DesktopLayout'
import { StickerBookState } from '../../state/StickerBookState'
import { generatePages } from '../../utils/randomDataUtils'
import { createRandomWithSeed } from '../../utils/randomWithSeed'

interface FullGameStoryProps {
	randomSeed: number
}

export const FullWebsiteStory: Story<FullGameStoryProps> = ({ randomSeed }) => {
	const random = createRandomWithSeed(randomSeed)
	const pages = generatePages(random)
	const state = new StickerBookState(pages)

	return (
		<div>
			<DesktopLayout stickerBookState={state} />
		</div>
	)
}
FullWebsiteStory.args = {
	randomSeed: 123,
}
FullWebsiteStory.storyName = 'Full website'
