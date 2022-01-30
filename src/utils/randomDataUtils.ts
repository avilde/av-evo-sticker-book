import { GameType, PageType, StickerType } from '../consts'
import { Page, Pages, Stickers } from '../state/types'
import { RandomWithSeed } from './randomWithSeed'

const PAGE_MARGIN_WIDTH = 3
const PAGE_WIDTH = 100
const STICKER_WIDTH = 20
const STICKER_HEIGHT = 13
const PAGE_TYPES = [PageType.Left, PageType.Right]

export function getRandomGameTypes(random: RandomWithSeed): GameType[] {
	const randomGameTypes: GameType[] = []
	const availableGameTypes = Object.values(GameType)
	const length = availableGameTypes.length

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(random() * availableGameTypes.length)
		const gameType = availableGameTypes.splice(randomIndex, 1)[0]
		randomGameTypes.push(gameType)
	}

	return randomGameTypes
}

export function getRandomPageType(random: RandomWithSeed): PageType {
	return PAGE_TYPES[Math.floor(random() * PAGE_TYPES.length)]
}

export function getRandomInBetween(
	random: RandomWithSeed,
	min: number,
	max: number
) {
	return Math.floor(random() * (max - min + 1) + min)
}

export function getRandomStickerLocation(
	topAreas: number[],
	leftAreas: number[],
	random: RandomWithSeed
): [number, number] {
	const randomTop = topAreas[Math.floor(random() * topAreas.length)]
	const randomLeft = leftAreas[Math.floor(random() * leftAreas.length)]

	const topIndex = topAreas.findIndex((i) => i === randomTop)
	topAreas.splice(topIndex - 6, STICKER_HEIGHT + 6)

	const leftIndex = leftAreas.findIndex((i) => i === randomLeft)
	leftAreas.splice(leftIndex - 6, STICKER_WIDTH + 6)

	return [randomTop, randomLeft]
}

export function createAvailableAreas(
	pageWidth: number = PAGE_WIDTH,
	pageMarginWidth: number = PAGE_MARGIN_WIDTH,
	stickerWidth: number = STICKER_WIDTH,
	stickerHeight: number = STICKER_HEIGHT
): number[][] {
	const topAreas = Array.from({ length: pageWidth })
		.map((_, i) => i)
		.filter(
			(i) =>
				i > pageMarginWidth &&
				i < PAGE_WIDTH - pageMarginWidth - stickerHeight
		)

	const leftAreas = Array.from({ length: pageWidth })
		.map((_, i) => i)
		.filter(
			(i) =>
				i > pageMarginWidth &&
				i < PAGE_WIDTH - pageMarginWidth - stickerWidth
		)

	return [topAreas, leftAreas]
}

export function generatePages(random: RandomWithSeed): Pages {
	const pages: Pages = []
	let stickerNr = 1

	getRandomGameTypes(random).forEach((gameType) => {
		let isLogoAlreadyAdded = false

		PAGE_TYPES.forEach((pageType) => {
			const [topAreas, leftAreas] = createAvailableAreas()
			const stickers: Stickers = []

			if (pageType === getRandomPageType(random) && !isLogoAlreadyAdded) {
				const [top, left] = getRandomStickerLocation(
					topAreas,
					leftAreas,
					random
				)
				stickers.push({
					type: StickerType.Logo,
					gameType: gameType,
					isLogo: true,
					isUsed: false,
					isTurned: false,
					top: top,
					left: left,
					nr: stickerNr++,
				})
				isLogoAlreadyAdded = true
			}

			Array.from({ length: 4 }).forEach((_) => {
				const [top, left] = getRandomStickerLocation(
					topAreas,
					leftAreas,
					random
				)
				stickers.push({
					type: StickerType.Dynamic,
					gameType: gameType,
					pageType: pageType,
					isUsed: false,
					isTurned: false,
					top: top,
					left: left,
					nr: stickerNr++,
				})
			})

			const page: Page = {
				gameType: gameType,
				pageType: pageType,
				stickers: stickers,
			}

			pages.push(page)
		})
	})

	return pages
}

export function generateStickers(
	random: RandomWithSeed,
	count: number = 5
): Stickers {
	const pages = generatePages(random)
	const stickers = pages.flatMap((p) => p.stickers)

	return Array.from({ length: count }).map((_) => {
		return stickers[Math.floor(random() * stickers.length)]
	})
}
