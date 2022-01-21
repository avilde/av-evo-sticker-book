import { Story } from '@storybook/react'
import { Sticker } from '../components/sticker/Sticker'
import { GameType } from '../consts'

interface StickerStoryProps {
	gameType: GameType
}

export const StickerStory: Story<StickerStoryProps> = ({
	gameType = GameType.BlackJack,
}) => (
	<div
		style={{
			position: 'relative',
		}}
	>
		<Sticker gameType={gameType} />
	</div>
)
StickerStory.argTypes = {
	gameType: {
		control: { type: 'select' },
		options: Object.values(GameType),
	},
}
StickerStory.storyName = 'Sticker'
