/**
 * Generate a random number between the given range.
 * Equivalent JavaScript function of PHP `mt_rand` function.
 * 
 * @param min	( Optional ) Lowest value to be returned. Default: `0`.
 * @param max	( Optional ) Highest value to be returned. Default: `0x7FFFFFFF`.
 * 
 * @link [PHP: mt_rand - Manual](https://www.php.net/manual/it/function.mt-rand.php)
 * 
 * @returns Random number between the given range.
 */
export const mtRand = ( min: number | string = 0, max: number | string = 0x7FFFFFFF ) => {
	
	min = parseInt( min.toString(), 10 )
	max = parseInt( max.toString(), 10 )

	return (
		Math.floor( Math.random() * ( max - min + 1 ) ) + min
	)

}


/**
 * Generate random numeric UUID.
 * 
 * Usefull when `crypto.randomUUID()` is not available.
 * 
 * The usage is discouraged since this function has been designed to be executed as fallback of {@link crypto.randomUUID()}. Use {@link randomUUID} instead.
 * 
 * @returns Random UUID.
 */
export const randomNumUUID = () => (
	[
		[ mtRand( 0, 0xffff ), mtRand( 0, 0xffff ) ].join( '' ), // 32 bits for 'time_low'
		mtRand( 0, 0xffff ), // 16 bits for 'time_mid'
		mtRand( 0, 0x0fff ) | 0x4000, // 16 bits for 'time_hi_and_version', Four most significant bits holds version number 4
		mtRand( 0, 0x3fff ) | 0x8000, // 16 bits, 8 bits for 'clk_seq_hi_res', 8 bits for 'clk_seq_low', Two most significant bits holds zero and one for variant DCE1.1
		[ mtRand( 0, 0xffff ), mtRand( 0, 0xffff ), mtRand( 0, 0xffff ) ].join( '' ) // 48 bits for 'node'
	].join( '-' )
)


/**
 * Generate random v4 UUID.
 * 
 * Usefull when `crypto.randomUUID()` is not available.
 * 
 * The usage is discouraged since this function has been designed to be executed as fallback of {@link crypto.randomUUID()}. Use {@link randomUUID} instead.
 * 
 * @returns A random v4 UUID.
 */
export const generateUUID = (): `${ string }-${ string }-${ string }-${ string }-${ string }` => {

	/** Current timestamp. */
	let ts = new Date().getTime()

	/** Time in microseconds since page-load or 0 if unsupported. */
	let microts = performance.now() * 1000

	return (
		'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
			.replace( /[xy]/g, substring => {
				let random = mtRand( 0, 16 )

				if ( ts > 0 ) {
					/**
					 * Use timestamp until depleted.
					 */
					random	= ( ts + random ) % 16 | 0
					ts		= Math.floor( ts / 16 )
				} else {
					/**
					 * Use microseconds since page-load if supported.
					 */
					random	= ( microts + random ) % 16 | 0
					microts	= Math.floor( microts / 16 )
				}

				return (
					( substring === 'x' ? random : ( random & 0x3 ) | 0x8 )
						.toString( 16 )
				)
			} )
	) as `${ string }-${ string }-${ string }-${ string }-${ string }`

}


/**
 * Generate random UUID.
 * Uses `crypto.randomUUID()` whenever possible. Fallback to {@link generateUUID}.
 * 
 * @returns Random UUID.
 */
export const randomUUID = () => (
	typeof crypto !== 'undefined' && 'randomUUID' in crypto && typeof crypto.randomUUID === 'function'
		? crypto.randomUUID()
		: generateUUID()
)