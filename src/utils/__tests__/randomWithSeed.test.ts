import { createRandomWithSeed } from '../randomWithSeed'

describe('randomWithSeed tests', () => {
	it('should have the same random value 10_000 times', () => {
		for (let i = 0; i < 10_000; i++) {
			const random = createRandomWithSeed(123)

			expect(random()).toBe(0.7872516233474016)
		}
	})
})
