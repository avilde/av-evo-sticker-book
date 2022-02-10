import { action, makeAutoObservable, observable } from 'mobx'
import { RandomWithSeed } from '../utils/randomWithSeed'
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

	constructor(
		public pages: Pages,
		public stickers: Stickers,
		public random: RandomWithSeed
	) {
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
			!this.stickers[this.dragTargetNr - 1].isUsed
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

	private increaseStickerCount(nr: number) {
		this.stickers[nr - 1].count++
	}

	private decreaseStickerCount(nr: number) {
		this.stickers[nr - 1].count--
	}
}
