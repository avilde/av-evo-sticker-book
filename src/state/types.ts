import { GameType, PageType, StickerType } from '../consts'

interface Sticker {
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
	gameType: GameType
}

export type Stickers = (DynamicSticker | LogoSticker)[]

interface Page {
	background: PageType
	stickers: Stickers
	logoSticker?: LogoSticker
}

export type Pages = Page[]
