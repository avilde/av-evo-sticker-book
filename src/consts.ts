export enum Other {
	FrontCover = 'frontCover',
	BackCover = 'backCover',
}

export enum GameType {
	BlackJack = 'blackJack',
	CashOrCrash = 'cashOrCrash',
	Craps = 'craps',
	DreamCatcher = 'dreamCatcher',
	CrazyTime = 'crazyTime',
	Gonzo = 'gonzo',
	Holdem = 'holdem',
	LighteningDice = 'lighteningDice',
	Megaball = 'megaBall',
	Monopoly = 'monopoly',
	Roulette = 'roulette',
	SicBo = 'sicBo',
}

export type PageType = GameType | Other
