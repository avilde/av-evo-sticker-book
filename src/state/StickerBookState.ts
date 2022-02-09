import { action, makeAutoObservable, observable } from 'mobx'
import { RandomWithSeed } from '../utils/randomWithSeed'
import { TimeoutMap } from '../utils/TimeoutMap'
import { Pages, SetDragTarget, Sticker, StickerPack, Stickers } from './types'

export class StickerBookState {
	public stickerCountMap: Record<number, number> = {}
	public selectedStickerNr = -1
	public dragTarget: { pageIndex: number; nr: number } | null = null

	public currentPage = -1

	public currentStickerPack: StickerPack | null = null
	public stickerPacks: StickerPack[] = []
	public stickerPacksAcquired = 0
	public stickerPacksOpened = 0

	public timeoutMap = new TimeoutMap()

	constructor(public pages: Pages, private random: RandomWithSeed) {
		makeAutoObservable(
			this,
			{
				pages: observable.deep,
				dragTarget: observable.ref,
				setCurrentStickerPack: action.bound,
				setCurrentPage: action.bound,
				updateStickerCount: action.bound,
				setSelectedStickerNr: action.bound,
				setDragTarget: action.bound,
				applySticker: action.bound,
			},
			{ autoBind: true }
		)

		this.pages = pages

		this.availableStickers.forEach((s) => {
			this.stickerCountMap[s.nr] = 0
		})
	}

	public get availableStickers(): Stickers {
		return this.pages.flatMap((p) => p.stickers)
	}

	public findSticker(nr: number): Sticker {
		return this.availableStickers.find((s) => s.nr === nr)!
	}

	public getStickers(): Stickers {
		return Array.from({ length: 5 }).map((_) => {
			return this.availableStickers[
				Math.floor(this.random() * this.availableStickers.length)
			]
		})
	}

	public setDragTarget: SetDragTarget = (nr, isOnTarget) => {
		const pageIndex = this.findPageIndexByStickerNr(nr)
		console.log('setDragTarget', { nr, pageIndex, isOnTarget })
		this.dragTarget =
			isOnTarget || pageIndex === -1 ? { pageIndex, nr } : null
	}

	public applySticker(): void {
		console.log('applySticker', this.selectedStickerNr, this.dragTarget)
		if (!this.dragTarget) return

		const { pageIndex, nr } = this.dragTarget
		if (this.selectedStickerNr !== nr || this.stickerCountMap[nr] === 0) {
			return
		}

		const stickerIdx = this.pages[pageIndex].stickers.findIndex(
			(s) => s.nr === nr
		)

		this.pages[pageIndex].stickers[stickerIdx].isUsed = true
		this.decreaseStickerCount(nr)
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

	private findPageIndexByStickerNr(nr: number) {
		return this.pages.findIndex((p) => p.stickers.find((s) => (s.nr = nr)))
	}

	private increaseStickerCount(nr: number) {
		this.stickerCountMap[nr]++
	}

	private decreaseStickerCount(nr: number) {
		this.stickerCountMap[nr]--
	}
}
