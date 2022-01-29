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

export function generatePages(random: RandomWithSeed): Pages {
	const pages: Pages = []
	let stickerNr = 1

	getRandomGameTypes(random).forEach((gameType) => {
		let isLogoAlreadyAdded = false
		Object.values(PageType).forEach((pageType) => {
			const stickers: Stickers = []

			if (pageType === getRandomPageType(random) && !isLogoAlreadyAdded) {
				stickers.push({
					type: StickerType.Logo,
					gameType: gameType,
					isLogo: true,
					isUsed: false,
					isTurned: false,
					top: getRandomInBetween(random, 4, 74),
					left: getRandomInBetween(random, 4, 80),
					nr: stickerNr++,
				})
				isLogoAlreadyAdded = true
			}

			Array.from({ length: getRandomInBetween(random, 2, 5) }).forEach(
				(_) => {
					stickers.push({
						type: StickerType.Dynamic,
						gameType: gameType,
						pageType: pageType,
						isUsed: false,
						isTurned: false,
						top: getRandomInBetween(random, 4, 74),
						left: getRandomInBetween(random, 4, 80),
						nr: stickerNr++,
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
