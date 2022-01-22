import { Story } from '@storybook/react'
import { LogoSticker } from '../components/sticker/LogoSticker'
import { GameType } from '../consts'

interface StickerStoryProps {
	gameType: GameType
}

export const LogoStickerStory: Story<StickerStoryProps> = (props) => (
	<div
		style={{
			position: 'relative',
		}}
	>
		<LogoSticker {...props} />
	</div>
)
LogoStickerStory.args = {
	gameType: GameType.Megaball,
}
LogoStickerStory.argTypes = {
	gameType: {
		control: { type: 'select' },
		options: Object.values(GameType),
	},
}
LogoStickerStory.storyName = 'Logo sticker'
