import { action, makeAutoObservable, observable } from 'mobx'
import { RandomWithSeed } from '../utils/randomWithSeed'
import { Page, Pages, Sticker, Stickers } from './types'

export class StickerBookState {
	public stickerCountMap: Record<number, number> = {}
	public stickerPackCount = 0
	public currentSticker: Sticker | null = null
	public currentPage = -1

	constructor(public pages: Pages, private random: RandomWithSeed) {
		makeAutoObservable(
			this,
			{
				pages: observable.shallow,
				setCurrentSticker: action.bound,
				setCurrentPage: action.bound,
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

	public getStickers(): void {
		const newStickerIds = Array.from({ length: 5 })
			.map((_) => {
				return this.availableStickers[
					Math.floor(this.random() * this.availableStickers.length)
				]
			})
			.flatMap((s) => s.nr)
		newStickerIds.forEach(this.increaseStickerCount)
		this.stickerPackCount++
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
		this.currentSticker = sticker ? sticker : null
	}

	public setCurrentPage(pageNr: number) {
		this.currentPage = pageNr
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
