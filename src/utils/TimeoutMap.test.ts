import { TimeoutMap } from './TimeoutMap'

describe('TimeoutMap', () => {
	const callbackOne = jest.fn()
	const callbackTwo = jest.fn()
	const timer = 1000

	let timeoutMap: TimeoutMap

	beforeAll(() => {
		jest.useFakeTimers()
	})

	beforeEach(() => {
		jest.clearAllMocks()
		jest.clearAllTimers()
		timeoutMap = new TimeoutMap()
	})

	afterAll(() => {
		jest.useRealTimers()
	})

	it('should run callbacks after timers run out', () => {
		timeoutMap.addTimeout({
			uniqueId: '1',
			callback: callbackOne,
			timer: timer,
		})
		timeoutMap.addTimeout({
			uniqueId: '1',
			callback: callbackOne,
			timer: timer * 2,
		})
		timeoutMap.addTimeout({
			uniqueId: '2',
			callback: callbackTwo,
			timer: timer,
		})

		jest.advanceTimersByTime(timer)
		expect(callbackOne).toHaveBeenCalledTimes(0)
		expect(callbackTwo).toHaveBeenCalledTimes(1)
		jest.advanceTimersByTime(timer)
		expect(callbackOne).toHaveBeenCalledTimes(1)
	})

	it('should remove timeouts by uniqueId', () => {
		timeoutMap.addTimeout({
			uniqueId: '1',
			callback: callbackOne,
			timer: timer,
		})
		timeoutMap.addTimeout({
			uniqueId: '1',
			callback: callbackOne,
			timer: timer * 2,
		})
		timeoutMap.addTimeout({
			uniqueId: '2',
			callback: callbackTwo,
			timer: timer,
		})
		timeoutMap.removeTimeout('1')
		timeoutMap.removeTimeout('2')
		jest.advanceTimersByTime(timer * 2)
		expect(callbackOne).toHaveBeenCalledTimes(0)
		expect(callbackTwo).toHaveBeenCalledTimes(0)
	})

	it('should clear all timeouts', () => {
		timeoutMap.addTimeout({
			uniqueId: '1',
			callback: callbackOne,
			timer: timer,
		})
		timeoutMap.addTimeout({
			uniqueId: '2',
			callback: callbackTwo,
			timer: timer,
		})
		timeoutMap.clearAllTimeouts()
		jest.advanceTimersByTime(timer)
		expect(callbackOne).toHaveBeenCalledTimes(0)
		expect(callbackTwo).toHaveBeenCalledTimes(0)
	})
})
