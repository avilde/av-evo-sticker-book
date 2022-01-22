import { Story } from '@storybook/react'
import { DynamicSticker } from '../components/sticker/DynamicSticker'
import { PageType } from '../consts'

interface StickerStoryProps {
	gameType: PageType
	backgroundPositionX: number
	backgroundPositionY: number
}

export const DynamicStickerStory: Story<StickerStoryProps> = (props) => (
	<div
		style={{
			position: 'relative',
			width: 'calc(var(--page-width) * 2)',
			height: 'var(--page-height)',
		}}
	>
		<DynamicSticker {...props} isOdd />
	</div>
)
DynamicStickerStory.args = {
	backgroundPositionX: 100,
	backgroundPositionY: 100,
	gameType: PageType.MegaballRight,
}
DynamicStickerStory.argTypes = {
	gameType: {
		control: { type: 'select' },
		options: Object.values(PageType),
	},
	backgroundPositionX: {
		control: { type: 'range', min: 0, max: 100, step: 1 },
	},
	backgroundPositionY: {
		control: { type: 'range', min: 0, max: 100, step: 1 },
	},
}
DynamicStickerStory.storyName = 'Dynamic sticker'
