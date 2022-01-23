import { Story } from '@storybook/react'
import { LogoSticker } from '../components/sticker/logo/LogoSticker'
import { GameType } from '../consts'

interface StickerStoryProps {
	gameType: GameType
	isTurned: boolean
}

export const LogoStickerStory: Story<StickerStoryProps> = (props) => (
	<div
		style={{
			position: 'relative',
		}}
	>
		<LogoSticker
			{...props}
			backgroundPositionX={0}
			backgroundPositionY={0}
		/>
	</div>
)
LogoStickerStory.args = {
	isTurned: false,
	gameType: GameType.Megaball,
}
LogoStickerStory.argTypes = {
	gameType: {
		control: { type: 'select' },
		options: Object.values(GameType),
	},
}
LogoStickerStory.storyName = 'Logo sticker'
