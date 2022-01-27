import { GameType, PageType, StickerType } from '../consts'

interface Sticker {
	gameType: GameType
	nr: number
	top: number
	left: number
	isTurned: boolean
	isUsed: boolean
}

export interface DynamicSticker extends Sticker {
	type: StickerType.Dynamic
	pageType: PageType
}

export interface LogoSticker extends Sticker {
	type: StickerType.Logo
}

export type Stickers = (DynamicSticker | LogoSticker)[]

export interface Page {
	pageType: PageType
	gameType: GameType
	stickers: Stickers
	logoSticker?: LogoSticker
}

export type Pages = Page[]

export interface GameTheme {
	borderColor: string
	textDecorationColor: string
	logoFrameColor: string
}
