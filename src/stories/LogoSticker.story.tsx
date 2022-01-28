import { Story } from '@storybook/react'
import { LogoStickerComponent } from '../components/sticker/logo/LogoSticker'
import { GameType } from '../consts'
import { LogoSticker } from '../state/types'

interface StickerStoryProps extends LogoSticker {}

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
	gameType: GameType.Megaball,
	nr: 1,
}
LogoStickerStory.argTypes = {
	gameType: {
		control: { type: 'select' },
		options: Object.values(GameType),
	},
}
LogoStickerStory.storyName = 'Logo sticker'
