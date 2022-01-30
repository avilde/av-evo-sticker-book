import { makeAutoObservable } from 'mobx'
import { Pages, Stickers } from './types'

export class StickerBookState {
	public stickers: Stickers = []

	public pages: Pages

	constructor(pages: Pages) {
		makeAutoObservable(this)

		this.pages = pages
	}

	public get availableStickers(): Stickers {
		return this.pages.flatMap((p) => p.stickers)
	}
}
