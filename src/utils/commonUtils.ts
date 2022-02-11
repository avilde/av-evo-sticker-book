export function sumArray(collection: number[] | undefined): number {
	if (!collection) return 0

	if (Array.isArray(collection)) {
		collection.reduce((sum: number, item) => sum + item, 0)
	}

	return 0
}

export function noop() {}
