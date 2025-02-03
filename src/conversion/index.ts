import { getTypedMap } from '@alessiofrittoli/web-utils'

/**
 * Generates a new conversion map where each key's ratio is recalculated 
 * relative to a specified reference key in the input object.
 *
 * @template T A key-value record object where the keys represent unique identifiers 
 *             and the values are numerical values associated with each key.
 * @template K The key of the reference item in the input object.
 *
 * @param map A key-value record object. The keys represent unique identifiers, 
 *            and the values are numerical quantities associated with each key.
 * @param key The reference key in the input object. All other keys' ratios 
 *            will be recalculated relative to the value of this key.
 *
 * @returns A new record object where each key's value is the ratio of the reference key's value 
 *          divided by the original value of the corresponding key.
 *
 * @throws A new Exception if the specified `key` does not exist in the provided `map`.
 *
 * @example
 * 
 * ```ts
 * const Carbonara = {
 * 	spaghettoni	: 320,
 * 	guanciale	: 150,
 * 	tuorli	: 6,
 * 	pepe	: 5,
 * 	pecorino	: 50,
 * 	cipolla	: 0, // 0 or you'll be fired!
 * 	portions	: 4,
 * }
 *
 * // Generate a map with ratios relative to the 'portions' key
 * console.log( getMapRatio( Carbonara, 'portions' ) )
 * // Outputs: {
 * //	spaghettoni	: 80,
 * //	guanciale	: 37.5,
 * //	tuorli		: 1.5,
 * //	pepe		: 1.25,
 * //	pecorino	: 12.5,
 * //	cipolla		: 0,
 * //	portions	: 1,
 * // }
 * 
 * // Get Carbonara ready for 1 person
 * console.log( convertTo( 1, getMapRatio( Carbonara, 'portions' ) ) )
 * // Outputs:
 * Map(6) {
 * 	'spaghettoni' => { value: 80, ratio: 0.0125 },
 * 	'guanciale' => { value: 37.5, ratio: 0.02666666666666667 },
 * 	'tuorli' => { value: 1.5, ratio: 0.6666666666666666 },
 * 	'pepe' => { value: 1.25, ratio: 0.8 },
 * 	'pecorino' => { value: 12.5, ratio: 0.08 },
 * 	'cipolla' => { value: 0, ratio: 0 },
 * 	'portions' => { value: 1, ratio: 1 }
 * }
 * ```
 */
export const getMapRatio = <
	T extends Record<string, number> = Record<string, number>,
	K extends keyof T = keyof T
>( map: T, key: K ) => {
	if ( ! ( key in map ) ) {
		throw new Error( `The provided \`key\` '${ String( key ) }' doesn't exist in the provided map.` )
	}
	
	const _map		= { ...map }
	const numerator	= map[ key ]

	if ( numerator == null || isNaN( numerator ) ) {
		let message = (
			`The provided '${ String( key ) }' value is not a number.`
		)
		if ( typeof numerator !== 'bigint' && typeof numerator !== 'number' ) {
			message += ` ${ typeof numerator } given.`
		}
		throw new TypeError( message )
	}
	
	Object.keys( _map ).map( mapKey => {
		const denominator = _map[ mapKey ]!
		let value = numerator / denominator

		// if 0 / 0
		if ( isNaN( value ) ) value = 1
		// if X / 0 || X / -0
		if ( value === Infinity || value === -Infinity ) value = 0
		
		;( _map[ mapKey ] as number ) = value
	} )

	return _map
}


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
export interface Conversion
{
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
export const convertTo = <T extends ConversionMap>( input: number, map: T ) => (
	getTypedMap<ConvertedUnit<T>, false>(
		Object.keys( map ).map( unit => {
			const ratio	= map[ unit ]

			if ( ratio == null || isNaN( ratio ) ) {
				let message = (
					`The provided '${ String( unit ) }' ratio is not a number.`
				)
				if ( typeof ratio !== 'bigint' && typeof ratio !== 'number' ) {
					message += ` ${ typeof ratio } given.`
				}
				throw new TypeError( message )
			}

			let value = input / ratio
			if (
				// if 0 / 0
				isNaN( value ) ||
				// if X / 0
				value === Infinity ||
				// if X / -0
				value === -Infinity
			) value = 0
			return [ unit, { value, ratio } ]
		} )
	)
)


/**
 * Conver hex color to rgba.
 * 
 * @param	hex		A valid hex color code.
 * @param	alpha	( Optional ) The alpha value 0~1. If not provided, it will be extracted from the hex color code alpha channel.
 * @returns	The rgba color values. Throw a new Exception if given color is not valid.
 */
export const hexToRGBA = ( hex: string, alpha?: number ) => {

	if ( ! /^#([A-Fa-f0-9]{3}){1,2}([A-Fa-f0-9]{2})?$/.test( hex ) ) throw new Error( 'Bad Hex' )

	let c: string[]

	// Remove `#` and split into individual characters
	c = hex.substring( 1 ).split( '' )

	// Expand short hex codes (e.g., `#FFF` → `#FFFFFF`)
	if ( c.length === 3 ) {
		c = [ c[ 0 ]!, c[ 0 ]!, c[ 1 ]!, c[ 1 ]!, c[ 2 ]!, c[ 2 ]! ]
	}

	// Extract RGB and optional alpha
    const r = parseInt( `${ c[ 0 ] }${ c[ 1 ] }`, 16 )
    const g = parseInt( `${ c[ 2 ] }${ c[ 3 ] }`, 16 )
    const b = parseInt( `${ c[ 4 ] }${ c[ 5 ] }`, 16 )
    const a = alpha || ( c.length === 8 ? parseInt( `${ c[ 6 ] }${ c[ 7 ] }`, 16 ) / 255 : 1 )

    return [ r, g, b, a ] as const

}


/**
 * Conver hex color to rgba.
 * 
 * @param	hex		A valid hex color code.
 * @param	alpha	( Optional ) The alpha value 0~1. If not provided, it will be extracted from the hex color code alpha channel.
 * @returns	The rgba color. Throw a new Exception if given color is not valid.
 */
export const hexToRGBAString = ( hex: string, alpha?: number ) => (
	`rgba(${ hexToRGBA( hex, alpha ).join( ',' ) })`
)


/**
 * Convert hex color to ANSI true-color string.
 * 
 * @param	hex		A valid hex color code.
 * @param	code	The ANSI code. Usually `38` for text colors. `48` for background colors.
 * @returns The ANSI formatted string.
 */
export const hexToAnsiTrueColor = ( hex: string, code: number ) => {
	const [ r, g, b ] = hexToRGBA( hex )
	return [ `\x1b[${ code }`, 2, r, g, `${ b }m` ].join( ';' )
}