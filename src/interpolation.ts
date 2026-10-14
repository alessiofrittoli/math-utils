/**
 * Linearly interpolates between two values.
 *
 * @param a The starting value.
 * @param b The ending value.
 * @param t The interpolation factor, typically in the range [0, 1].
 * 				- `0` returns `a`, `1` returns `b`.
 * @returns The interpolated value between `a` and `b`.
 */
export const lerp = (a: number, b: number, t: number): number => a * (1 - t) + b * t
