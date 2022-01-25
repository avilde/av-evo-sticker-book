import { makeAutoObservable } from 'mobx'
import { Pages, Stickers } from './types'

export class StickerBookState {
	public stickers: Stickers = []

	public pages: Pages = []

	constructor() {
		makeAutoObservable(this)
	}
}
