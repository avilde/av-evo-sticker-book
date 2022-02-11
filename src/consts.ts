import { GameTheme } from './state/types'

export enum PageType {
	Left = 'Left',
	Right = 'Right',
}

export enum GameType {
	BlackJack = 'blackJack',
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
	TwoHandHoldem = 'twoHandHoldem',
	LighteningDice = 'lighteningDice',
	Monopoly = 'monopoly',
	SicBo = 'sicBo',
	GoldenBaccarat = 'GoldenBaccarat'
*/

export enum StickerType {
	Dynamic = 'Dynamic',
	Logo = 'Logo',
}

export const gameThemeMapping: Record<GameType, GameTheme> = {
	[GameType.BlackJack]: {
		borderColor: 'border-rose-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-rose-500',
		backgroundColor: 'bg-rose-700',
	},
	[GameType.Craps]: {
		borderColor: 'border-emerald-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-emerald-400',
		backgroundColor: 'bg-emerald-700',
	},
	[GameType.DreamCatcher]: {
		borderColor: 'border-rose-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-rose-500',
		backgroundColor: 'bg-rose-700',
	},
	[GameType.Gonzo]: {
		borderColor: 'border-orange-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-orange-400',
		backgroundColor: 'bg-orange-700',
	},
	[GameType.Megaball]: {
		borderColor: 'border-teal-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-teal-500',
		backgroundColor: 'bg-teal-700',
	},
	[GameType.Roulette]: {
		borderColor: 'border-red-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-red-500',
		backgroundColor: 'bg-red-700',
	},
}

export const gameNames: Record<GameType, string> = {
	[GameType.BlackJack]: 'Black Jack',
	[GameType.Craps]: 'Craps',
	[GameType.DreamCatcher]: 'Dream Catcher',
	[GameType.Gonzo]: "Gonzo's Treasure Hunt",
	[GameType.Megaball]: 'Mega Ball',
	[GameType.Roulette]: 'Roulette',
}
