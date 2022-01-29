import { GameType, PageType } from '../../consts'
import {
	generatePages,
	getRandomGameTypes,
	getRandomInBetween,
	getRandomPageType,
} from '../randomDataUtils'
import { createRandomWithSeed } from '../randomWithSeed'

describe('randomDataUtils', () => {
	describe('getRandomGameTypes', () => {
		it('should return randomized game types without duplicates', () => {
			const random = createRandomWithSeed(123)

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
			const random = createRandomWithSeed(123)

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
			const random = createRandomWithSeed(123)

			expect(getRandomInBetween(random, 10, 80)).toBe(65)
			expect(getRandomInBetween(random, 10, 80)).toBe(22)
			expect(getRandomInBetween(random, 10, 80)).toBe(45)
			expect(getRandomInBetween(random, 10, 80)).toBe(26)
			expect(getRandomInBetween(random, 10, 80)).toBe(36)
		})
	})

	describe('generatePages', () => {
		const random = createRandomWithSeed(123)

		const pages = generatePages(random)

		expect(pages[0].gameType).toBe(GameType.Megaball)
		expect(pages[0].pageType).toBe(PageType.Left)

		expect(pages[1].gameType).toBe(GameType.Megaball)
		expect(pages[1].pageType).toBe(PageType.Right)
	})
})
