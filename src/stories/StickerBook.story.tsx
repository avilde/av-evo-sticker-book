import { Story } from '@storybook/react'
import { StickerBook } from '../components/stickerBook/StickerBook'
import { GameType, PageType } from '../consts'
import { Pages } from '../state/types'

interface StickerBookStoryProps {
	pages: Pages
}

export const StickerBookStory: Story<StickerBookStoryProps> = ({ pages }) => {
	const mockedState = {
		stickers: [],
		pages,
	}

	return (
		<div>
			<StickerBook stickerBookState={mockedState} />
		</div>
	)
}
StickerBookStory.args = {
	pages: [
		{
			background: PageType.DreamCatcherLeft,
			stickers: [
				{
					top: 60,
					left: 2,
					isUsed: false,
				},
				{
					top: 40,
					left: 40,
					isUsed: true,
				},
				{
					top: 10,
					left: 60,
					isUsed: false,
				},
				{
					top: 2,
					left: 2,
					isUsed: true,
				},
			],
		},
		{
			background: PageType.DreamCatcherRight,
			logoSticker: {
				gameType: GameType.DreamCatcher,
				top: 80,
				left: 20,
				isUsed: false,
			},
		},
		{
			background: PageType.MegaballLeft,
		},
		{
			background: PageType.MegaballRight,
		},
	] as Pages,
}
StickerBookStory.argTypes = {
	pages: {
		control: {
			type: 'object',
		},
	},
}
StickerBookStory.storyName = 'Sticker book'
