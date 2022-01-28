import { Story } from '@storybook/react'
import { StickerBook } from '../../components/stickerBook/StickerBook'
import { GameType, PageType } from '../../consts'
import { Pages } from '../../state/types'

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
			pageType: PageType.Left,
			gameType: GameType.DreamCatcher,
			stickers: [
				{
					nr: 1,
					top: 60,
					left: 2,
					isUsed: false,
				},
				{
					nr: 2,
					top: 40,
					left: 40,
					isUsed: true,
				},
				{
					nr: 3,
					top: 10,
					left: 60,
					isUsed: false,
				},
				{
					nr: 4,
					top: 2,
					left: 2,
					isUsed: true,
				},
			],
		},
		{
			pageType: PageType.Right,
			gameType: GameType.DreamCatcher,
			logoSticker: {
				nr: 5,
				gameType: GameType.DreamCatcher,
				top: 80,
				left: 20,
				isUsed: false,
			},
		},
		{
			pageType: PageType.Left,
			gameType: GameType.Megaball,
			logoSticker: {
				nr: 6,
				gameType: GameType.Megaball,
				top: 10,
				left: 10,
				isUsed: true,
			},
			stickers: [
				{
					nr: 7,
					top: 20,
					left: 70,
					isUsed: true,
				},
				{
					nr: 8,
					top: 70,
					left: 50,
					isUsed: true,
				},
			],
		},
		{
			pageType: PageType.Right,
			gameType: GameType.Megaball,
			stickers: [
				{
					nr: 9,
					top: 70,
					left: 60,
					isUsed: false,
				},
				{
					nr: 10,
					top: 50,
					left: 10,
					isUsed: false,
				},
			],
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
