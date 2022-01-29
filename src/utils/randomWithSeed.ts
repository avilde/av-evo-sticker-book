/* eslint-disable no-bitwise, no-param-reassign, operator-assignment, no-mixed-operators */

// Mulberry32 - 32-bit random seed generator
// Source: https://github.com/bryc/code/blob/master/jshash/PRNGs.md#mulberry32

/**
 * Function is used to get the same random value every time to ensure
 * data is the same in unit tests and screenshot tests for storybook
 * @param seed
 * @returns random number based on input seed
 */
export function createRandomWithSeed(seed: number): RandomWithSeed {
	return () => {
		seed |= 0
		seed = (seed + 0x6d2b79f5) | 0
		let imul = Math.imul(seed ^ (seed >>> 15), 1 | seed)
		imul = (imul + Math.imul(imul ^ (imul >>> 7), 61 | imul)) ^ imul
		return ((imul ^ (imul >>> 14)) >>> 0) / 4294967296
	}
}

export type RandomWithSeed = () => number
