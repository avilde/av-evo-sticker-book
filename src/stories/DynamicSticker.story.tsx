import { Story } from '@storybook/react'
import { DynamicSticker } from '../components/sticker/dynamic/DynamicSticker'
import { PageType } from '../consts'

interface StickerStoryProps {
	pageType: PageType
	backgroundPositionX: number
	backgroundPositionY: number
	isTurned: boolean
}

export const DynamicStickerStory: Story<StickerStoryProps> = (props) => (
	<>
		<style>{`.storybookSticker {
			transform: none !important;
		}`}</style>

		<div
			style={{
				width: 'calc(var(--page-width) * 2)',
				height: 'var(--page-height)',
			}}
		>
			<DynamicSticker {...props} className="storybookSticker" />
		</div>
	</>
)
DynamicStickerStory.args = {
	isTurned: false,
	backgroundPositionX: 0,
	backgroundPositionY: 0,
	pageType: PageType.MegaballRight,
}
DynamicStickerStory.argTypes = {
	pageType: {
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
