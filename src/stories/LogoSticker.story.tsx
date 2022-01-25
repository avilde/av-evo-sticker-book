import { Story } from '@storybook/react'
import { LogoStickerComponent } from '../components/sticker/logo/LogoSticker'
import { GameType } from '../consts'

interface StickerStoryProps {
	gameType: GameType
	isTurned: boolean
	isUsed: boolean
}

export const LogoStickerStory: Story<StickerStoryProps> = (props) => (
	<div
		style={{
			position: 'relative',
		}}
	>
		<LogoStickerComponent {...props} top={0} left={0} />
	</div>
)
LogoStickerStory.args = {
	isTurned: false,
	isUsed: false,
	gameType: GameType.Megaball,
}
LogoStickerStory.argTypes = {
	gameType: {
		control: { type: 'select' },
		options: Object.values(GameType),
	},
}
LogoStickerStory.storyName = 'Logo sticker'
