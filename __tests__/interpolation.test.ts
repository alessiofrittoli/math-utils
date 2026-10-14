import { describe, expect, it } from 'vitest'
import { lerp } from '@/interpolation'

describe('lerp', () => {
	it('interpolates at the ends', () => {
		expect(lerp(0, 10, 0)).toBe(0)
		expect(lerp(0, 10, 1)).toBe(10)
	})

	it('interpolates at the midpoint', () => {
		expect(lerp(0, 10, 0.5)).toBe(5)
	})

	it('interpolates at other values of `t`', () => {
		expect(lerp(5, 15, 0.25)).toBe(7.5)
		expect(lerp(100, 200, 0.75)).toBe(175)
	})
})
