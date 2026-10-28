import { getTypedMap, type TypedMap } from '@alessiofrittoli/typed-map'

/**
 * A mapping of unit names to their corresponding conversion factors.
 *
 * @example
 *
 * ```ts
 * const InMeters: ConversionMap = {
 * 	miles: 1609.34,
 * 	kilometers: 1000,
 * }
 * ```
 */
export type ConversionMap = Record<string, number>

/**
 * Represents a single conversion result for a unit.
 */
export interface Conversion {
	/**
	 * The converted value using the given `ratio`.
	 *
	 * Example:
	 * If the input value is `100` and the ratio is `1000`, the `value` will be `0.1`.
	 */
	value: number
	/**
	 * The provided conversion ratio used to calculate the `value`.
	 *
	 * Example:
	 * For kilometers in a `ConversionMap`, the ratio might be `1000`.
	 */
	ratio: number
}

/**
 * A mapping of units to their corresponding conversion results.
 *
 * @template T A `ConversionMap` defining the available units and their conversion factors.
 */
export type ConvertedUnit<T extends ConversionMap> = Record<keyof T, Conversion>

/**
 * Converts a numeric input value into various units based on a provided conversion mapping.
 *
 * @template T A record where keys are unit names and values are the conversion factors.
 *
 * @param input	The numeric value to be converted.
 * @param map	A record object defining the conversion factors for each unit.
 * 				The keys represent unit names, and the values represent the measurement factor for each unit.
 *
 * @returns	A typed map where each key corresponds to a unit
 * 			and the value is an object containing the converted value (`value`) and the used measurement factor (`measurement`).
 *
 * @example
 * ```ts
 * const InMeters = {
 * 	mile: 1609.34,
 * 	yard: 0.9144,
 * 	foot: 0.3048,
 * }
 *
 * const result = convertTo( 100, InMeters )
 *
 * console.log( result.get( 'mile' ) )	// { value: 0.06213727366498068, ratio: 1609.34 }
 * console.log( result.get( 'yard') )	// { value: 109.36132983377078, ratio: 0.9144 }
 * console.log( result.get( 'foot' ) )	// { value: 328.0839895013123, ratio: 0.3048 }
 * ```
 */
export const convertTo = <T extends ConversionMap>(
	input: number,
	map: T,
): TypedMap<ConvertedUnit<T>, false> =>
	getTypedMap<ConvertedUnit<T>, false>(
		Object.keys(map).map(unit => {
			const ratio = map[unit]

			if (ratio == null || isNaN(ratio)) {
				let message = `The provided '${String(unit)}' ratio is not a number.`
				if (typeof ratio !== 'bigint' && typeof ratio !== 'number') {
					message += ` ${typeof ratio} given.`
				}
				throw new TypeError(message)
			}

			let value = input / ratio
			if (
				// if 0 / 0
				isNaN(value) ||
				// if X / 0
				value === Infinity ||
				// if X / -0
				value === -Infinity
			)
				value = 0
			return [unit, { value, ratio }]
		}),
	)
