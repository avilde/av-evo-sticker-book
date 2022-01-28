import { Story } from '@storybook/react'
import { LogoStickerComponent } from '../../components/sticker/logo/LogoSticker'
import { GameType } from '../../consts'
import { LogoSticker } from '../../state/types'

interface LogoStickerStoryProps extends LogoSticker {}

export const LogoStickerStory: Story<LogoStickerStoryProps> = (props) => (
	<div className="relative bg-slate-400 w-96 h-80">
		<LogoStickerComponent {...props} top={20} left={15} />
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
