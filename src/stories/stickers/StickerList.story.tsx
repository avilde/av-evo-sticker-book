import { Story } from '@storybook/react'
import { StickerList } from '../../components/stickerList/StickerList'
import { GameType, PageType, StickerType } from '../../consts'

import { StickerBookState } from '../../state/StickerBookState'
import { Stickers } from '../../state/types'

interface StickerListStoryProps {
	stickers: Stickers
}

export const StickerListStory: Story<StickerListStoryProps> = ({
	stickers,
}) => {
	const state = new StickerBookState()
	state.stickers = stickers

	return (
		<div className="w-64 h-full">
			<StickerList stickerBookState={state} />
		</div>
	)
}
StickerListStory.args = {
	stickers: [
		{
			type: StickerType.Logo,
			nr: 1,
			gameType: GameType.Megaball,
			top: 10,
			left: 10,
			isLogo: true,
			isUsed: false,
		},
		{
			pageType: PageType.Right,
			gameType: GameType.DreamCatcher,
			type: StickerType.Dynamic,
			nr: 3,
			top: 70,
			left: 50,
			isUsed: false,
		},
		{
			pageType: PageType.Left,
			gameType: GameType.Megaball,
			type: StickerType.Dynamic,
			nr: 2,
			top: 20,
			left: 70,
			isUsed: false,
		},
		{
			pageType: PageType.Left,
			gameType: GameType.Megaball,
			type: StickerType.Dynamic,
			nr: 3,
			top: 70,
			left: 50,
			isUsed: false,
		},
	],
}
StickerListStory.storyName = 'Sticker list'
