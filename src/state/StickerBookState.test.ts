import { DEFAULT_RANDOM_SEED } from '../utils/randomDataUtils'
import { StickerBookState } from './StickerBookState'

describe('StickerBookState', () => {
	const createState = () => {
		return new StickerBookState(123)
	}

	it('should generate pages and stickers on state creation', () => {
		const state = createState()

		expect(state.pages).toHaveLength(32)
		expect(state.stickers).toHaveLength(144)
		expect(state.allStickerApplied).toBe(false)
		expect(state.stickerPacksAcquired).toBe(0)
		expect(state.stickerPacksOpened).toBe(0)
	})

	it('should change to new random seed and reset values', () => {
		const state = createState()
		state.currentPage = 2
		expect(state.seed).toBe(123)
		state.setNewSeed(DEFAULT_RANDOM_SEED)
		expect(state.seed).toBe(DEFAULT_RANDOM_SEED)
		expect(state.currentPage).toBe(-1)
	})

	it('should be able to find sticker in sticker list', () => {
		const state = createState()
		expect(state.findSticker(1)).not.toBeUndefined()
	})

	it('should get 5 random stickers for sticker pack', () => {
		const state = createState()
		const stickers = state.getStickers()
		expect(stickers).toHaveLength(5)
	})

	it('should set drag target if drag is active', () => {
		const state = createState()
		state.setDragTarget(1, true)
		expect(state.dragTargetNr).toBe(1)
	})

	it('should unset drag target if drag end is not on target', () => {
		const state = createState()
		state.dragTargetNr = 2
		expect(state.dragTargetNr).toBe(2)
		state.setDragTarget(2, false)
		expect(state.dragTargetNr).toBeNull()
	})

	it('should not apply sticker if selected sticker is not drag target', () => {
		const state = createState()
		state.selectedStickerNr = 10
		state.applySticker()
		expect(state.stickers[0].isUsed).toBe(false)
	})

	it('should not apply sticker if no sticker is selected', () => {
		const state = createState()
		state.dragTargetNr = 10
		state.applySticker()
		expect(state.stickers[0].isUsed).toBe(false)
	})

	it('should not apply sticker if already applied', () => {
		const state = createState()
		state.dragTargetNr = 24
		state.selectedStickerNr = 24
		state.stickers[23].isUsed = true
		state.applySticker()
		expect(state.stickers[23].count).toBe(0)
	})

	it('should not apply sticker if sticker count is zero', () => {
		const state = createState()
		state.dragTargetNr = 25
		state.selectedStickerNr = 25
		state.stickers[24].count = 0
		state.applySticker()
		expect(state.stickers[24].count).toBe(0)
	})

	it('should apply sticker', () => {
		const state = createState()
		state.dragTargetNr = 10
		state.selectedStickerNr = 10
		state.stickers[9].count = 1
		state.applySticker()
		expect(state.stickers[9].isUsed).toBe(true)
		expect(state.selectedStickerNr).toBe(-1)
		expect(state.stickers[9].count).toBe(0)
	})

	it('should set selected sticker nr', () => {
		const state = createState()
		state.setSelectedStickerNr(100)
		expect(state.selectedStickerNr).toBe(100)
	})

	it('should set current page', () => {
		const state = createState()
		state.setCurrentPage(11)
		expect(state.currentPage).toBe(11)
	})

	it('should get new sticker pack', () => {
		const state = createState()
		expect(state.stickerPacks).toHaveLength(0)
		state.getNewStickerPack()
		expect(state.stickerPacks).toHaveLength(1)
		expect(state.stickerPacks[0].isTurned).toBe(false)
		expect(state.stickerPacks[0].isUsed).toBe(false)
		expect(state.stickerPacks[0].stickers).toHaveLength(5)
		expect(state.stickerPacksAcquired).toBe(1)
	})

	it('should set current sticker pack', () => {
		const state = createState()
		expect(state.currentStickerPack).toBeNull()
		state.getNewStickerPack()
		state.setCurrentStickerPack(state.stickerPacks[0])
		expect(state.currentStickerPack).not.toBeNull()
	})

	it('should not update sticker count if no sticker pack selected', () => {
		const state = createState()
		state.updateStickerCount()
		expect(state.stickersLeftOver).toBe(0)
	})

	it('should not update sticker count', () => {
		jest.useFakeTimers()
		const state = createState()
		state.getNewStickerPack()
		state.setCurrentStickerPack(state.stickerPacks[0])
		const stickers = state.currentStickerPack?.stickers
		state.updateStickerCount()
		jest.advanceTimersByTime(1500)
		expect(state.stickersLeftOver).toBe(5)
		expect(stickers?.every((s) => s.count === 1)).toBe(true)
		jest.useRealTimers()
	})

	it('should decrease sticker packs acquired', () => {
		const state = createState()
		state.stickerPacksAcquired = 1
		state.decreaseStickerPacksAcquired()
		expect(state.stickerPacksAcquired).toBe(0)
	})

	it('should increase sticker packs opened', () => {
		const state = createState()
		expect(state.stickerPacksOpened).toBe(0)
		state.increaseStickerPacksOpened()
		expect(state.stickerPacksOpened).toBe(1)
	})

	it('should return calculated statistics for stickers', () => {
		const state = createState()
		expect(state.stickersUsed).toBe(0)
		expect(state.stickersLeftOver).toBe(0)
	})
})
