import { Story } from '@storybook/react'
import { DesktopLayout } from '../../layout/DesktopLayout'
import { StickerBookState } from '../../state/StickerBookState'
import { generatePages } from '../../utils/randomDataUtils'
import { createRandomWithSeed } from '../../utils/randomWithSeed'

interface DesktopLayoutStoryProps {
	randomSeed: number
}

export const DesktopLayoutStory: Story<DesktopLayoutStoryProps> = ({
	randomSeed,
}) => {
	const random = createRandomWithSeed(randomSeed)
	const { pages, stickers } = generatePages(random)
	const state = new StickerBookState(pages, stickers, random)

	return <DesktopLayout stickerBookState={state} />
}
DesktopLayoutStory.args = {
	randomSeed: 123,
}
DesktopLayoutStory.storyName = 'Desktop'
