import { GameType, PageType, StickerType } from '../consts'
import { Page, Pages, Stickers } from '../state/types'
import { RandomWithSeed } from './randomWithSeed'

// prettier-ignore
const BASELINE_STICKER_POSITIONS = [
	[15, 8],  [60, 8],
	[15, 33], [60, 33],
	[15, 55], [60, 55],
	[15, 78], [60, 78],
]
const HORIZONTAL_DEVIATION = [-9, 9]
const VERTICAL_DEVIATION = [-5, 4]
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
	availableAreas: number[][],
	random: RandomWithSeed
): number[] {
	const randomIndex = Math.floor(random() * availableAreas.length)
	const randomArea = availableAreas.splice(randomIndex, 1)[0]

	const randomHorizontalAdjustment = getRandomInBetween(
		random,
		HORIZONTAL_DEVIATION[0],
		HORIZONTAL_DEVIATION[1]
	)

	const randomVerticalAdjustment = getRandomInBetween(
		random,
		VERTICAL_DEVIATION[0],
		VERTICAL_DEVIATION[1]
	)

	randomArea[0] += randomHorizontalAdjustment
	randomArea[1] += randomVerticalAdjustment

	return randomArea
}

export function createAvailableAreas(): number[][] {
	return JSON.parse(JSON.stringify(BASELINE_STICKER_POSITIONS))
}

export function generatePages(random: RandomWithSeed): Pages {
	const pages: Pages = []
	let stickerNr = 1

	getRandomGameTypes(random).forEach((gameType) => {
		let isLogoAlreadyAdded = false

		PAGE_TYPES.forEach((pageType) => {
			const availableAreas = createAvailableAreas()
			const stickers: Stickers = []

			if (pageType === getRandomPageType(random) && !isLogoAlreadyAdded) {
				const [left, top] = getRandomStickerLocation(
					availableAreas,
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
				const [left, top] = getRandomStickerLocation(
					availableAreas,
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
	count: number
): Stickers {
	const pages = generatePages(random)
	const stickers = pages.flatMap((p) => p.stickers)

	return Array.from({ length: count }).map((_) => {
		return stickers[Math.floor(random() * stickers.length)]
	})
}
