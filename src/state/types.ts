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

export type Sticker = DynamicSticker | LogoSticker
export type Stickers = (DynamicSticker | LogoSticker)[]

export interface StickerPack {
	isUsed: boolean
	isTurned: boolean
	stickers: Stickers
}

export interface Page {
	pageType: PageType
	gameType: GameType
	stickers: Stickers
}

export type Pages = Page[]

export interface GameTheme {
	borderColor: string
	textColor: string
	textDecorationColor: string
	logoFrameColor: string
}
