/**
 * Round a number.
 * 
 * @param number	The number to round.
 * @param places	The number of decimal places to retain. Defaults to 0 (no decimal places).
 * @returns			The rounded number.
 */
export const round = (
	number: number,
	places = 0
) => (
	Number(
		Math.round(
			Number( number + `e${ places }` )
		) + `e-${ places }`
	)
)


/**
 * Find the closest number to `needle` from `haystack`.
 * 
 * @param	haystack	An array of numbers to look into.
 * @param	needle		The target number to look for.
 * @returns	The closest number.
 */
export const getClosestNumber = ( haystack: number[], needle: number ) => {

	let closest		= haystack[ 0 ] || 0
	let closestDiff	= Math.abs( needle - closest )
	
	for ( let i = 1; i < haystack.length; i++ ) {
		const current		= haystack[ i ] || 0
		const currentDiff	= Math.abs( needle - current ) 

		if ( currentDiff < closestDiff ) {
			closest		= current
			closestDiff	= currentDiff
		}
	}

	return closest
}


/**
 * Retrieve numbers from a string.
 * 
 * @param	string The input string.
 * @returns	A tuple where the first element is a concatenated number of all numbers, 
 * 			and the second is an array of grouped numbers found in the string.
 */
export const getNumbersFromString = ( string: string ) => {
	/** Match sequences of digits (e.g., "123" instead of "1", "2", "3") */
	const matches	= string.match( /\d+/g )
	const result	= matches?.join( '' )
	const numbers	= matches?.map( Number ) || null

	return [ result ? Number( result ) : null, numbers ] as const
}


/**
 * Get the ordinal suffix (e.g., st, nd, rd, th).
 * 
 * @param	number The number used to retrieve the ordinal suffix.
 * @returns	The given number ordinal suffix.
 */
export const englishOrdinalSuffix = ( number: number ) => {
	const lastTwoDigits	= number % 100
	const lastDigit		= number % 10

	return (
		lastTwoDigits >= 11 && lastTwoDigits <= 13
			? 'th'
			: lastDigit === 1
			? 'st'
			: lastDigit === 2
			? 'nd'
			: lastDigit === 3
			? 'rd'
			: 'th'
	)
}


/**
 * Left pads a string or number with the given character to ensure it reaches a specified length.
 * 
 * This behaves similarly to `String.prototype.padStart`
 * 
 * @param value		The value to pad with the given character.
 * @param maxLength	The length of the resulting string once the given value has been padded.\
 * 					If this parameter is smaller than the given value's length, the current string will be returned as it is.
 * @param character ( Optional ) The character to use while padding the given value.
 * 
 * @returns The number as a string, padded with the given character if necessary. Default: `0`.
 */
export const padStart = (
	value		: string | number,
	maxLength	: number,
	character	: string = '0',
) => {
	value = value.toString()
	if ( value.length >= maxLength ) return value

	const padding = Array( maxLength + 1 ).join( character )

	return (
		`${ padding }${ value }`
			.slice( maxLength * -1 )
	)
}