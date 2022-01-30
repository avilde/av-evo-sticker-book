import { GameType, PageType, StickerType } from '../consts'
import { Page, Pages, Stickers } from '../state/types'
import { RandomWithSeed } from './randomWithSeed'

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
	const pageTypes = Object.values(PageType)
	return pageTypes[Math.floor(random() * pageTypes.length)]
}

export function getRandomInBetween(
	random: RandomWithSeed,
	min: number,
	max: number
) {
	return Math.floor(random() * (max - min + 1) + min)
}

const MARGIN = 3
export function getRandomStickerLocation(
	availableAreas: number[][],
	random: RandomWithSeed
): [number, number] {
	let top = getRandomInBetween(random, MARGIN, 100 - MARGIN - 18)
	let isAreaTaken = false
	do {
		availableAreas.push([top, top + 18])
		isAreaTaken = availableAreas.every((el) => top < el[0] && top > el[1])
		top = getRandomInBetween(random, MARGIN, 100 - MARGIN - 18)
	} while (isAreaTaken)

	let left = getRandomInBetween(random, MARGIN, 100 - MARGIN - 24)

	return [top, left]
}

export function generatePages(random: RandomWithSeed): Pages {
	const pages: Pages = []
	let stickerNr = 1

	getRandomGameTypes(random).forEach((gameType) => {
		let isLogoAlreadyAdded = false
		Object.values(PageType).forEach((pageType) => {
			const stickers: Stickers = []
			const availableAreas: number[][] = []

			if (pageType === getRandomPageType(random) && !isLogoAlreadyAdded) {
				const [top, left] = getRandomStickerLocation(
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

				console.log('logo', {
					gameType,
					pageType,
					top,
					left,
					stickerNr: stickerNr - 1,
				})
			}

			Array.from({ length: getRandomInBetween(random, 2, 5) }).forEach(
				(_) => {
					const [top, left] = getRandomStickerLocation(
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
					console.log('dynamic', {
						gameType,
						pageType,
						top,
						left,
						stickerNr: stickerNr - 1,
					})
				}
			)

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
