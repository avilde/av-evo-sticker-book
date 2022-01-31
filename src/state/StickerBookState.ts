import { makeAutoObservable } from 'mobx'
import { RandomWithSeed } from '../utils/randomWithSeed'
import { Pages, Sticker, Stickers } from './types'

export class StickerBookState {
	public stickerCountMap: Record<number, number> = {}

	constructor(public pages: Pages, private random: RandomWithSeed) {
		makeAutoObservable(this, undefined, { autoBind: true })

		this.pages = pages

		this.availableStickers.forEach((s) => {
			this.stickerCountMap[s.nr] = 0
		})
	}

	private get availableStickers(): Stickers {
		return this.pages.flatMap((p) => p.stickers)
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
		console.log(newStickerIds)
		newStickerIds.forEach(this.increaseStickerCount)
	}

	private increaseStickerCount(nr: number) {
		this.stickerCountMap[nr]++
	}
}
