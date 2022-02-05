interface TimeoutItem {
	uniqueId: string
	callback: () => void
	timer: number
}

interface InternalTimeoutItem extends TimeoutItem {
	timeoutId: number
}

export class TimeoutMap {
	private timeoutMap: { [key in string]?: InternalTimeoutItem } = {}

	public addTimeout(item: TimeoutItem): void {
		if (this.isTimeoutActive(item.uniqueId)) {
			this.removeTimeout(item.uniqueId)
		}

		const timeoutId = window.setTimeout(() => {
			item.callback()
			delete this.timeoutMap[item.uniqueId]
		}, item.timer)

		this.timeoutMap[item.uniqueId] = {
			...item,
			timeoutId: timeoutId,
		}
	}

	public removeTimeout(id: string): void {
		const item = this.timeoutMap[id]
		// istanbul ignore else
		if (item) {
			window.clearTimeout(item.timeoutId)
			delete this.timeoutMap[id]
		}
	}

	public isTimeoutActive(id: string): boolean {
		return id in this.timeoutMap
	}

	public clearAllTimeouts(): void {
		for (const key of Object.keys(this.timeoutMap)) {
			window.clearTimeout(this.timeoutMap[key]?.timeoutId)
		}
		this.timeoutMap = {}
	}
}
