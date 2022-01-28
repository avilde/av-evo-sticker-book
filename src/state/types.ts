import { GameType, PageType, StickerType } from '../consts'

export interface PageSticker {
	gameType: GameType
	nr: number
	top: number
	left: number
	isUsed: boolean
	isLogo?: boolean
}

export interface DynamicSticker extends PageSticker {
	type: StickerType.Dynamic
	isTurned?: boolean
	pageType: PageType
}

export interface LogoSticker extends PageSticker {
	type: StickerType.Logo
	isTurned?: boolean
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
