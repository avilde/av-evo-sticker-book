import { Story } from '@storybook/react'
import { DynamicStickerComponent } from '../components/sticker/dynamic/DynamicSticker'
import { GameType, PageType } from '../consts'

interface StickerStoryProps {
	pageType: PageType
	gameType: GameType
	top: number
	left: number
	isTurned: boolean
}

export const DynamicStickerStory: Story<StickerStoryProps> = (props) => (
	<>
		<style>{`.storybookSticker {
			top: 0 !important;
			left: 0 !important;
		}`}</style>

		<div style={{ position: 'relative' }}>
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
