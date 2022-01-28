import { Story } from '@storybook/react'
import { DynamicStickerComponent } from '../../components/sticker/dynamic/DynamicSticker'
import { GameType, PageType } from '../../consts'
import { DynamicSticker } from '../../state/types'

interface DynamicStickerStoryProps extends DynamicSticker {}

export const DynamicStickerStory: Story<DynamicStickerStoryProps> = (props) => (
	<>
		<style>{`.storybookSticker {
			top: 20% !important;
			left: 15% !important;
		}`}</style>

		<div className="relative bg-slate-400 w-96 h-80">
			<DynamicStickerComponent {...props} className="storybookSticker" />
		</div>
	</>
)
DynamicStickerStory.args = {
	isTurned: false,
	top: 0,
	left: 0,
	pageType: PageType.Left,
	gameType: GameType.Megaball,
	nr: 1,
}
DynamicStickerStory.argTypes = {
	pageType: {
		control: { type: 'select' },
		options: Object.values(PageType),
	},
	gameType: {
		control: { type: 'select' },
		options: Object.values(GameType),
	},
	top: {
		control: { type: 'range', min: 0, max: 100, step: 1 },
	},
	left: {
		control: { type: 'range', min: 0, max: 100, step: 1 },
	},
}
DynamicStickerStory.storyName = 'Dynamic sticker'
