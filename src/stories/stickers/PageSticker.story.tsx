import { Story } from '@storybook/react'
import { noop } from 'lodash-es'
import { PageStickerComponent } from '../../components/sticker/page/PageSticker'

import { GameType } from '../../consts'
import { PageSticker } from '../../state/types'

interface PageStickerStoryProps extends PageSticker {}

export const PageStickerStory: Story<PageStickerStoryProps> = (props) => (
	<div className="relative bg-slate-400 w-96 h-80 flex justify-center items-center">
		<PageStickerComponent
			{...props}
			top={20}
			left={15}
			applySticker={noop}
			isVisible={true}
		/>
	</div>
)
PageStickerStory.args = {
	isUsed: false,
	isLogo: false,
	gameType: GameType.Megaball,
	nr: 1,
}
PageStickerStory.argTypes = {
	gameType: {
		control: { type: 'select' },
		options: Object.values(GameType),
	},
}
PageStickerStory.storyName = 'Page sticker'
