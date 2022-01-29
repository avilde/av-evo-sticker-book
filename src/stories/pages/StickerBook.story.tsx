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
			stickers: [
				{
					nr: 5,
					gameType: GameType.DreamCatcher,
					top: 80,
					left: 20,
					isLogo: true,
					isUsed: false,
				},
			],
		},
		{
			pageType: PageType.Left,
			gameType: GameType.Megaball,
			stickers: [
				{
					nr: 6,
					gameType: GameType.Megaball,
					top: 10,
					left: 10,
					isLogo: true,
					isUsed: true,
				},
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
		{
			pageType: PageType.Left,
			gameType: GameType.Gonzo,
			stickers: [
				{
					nr: 11,
					gameType: GameType.Gonzo,
					top: 70,
					left: 20,
					isLogo: true,
					isUsed: true,
				},
				{
					nr: 12,
					top: 30,
					left: 65,
					isUsed: true,
				},
				{
					nr: 13,
					top: 14,
					left: 25,
					isUsed: true,
				},
			],
		},
		{
			pageType: PageType.Right,
			gameType: GameType.Gonzo,
			stickers: [
				{
					nr: 14,
					top: 69,
					left: 69,
					isUsed: false,
				},
				{
					nr: 15,
					top: 44,
					left: 33,
					isUsed: true,
				},
			],
		},
		{
			pageType: PageType.Left,
			gameType: GameType.Roulette,
			stickers: [
				{
					nr: 12,
					gameType: GameType.Roulette,
					top: 50,
					left: 22,
					isLogo: true,
					isUsed: false,
				},
				{
					nr: 13,
					top: 30,
					left: 65,
					isUsed: true,
				},
				{
					nr: 14,
					top: 14,
					left: 25,
					isUsed: true,
				},
			],
		},
		{
			pageType: PageType.Right,
			gameType: GameType.Roulette,
			stickers: [
				{
					nr: 15,
					top: 69,
					left: 69,
					isUsed: false,
				},
				{
					nr: 16,
					top: 55,
					left: 33,
					isUsed: true,
				},
				{
					nr: 17,
					top: 12,
					left: 31,
					isUsed: true,
				},
			],
		},
		{
			pageType: PageType.Left,
			gameType: GameType.Craps,
			stickers: [
				{
					nr: 12,
					gameType: GameType.Craps,
					top: 50,
					left: 22,
					isLogo: true,
					isUsed: true,
				},
				{
					nr: 13,
					top: 30,
					left: 65,
					isUsed: false,
				},
				{
					nr: 14,
					top: 14,
					left: 25,
					isUsed: true,
				},
			],
		},
		{
			pageType: PageType.Right,
			gameType: GameType.Craps,
			stickers: [
				{
					nr: 15,
					top: 69,
					left: 69,
					isUsed: false,
				},
				{
					nr: 16,
					top: 55,
					left: 33,
					isUsed: false,
				},
				{
					nr: 17,
					top: 12,
					left: 31,
					isUsed: true,
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
