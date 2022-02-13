import { Story } from '@storybook/react'
import { DesktopLayout } from '../../layout/DesktopLayout'
import { StickerBookState } from '../../state/StickerBookState'
import { DEFAULT_RANDOM_SEED } from '../../utils/randomDataUtils'

interface DesktopLayoutStoryProps {
	randomSeed: number
}

export const DesktopLayoutStory: Story<DesktopLayoutStoryProps> = ({
	randomSeed,
}) => {
	const state = new StickerBookState(randomSeed)

	return <DesktopLayout stickerBookState={state} />
}
DesktopLayoutStory.args = {
	randomSeed: DEFAULT_RANDOM_SEED,
}
DesktopLayoutStory.storyName = 'Desktop'
