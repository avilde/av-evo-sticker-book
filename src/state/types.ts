import { GameType, PageType, StickerType } from '../consts'

export interface PageSticker {
	gameType: GameType
	pageType: PageType
	nr: number
	top: number
	left: number
	isUsed: boolean
	count: number
	isLogo?: boolean
}

export interface DynamicSticker extends PageSticker {
	type: StickerType.Dynamic
}

export interface LogoSticker extends PageSticker {
	type: StickerType.Logo
}

export type Sticker = DynamicSticker | LogoSticker
export type Stickers = (DynamicSticker | LogoSticker)[]

export interface StickerPack {
	isTurned: boolean
	isUsed: boolean
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

export type SetDragTarget = (nr: number, isOnTarget: boolean) => void
