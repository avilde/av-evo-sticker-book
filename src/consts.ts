import { GameTheme } from './state/types'

export enum PageType {
	Left = 'Left',
	Right = 'Right',
}

export enum GameType {
	BlackJack = 'blackJack',
	CashOrCrash = 'cashOrCrash',
	CashOrCrashRender = 'cashOrCrashRender',
	Craps = 'craps',
	CrazyTime = 'crazyTime',
	CrazyTimeRender = 'crazyTimeRender',
	DreamCatcher = 'dreamCatcher',
	FanTan = 'fanTan',
	GoldenBaccarat = 'goldenBaccarat',
	Gonzo = 'gonzo',
	LightningDice = 'lighteningDice',
	Megaball = 'megaBall',
	Monopoly = 'monopoly',
	Roulette = 'roulette',
	TwoHandHoldem = 'twoHandHoldem',
	SicBo = 'sicBo',
}

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
	[GameType.CashOrCrash]: {
		borderColor: 'border-rose-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-rose-500',
		backgroundColor: 'bg-rose-700',
	},
	[GameType.CashOrCrashRender]: {
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
	[GameType.CrazyTime]: {
		borderColor: 'border-rose-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-rose-500',
		backgroundColor: 'bg-rose-700',
	},
	[GameType.CrazyTimeRender]: {
		borderColor: 'border-rose-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-rose-500',
		backgroundColor: 'bg-rose-700',
	},
	[GameType.DreamCatcher]: {
		borderColor: 'border-rose-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-rose-500',
		backgroundColor: 'bg-rose-700',
	},
	[GameType.FanTan]: {
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
	[GameType.GoldenBaccarat]: {
		borderColor: 'border-orange-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-orange-400',
		backgroundColor: 'bg-orange-700',
	},
	[GameType.LightningDice]: {
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
	[GameType.Monopoly]: {
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
	[GameType.SicBo]: {
		borderColor: 'border-red-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-red-500',
		backgroundColor: 'bg-red-700',
	},
	[GameType.TwoHandHoldem]: {
		borderColor: 'border-red-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-red-500',
		backgroundColor: 'bg-red-700',
	},
}

export const gameNames: Record<GameType, string> = {
	[GameType.BlackJack]: 'Black Jack',
	[GameType.CashOrCrash]: 'Cash Or Crash',
	[GameType.CashOrCrashRender]: 'Cash Or Crash: Unreal Render',
	[GameType.Craps]: 'Craps',
	[GameType.CrazyTime]: 'Crazy Time',
	[GameType.CrazyTimeRender]: 'Crazy Time: Unreal Render',
	[GameType.DreamCatcher]: 'Dream Catcher',
	[GameType.FanTan]: 'Fan Tan',
	[GameType.Gonzo]: "Gonzo's Treasure Hunt",
	[GameType.GoldenBaccarat]: 'Golden Wealth Baccarat',
	[GameType.LightningDice]: 'Lightening Dice',
	[GameType.Megaball]: 'Mega Ball',
	[GameType.Monopoly]: 'Monopoly',
	[GameType.Roulette]: 'Roulette',
	[GameType.SicBo]: 'Sic Bo',
	[GameType.TwoHandHoldem]: '2 Hand Casino Holdem',
}
