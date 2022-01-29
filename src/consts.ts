import { GameTheme } from './state/types'

export enum PageType {
	Left = 'Left',
	Right = 'Right',
}

export enum GameType {
	Craps = 'craps',
	DreamCatcher = 'dreamCatcher',
	Gonzo = 'gonzo',
	Megaball = 'megaBall',
	Roulette = 'roulette',
}

// TODO: find background image for games
/* 
	BlackJack = 'blackJack',
	CashOrCrash = 'cashOrCrash',
	CrazyTime = 'crazyTime',
	Holdem = 'holdem',
	LighteningDice = 'lighteningDice',
	Monopoly = 'monopoly',
	SicBo = 'sicBo',
*/

export enum StickerType {
	Dynamic = 'Dynamic',
	Logo = 'Logo',
}

export const gameThemeMapping: Record<string, GameTheme> = {
	[GameType.DreamCatcher]: {
		borderColor: 'border-rose-300',
		textDecorationColor: 'decoration-rose-500',
		logoFrameColor: 'bg-rose-500',
	},
	[GameType.Megaball]: {
		borderColor: 'border-teal-300',
		textDecorationColor: 'decoration-teal-500',
		logoFrameColor: 'bg-teal-500',
	},
}
