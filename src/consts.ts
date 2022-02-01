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
		textColor: 'text-white',
		textDecorationColor: 'decoration-rose-500',
		logoFrameColor: 'bg-rose-500',
	},
	[GameType.Megaball]: {
		borderColor: 'border-teal-300',
		textColor: 'text-white',
		textDecorationColor: 'decoration-teal-500',
		logoFrameColor: 'bg-teal-500',
	},
	[GameType.Craps]: {
		borderColor: 'border-teal-400',
		textColor: 'text-white',
		textDecorationColor: 'decoration-teal-400',
		logoFrameColor: 'bg-teal-400',
	},
	[GameType.Roulette]: {
		borderColor: 'border-red-500',
		textColor: 'text-white',
		textDecorationColor: 'decoration-red-500',
		logoFrameColor: 'bg-red-500',
	},
	[GameType.Gonzo]: {
		borderColor: 'border-amber-400',
		textColor: 'text-white',
		textDecorationColor: 'decoration-amber-400',
		logoFrameColor: 'bg-amber-400',
	},
}
