/**
 * Calculates the easing out value using a circular easing function.
 * 
 * @deprecated Use {@link Easing.easeOutCirc} instead.
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