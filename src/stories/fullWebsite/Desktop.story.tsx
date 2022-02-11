import { Story } from '@storybook/react'
import { DesktopLayout } from '../../layout/DesktopLayout'
import { StickerBookState } from '../../state/StickerBookState'

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
	randomSeed: 123,
}
DesktopLayoutStory.storyName = 'Desktop'
