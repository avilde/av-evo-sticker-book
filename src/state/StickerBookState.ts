import { action, makeAutoObservable, observable } from 'mobx'
import { generatePages } from '../utils/randomDataUtils'
import { createRandomWithSeed, RandomWithSeed } from '../utils/randomWithSeed'
import { TimeoutMap } from '../utils/TimeoutMap'
import { Pages, SetDragTarget, Sticker, StickerPack, Stickers } from './types'

export class StickerBookState {
	public selectedStickerNr = -1
	public dragTargetNr: number | null = null

	public currentPage = -1

	public currentStickerPack: StickerPack | null = null
	public stickerPacks: StickerPack[] = []
	public stickerPacksAcquired = 0
	public stickerPacksOpened = 0

	public timeoutMap = new TimeoutMap()

	public pages: Pages
	public stickers: Stickers
	public random: RandomWithSeed

	constructor(public seed: number) {
		makeAutoObservable(
			this,
			{
				pages: observable.deep,
				setCurrentStickerPack: action.bound,
				setCurrentPage: action.bound,
				updateStickerCount: action.bound,
				setSelectedStickerNr: action.bound,
				setDragTarget: action.bound,
				applySticker: action.bound,
			},
			{ autoBind: true }
		)

		this.random = createRandomWithSeed(seed)
		const { pages, stickers } = generatePages(this.random)

		this.pages = pages
		this.stickers = stickers
	}

	public setNewSeed(seed: number): void {
		this.seed = seed
		this.stickerPacksAcquired = 0
		this.stickerPacksOpened = 0
		this.currentStickerPack = null
		this.currentPage = -1
		this.selectedStickerNr = -1
		this.timeoutMap.clearAllTimeouts()
		this.random = createRandomWithSeed(seed)
		const { pages, stickers } = generatePages(this.random)

		this.pages = pages
		this.stickers = stickers
	}

	public findSticker(nr: number): Sticker {
		return this.stickers.find((s) => s.nr === nr)!
	}

	public getStickers(): Stickers {
		return Array.from({ length: 5 }).map((_) => {
			return this.stickers[
				Math.floor(this.random() * this.stickers.length)
			]
		})
	}

	public setDragTarget: SetDragTarget = (nr, isOnTarget) => {
		this.dragTargetNr = isOnTarget ? nr : null
	}

	public applySticker(): void {
		if (
			this.selectedStickerNr === this.dragTargetNr &&
			!this.stickers[this.dragTargetNr - 1].isUsed &&
			this.stickers[this.dragTargetNr - 1].count !== 0
		) {
			this.stickers[this.dragTargetNr - 1].isUsed = true
			this.decreaseStickerCount(this.dragTargetNr)
		}
		this.setSelectedStickerNr(-1)
	}

	public setSelectedStickerNr(nr: number): void {
		this.selectedStickerNr = nr
	}

	public setCurrentPage(pageNr: number): void {
		this.currentPage = pageNr
	}

	public setCurrentStickerPack(stickerPack: StickerPack | null): void {
		this.currentStickerPack = stickerPack
	}

	public updateStickerCount(): void {
		if (!this.currentStickerPack) return

		this.currentStickerPack.stickers.forEach((sticker, index) => {
			this.timeoutMap.addTimeout({
				uniqueId: String(sticker.nr),
				timer: index * 300,
				callback: () => this.increaseStickerCount(sticker.nr),
			})
		})

		this.timeoutMap.addTimeout({
			uniqueId: 'hide-sticker-zoom',
			timer: 1500,
			callback: () => {
				this.setCurrentStickerPack(null)
				this.stickerPacks.splice(0, 1)
			},
		})
	}

	public getNewStickerPack(): void {
		const newStickerPack: StickerPack = {
			isTurned: false,
			isUsed: false,
			stickers: this.getStickers(),
		}
		this.stickerPacks.unshift(newStickerPack)
		this.stickerPacksAcquired++
	}

	public decreaseStickerPacksAcquired(): void {
		this.stickerPacksAcquired--
	}

	public increaseStickerPacksOpened(): void {
		this.stickerPacksOpened++
	}

	public get stickersUsed(): number {
		return this.stickers.filter((s) => s.isUsed).length
	}

	public get stickersLeftOver(): number {
		return this.stickers.reduce((sum: number, s) => sum + s.count, 0) || 0
	}

	public get allStickerApplied(): boolean {
		return this.stickers.every((s) => s.isUsed)
	}

	private increaseStickerCount(nr: number) {
		this.stickers[nr - 1].count++
	}

	private decreaseStickerCount(nr: number) {
		this.stickers[nr - 1].count--
	}
}
