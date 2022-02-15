import { GameType, PageType } from '../consts'
import {
	createAvailableAreas,
	generatePages,
	generateStickers,
	getRandomGameTypes,
	getRandomInBetween,
	getRandomPageType,
	getRandomStickerLocation,
} from './randomDataUtils'
import { createRandomWithSeed } from './randomWithSeed'

const testSeed = 123

describe('randomDataUtils', () => {
	describe('getRandomGameTypes', () => {
		it('should return randomized game types without duplicates', () => {
			const random = createRandomWithSeed(testSeed)

			const randomGameTypes = getRandomGameTypes(random)

			expect(randomGameTypes).toHaveLength(Object.values(GameType).length)

			expect(
				// check for duplicates
				randomGameTypes.every(
					(gameType, index, array) =>
						array.indexOf(gameType) === index
				)
			).toBe(true)
		})
	})

	describe('getRandomPageType', () => {
		it('should return the random pageType in same order', () => {
			const random = createRandomWithSeed(testSeed)

			expect(getRandomPageType(random)).toBe(PageType.Right)
			expect(getRandomPageType(random)).toBe(PageType.Left)
			expect(getRandomPageType(random)).toBe(PageType.Left)
			expect(getRandomPageType(random)).toBe(PageType.Left)
			expect(getRandomPageType(random)).toBe(PageType.Left)
			expect(getRandomPageType(random)).toBe(PageType.Right)
		})
	})

	describe('getRandomInBetween', () => {
		it('should return random number in between min and max', () => {
			const random = createRandomWithSeed(testSeed)

			expect(getRandomInBetween(random, 10, 80)).toBe(65)
			expect(getRandomInBetween(random, 10, 80)).toBe(22)
			expect(getRandomInBetween(random, 10, 80)).toBe(45)
			expect(getRandomInBetween(random, 10, 80)).toBe(26)
			expect(getRandomInBetween(random, 10, 80)).toBe(36)
		})
	})

	describe('generatePages', () => {
		it('should generate random pages', () => {
			const random = createRandomWithSeed(testSeed)

			const { pages } = generatePages(random)

			expect(pages[0].gameType).toBe(GameType.Monopoly)
			expect(pages[0].pageType).toBe(PageType.Left)

			expect(pages[1].gameType).toBe(GameType.Monopoly)
			expect(pages[1].pageType).toBe(PageType.Right)
		})
	})

	describe('generateStickers', () => {
		it('should return random stickers from list', () => {
			const random = createRandomWithSeed(testSeed)

			const stickers = generateStickers(random, 20)

			expect(stickers).toHaveLength(20)

			expect(stickers[0].gameType).toBe(GameType.DreamCatcher)
			expect(stickers[stickers.length - 1].gameType).toBe(
				GameType.BlackJack
			)
		})
	})

	describe('createAvailableAreas', () => {
		it('should create available numbers with margin', () => {
			const areas = createAvailableAreas()

			expect(areas).toHaveLength(8)
		})
	})

	describe('getRandomStickerLocation', () => {
		it('should get random sticker location from available areas', () => {
			const areas = createAvailableAreas()
			const random = createRandomWithSeed(testSeed)

			expect(getRandomStickerLocation(areas, random)).toEqual([9, 78])
			expect(getRandomStickerLocation(areas, random)).toEqual([58, 10])
			expect(getRandomStickerLocation(areas, random)).toEqual([68, 80])
		})
	})
})
