import { makeAutoObservable } from 'mobx'
import { Pages, Sticker, Stickers } from './types'

export class StickerBookState {
	public stickerCountMap: Record<number, number> = {}

	public pages: Pages

	constructor(pages: Pages) {
		makeAutoObservable(this, undefined, { autoBind: true })

		this.pages = pages

		this.availableStickers.forEach((s) => {
			this.stickerCountMap[s.nr] = 0
		})
	}

	private get availableStickers(): Stickers {
		return this.pages.flatMap((p) => p.stickers)
	}

	public getSticker(nr: number): Sticker {
		return this.availableStickers.find((s) => s.nr === nr)!
	}
}
