import { action, makeAutoObservable, observable } from 'mobx'
import { RandomWithSeed } from '../utils/randomWithSeed'
import { TimeoutMap } from '../utils/Timeout'
import { Page, Pages, Sticker, StickerPack, Stickers } from './types'

export class StickerBookState {
	public stickerCountMap: Record<number, number> = {}
	public stickerPacksAcquired = 0
	public stickerPacksOpened = 0
	public currentSticker: Sticker | null = null

	public currentPage = -1

	public currentStickerPack: StickerPack | null = null
	public stickerPacks: StickerPack[] = []

	public timeoutMap = new TimeoutMap()

	constructor(public pages: Pages, private random: RandomWithSeed) {
		makeAutoObservable(
			this,
			{
				pages: observable.shallow,
				setCurrentSticker: action.bound,
				setCurrentStickerPack: action.bound,
				setCurrentPage: action.bound,
				updateStickerCount: action.bound,
			},
			{ autoBind: true }
		)

		this.pages = pages

		this.availableStickers.forEach((s) => {
			this.stickerCountMap[s.nr] = 0
		})
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

	public applySticker(pageIndex: number, nr: number): void {
		if (this.stickerCountMap[nr] === 0) {
			return
		}

		const page: Page = JSON.parse(JSON.stringify(this.pages[pageIndex]))

		const stickerIdx = page.stickers.findIndex((s) => s.nr === nr)
		const sticker = this.findSticker(nr)

		page.stickers[stickerIdx] = {
			...sticker,
			isUsed: true,
		}

		this.pages[pageIndex] = page

		this.decreaseStickerCount(nr)
	}

	public setCurrentSticker(sticker: Sticker | null): void {
		this.currentSticker = sticker
	}

	public setCurrentPage(pageNr: number): void {
		this.currentPage = pageNr
	}

	public setCurrentStickerPack(stickerPack: StickerPack | null) {
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

	private increaseStickerCount(nr: number): void {
		this.stickerCountMap[nr]++
	}

	private decreaseStickerCount(nr: number): void {
		this.stickerCountMap[nr]--
	}

	private get availableStickers(): Stickers {
		return this.pages.flatMap((p) => p.stickers)
	}
}
