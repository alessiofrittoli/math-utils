import { afterEach, beforeEach, describe, expect, it, vi, type Mock } from 'vitest'
import { Tween } from '@/Tween'

describe('Tween', () => {
	let originalRAF: typeof globalThis.requestAnimationFrame
	let originalCAF: typeof globalThis.cancelAnimationFrame
	let originalPerformanceNow: typeof globalThis.performance.now

	let now = 0
	let performanceNow: Mock<typeof globalThis.performance.now>

	let rafId = 1
	let rafCallbacks: Record<number, FrameRequestCallback> = {}

	const requestAnimationFrame = vi.fn((cb: FrameRequestCallback) => {
		rafCallbacks[rafId] = cb
		return rafId++
	})
	const cancelAnimationFrame = vi.fn((id: number) => {
		delete rafCallbacks[id]
	})

	beforeEach(() => {
		vi.useFakeTimers()

		// oxlint-disable-next-line typescript/unbound-method
		originalPerformanceNow = global.performance.now
		originalRAF = global.requestAnimationFrame
		originalCAF = global.cancelAnimationFrame

		now = 0
		performanceNow = vi.fn(() => now)
		global.performance.now = performanceNow

		global.requestAnimationFrame = requestAnimationFrame
		global.cancelAnimationFrame = cancelAnimationFrame
	})

	afterEach(() => {
		global.requestAnimationFrame = originalRAF
		global.cancelAnimationFrame = originalCAF
		global.performance.now = originalPerformanceNow

		rafCallbacks = {}

		vi.clearAllTimers().useRealTimers().resetAllMocks()
	})

	it('immediately set value and call onEnd if duration <= 0', () => {
		const onTick = vi.fn()
		const onEnd = vi.fn()
		const tween = new Tween()

		tween.to(1, { from: 0, duration: 0, onTick, onEnd, strategy: 'timer' })

		expect(onTick).toHaveBeenCalledWith(1)
		expect(onEnd).toHaveBeenCalled()
	})

	it('interpolates from "from" to "to" and call onTick and onEnd (strategy: raf)', () => {
		const onTick = vi.fn()
		const onEnd = vi.fn()
		const tween = new Tween()

		tween.to(1, { from: 0, onTick, onEnd })

		const tick = requestAnimationFrame.mock.calls[0]?.[0]
		tick?.(now)

		// Simulate animation frames
		for (let i = 0; i <= Tween.Duration / 2 / 10; i++) {
			now = i * 25
			const tick = requestAnimationFrame.mock.calls[i]?.[0]
			tick?.(now)
		}

		expect(onTick).toHaveBeenCalled()
		expect(onTick).toHaveBeenCalledWith(expect.any(Number))
		expect(onEnd).toHaveBeenCalled()
		// Final value should be 1
		expect(onTick).toHaveBeenLastCalledWith(1)
	})

	it('interpolates from "from" to "to" and call onTick and onEnd (strategy: timer)', async () => {
		const onTick = vi.fn()
		const onEnd = vi.fn()
		const tween = new Tween()

		tween.to(1, { from: 0, duration: 100, onTick, onEnd, strategy: 'timer', Hz: 10 })

		// Simulate time passing
		for (let i = 0; i <= 10; i++) {
			now = i * 10
			vi.runOnlyPendingTimers()
		}

		expect(onTick).toHaveBeenCalled()
		expect(onEnd).toHaveBeenCalled()
		expect(onTick).toHaveBeenLastCalledWith(1)
	})

	it('uses custom easing function', () => {
		const onTick = vi.fn()
		const onEnd = vi.fn()
		const tween = new Tween()

		const easing = vi.fn(t => t * t)
		tween.to(1, { from: 0, duration: 100, onTick, onEnd, strategy: 'timer', Hz: 10, easing })

		for (let i = 0; i <= 10; i++) {
			now = i * 10
			vi.runOnlyPendingTimers()
		}

		expect(easing).toHaveBeenCalled()
		expect(onEnd).toHaveBeenCalled()
	})

	it('aborts previous tween if a new one starts (strategy: raf)', () => {
		const onTick1 = vi.fn()
		const onEnd1 = vi.fn()
		const onTick2 = vi.fn()
		const onEnd2 = vi.fn()
		const tween = new Tween()

		tween.to(1, { from: 0, duration: 100, onTick: onTick1, onEnd: onEnd1 })
		const tick = requestAnimationFrame.mock.calls[0]?.[0]
		tick?.(now)
		// Start a new tween before the first finishes
		tween.to(0, { from: 1, duration: 100, onTick: onTick2, onEnd: onEnd2 })

		// Simulate animation frames
		for (let i = 0; i <= 5; i++) {
			now = i * 25
			const tick = requestAnimationFrame.mock.calls[i]?.[0]
			tick?.(now)
		}

		for (let i = 0; i <= 10; i++) {
			now = i * 10
			vi.runOnlyPendingTimers()
		}

		expect(cancelAnimationFrame).toHaveBeenCalled()
		expect(onEnd1).not.toHaveBeenCalled()
		expect(onTick2).toHaveBeenCalled()
		expect(onEnd2).toHaveBeenCalled()
	})

	it('aborts previous tween if a new one starts (strategy: timer)', () => {
		const onTick1 = vi.fn()
		const onEnd1 = vi.fn()
		const onTick2 = vi.fn()
		const onEnd2 = vi.fn()
		const tween = new Tween()

		tween.to(1, { from: 0, duration: 100, onTick: onTick1, onEnd: onEnd1, strategy: 'timer', Hz: 10 })
		// Start a new tween before the first finishes
		tween.to(0, { from: 1, duration: 100, onTick: onTick2, onEnd: onEnd2, strategy: 'timer', Hz: 10 })

		for (let i = 0; i <= 10; i++) {
			now = i * 10
			vi.runOnlyPendingTimers()
		}

		expect(onEnd1).not.toHaveBeenCalled()
		expect(onTick2).toHaveBeenCalled()
		expect(onEnd2).toHaveBeenCalled()
	})
})
