import { Story } from '@storybook/react'
import { WinScreen } from '../../components/winScreen/WinScreen'
import { StickerBookState } from '../../state/StickerBookState'
import { DEFAULT_RANDOM_SEED } from '../../utils/randomDataUtils'

interface WinScreenStoryProps {
	randomSeed: number
}

export const WinScreenStory: Story<WinScreenStoryProps> = ({ randomSeed }) => {
	const state = new StickerBookState(randomSeed)

	return <WinScreen stickerBookState={state} />
}
WinScreenStory.args = {
	randomSeed: DEFAULT_RANDOM_SEED,
}
WinScreenStory.storyName = 'Win screen'
