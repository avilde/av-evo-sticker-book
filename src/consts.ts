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
	SicBo = 'sicBo',
	TwoHandHoldem = 'twoHandHoldem',
}

export enum StickerType {
	Dynamic = 'Dynamic',
	Logo = 'Logo',
}

export const gameThemeMapping: Record<GameType, GameTheme> = {
	[GameType.BlackJack]: {
		borderColor: 'border-emerald-800',
		textColor: 'text-white',
		textDecorationColor: 'decoration-emerald-300',
		backgroundColor: 'bg-emerald-800',
	},
	[GameType.CashOrCrash]: {
		borderColor: 'border-amber-900',
		textColor: 'text-white',
		textDecorationColor: 'decoration-amber-500',
		backgroundColor: 'bg-amber-900',
	},
	[GameType.CashOrCrashRender]: {
		borderColor: 'border-amber-900',
		textColor: 'text-white',
		textDecorationColor: 'decoration-amber-500',
		backgroundColor: 'bg-amber-900',
	},
	[GameType.Craps]: {
		borderColor: 'border-emerald-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-emerald-400',
		backgroundColor: 'bg-emerald-700',
	},
	[GameType.CrazyTime]: {
		borderColor: 'border-red-600',
		textColor: 'text-white',
		textDecorationColor: 'decoration-red-500',
		backgroundColor: 'bg-red-600',
	},
	[GameType.CrazyTimeRender]: {
		borderColor: 'border-red-600',
		textColor: 'text-white',
		textDecorationColor: 'decoration-red-500',
		backgroundColor: 'bg-red-600',
	},
	[GameType.DreamCatcher]: {
		borderColor: 'border-violet-800',
		textColor: 'text-white',
		textDecorationColor: 'decoration-violet-300',
		backgroundColor: 'bg-violet-800',
	},
	[GameType.FanTan]: {
		borderColor: 'border-rose-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-rose-400',
		backgroundColor: 'bg-rose-700',
	},
	[GameType.GoldenBaccarat]: {
		borderColor: 'border-amber-600',
		textColor: 'text-white',
		textDecorationColor: 'decoration-amber-500',
		backgroundColor: 'bg-amber-600',
	},
	[GameType.Gonzo]: {
		borderColor: 'border-orange-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-orange-400',
		backgroundColor: 'bg-orange-700',
	},
	[GameType.LightningDice]: {
		borderColor: 'border-orange-300',
		textColor: 'text-black',
		textDecorationColor: 'decoration-orange-400',
		backgroundColor: 'bg-orange-300',
	},
	[GameType.Megaball]: {
		borderColor: 'border-cyan-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-cyan-500',
		backgroundColor: 'bg-cyan-700',
	},
	[GameType.Monopoly]: {
		borderColor: 'border-amber-600',
		textColor: 'text-white',
		textDecorationColor: 'decoration-amber-500',
		backgroundColor: 'bg-amber-600',
	},
	[GameType.Roulette]: {
		borderColor: 'border-rose-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-rose-500',
		backgroundColor: 'bg-rose-700',
	},
	[GameType.SicBo]: {
		borderColor: 'border-red-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-red-500',
		backgroundColor: 'bg-red-700',
	},
	[GameType.TwoHandHoldem]: {
		borderColor: 'border-neutral-700',
		textColor: 'text-white',
		textDecorationColor: 'decoration-neutral-500',
		backgroundColor: 'bg-neutral-700',
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
	[GameType.GoldenBaccarat]: 'Golden Wealth Baccarat',
	[GameType.Gonzo]: "Gonzo's Treasure Hunt",
	[GameType.LightningDice]: 'Lightening Dice',
	[GameType.Megaball]: 'Mega Ball',
	[GameType.Monopoly]: 'Monopoly',
	[GameType.Roulette]: 'Roulette',
	[GameType.SicBo]: 'Sic Bo',
	[GameType.TwoHandHoldem]: '2 Hand Casino Holdem',
}
