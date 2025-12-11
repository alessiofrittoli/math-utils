export type EasingFn = ( t: number ) => number

export const Easings = {
	linear: t => t,
	
	// --- Quadratic ---
	easeInQuad: t => t * t,
	easeOutQuad: t => t * ( 2 - t ),
	easeInOutQuad: t => (
		t < 0.5 ? 2 * t * t : -1 + ( 4 - 2 * t ) * t
	),

	// --- Cubic ---
	easeInCubic: t => t * t * t,
	easeOutCubic: t => ( --t ) * t * t + 1,
	easeInOutCubic: t => (
		t < 0.5
			? 4 * t * t * t
			: ( t - 1 ) * ( 2 * t - 2 ) ** 2 + 1
	),

	// --- Quartic ---
	easeInQuart: t => t * t * t * t,
	easeOutQuart: t => 1 - ( --t ) * t * t * t,
	easeInOutQuart: t => (
		t < 0.5 ?
			8 * t * t * t * t
			: 1 - 8 * ( --t ) * t * t * t
	),

	// --- Quintic ---
	easeInQuint: t => t * t * t * t * t,
	easeOutQuint: t => 1 + ( --t ) * t * t * t * t,
	easeInOutQuint: t => (
		t < 0.5
			? 16 * t * t * t * t * t
			: 1 + 16 * ( --t ) * t * t * t * t
	),

	// --- Sine ---
	easeInSine: t => 1 - Math.cos( ( t * Math.PI ) / 2 ),
	easeOutSine: t => Math.sin( ( t * Math.PI ) / 2 ),
	easeInOutSine: t => -( Math.cos( Math.PI * t ) - 1 ) / 2,

	// --- Exponential ---
	easeInExpo: t => (
		t === 0 ? 0 : Math.pow( 2, 10 * ( t - 1 ) )
	),
	easeOutExpo: t => (
		t === 1 ? 1 : 1 - Math.pow( 2, -10 * t )
	),
	easeInOutExpo: t => (
		t === 0 ? 0 :
		t === 1 ? 1 :
		t < 0.5
			? Math.pow( 2, 20 * t - 10 ) / 2
			: ( 2 - Math.pow( 2, -20 * t + 10 ) ) / 2
	),
	
	// --- Circular ---
	easeInCirc: t => 1 - Math.sqrt( 1 - t * t ),
	easeOutCirc: t => Math.sqrt( 1 - ( t - 1 ) ** 2 ),
	easeInOutCirc: t => (
		t < 0.5
			? ( 1 - Math.sqrt( 1 - ( 2 * t ) ** 2 ) ) / 2
			: ( Math.sqrt( 1 - ( 2 * t - 2 ) ** 2 ) + 1 ) / 2
	),

	// --- Back ---
	easeInBack: ( t, s = 1.70158 ): number => (
		t * t * ( ( s + 1 ) * t - s )
	),
	easeOutBack: ( t, s = 1.70158 ): number => (
		--t, t * t * ( ( s + 1 ) * t + s ) + 1
	),
	easeInOutBack: ( t, s = 1.70158 ): number => {
		s *= 1.525
		return (
			t < 0.5
				? ( t * 2 ) ** 2 * ( ( s + 1 ) * t * 2 - s ) / 2
				: ( ( t * 2 - 2 ) ** 2 * ( ( s + 1 ) * ( t * 2 - 2 ) + s ) + 2 ) / 2
		)
	},

	// --- Elastic ---
	easeInElastic: t => (
		t === 0 || t === 1
			? t
			: -Math.pow( 2, 10 * ( t - 1 ) ) * Math.sin( ( ( t - 1.1 ) * 5 * Math.PI ) )
	),
	easeOutElastic: t => (
		t === 0 || t === 1
			? t
			: Math.pow( 2, -10 * t ) * Math.sin( ( t - 0.1 ) * 5 * Math.PI ) + 1
	),
	easeInOutElastic: t => {
		if ( t === 0 || t === 1 ) return t

		t *= 2

		if ( t < 1 ) {
			return (
				-0.5 * Math.pow( 2, 10 * ( t - 1 ) ) * Math.sin( ( ( t - 1.1 ) * 5 * Math.PI ) )
			)
		}

		return (
			Math.pow( 2, -10 * ( t - 1 ) ) * Math.sin( ( ( t - 1.1 ) * 5 * Math.PI ) ) * 0.5 + 1
		)
	},

	// --- Bounce ---
	easeOutBounce: t => {
		const n1 = 7.5625
		const d1 = 2.75

		if ( t < 1 / d1 ) return n1 * t * t
		if ( t < 2 / d1 ) return n1 * ( t -= 1.5 / d1 ) * t + 0.75
		if ( t < 2.5 / d1 ) return n1 * ( t -= 2.25 / d1 ) * t + 0.9375
		return n1 * ( t -= 2.625 / d1 ) * t + 0.984375
	},
	easeInBounce: ( t ): number => (
		1 - Easings.easeOutBounce( 1 - t )
	),
	easeInOutBounce: ( t ): number => (
		t < 0.5
			? ( 1 - Easings.easeOutBounce( 1 - 2 * t ) ) / 2
			: ( 1 + Easings.easeOutBounce( 2 * t - 1 ) ) / 2
	),
} as const satisfies Record<string, EasingFn>


/**
 * Calculates the easing out value using a circular easing function.
 * 
 * @deprecated Use {@link Easings.easeOutCirc} instead.
 * 
 * @param	x The input value, typically in the range [0, 1].
 * @returns	The eased value, based on a circular easing-out curve.
 */
export const easeOutCirc = ( x: number ) => (
	Math.sqrt( 1 - Math.pow( x - 1, 4 ) )
)


/**
 * Linearly interpolates between two values.
 *
 * @param a The starting value.
 * @param b The ending value.
 * @param t The interpolation factor, typically in the range [0, 1].
 * 				- `0` returns `a`, `1` returns `b`.
 * @returns The interpolated value between `a` and `b`.
 */
export const lerp = ( a: number, b: number, t: number ) => (
	a * ( 1 - t ) + b * t
)