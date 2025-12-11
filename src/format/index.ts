/**
 * Format a number according to locale standard format.
 * 
 * @param number	The number to format.
 * @param options	The number format options.
 * @param locales	A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects
 * 					that contain one or more language or locale tags.
 * 					If you include more than one locale string,
 * 					list them in descending order of priority so that the first entry is the preferred locale.
 * 					If you omit this parameter, the default locale of the JavaScript runtime is used.
 * @returns			The formatted number according to the locale format.
 * 
 * @usage
 * ```ts
 * // outputs 10.00
 * formatNumber( 10, {
 *     minimumFractionDigits: 2,
 *     maximumFractionDigits: 2,
 * }, 'en-US' )
 * 
 * // outputs $10.99
 * formatNumber( 10.99, {
 *     style	: 'currency',
 *     currency	: 'USD',
 * }, 'en-US' )
 * ```
 * 
 * @see {@link Intl.NumberFormatOptions} for more information about available options.
 * @see {@link Number.toLocaleString()}
 */
export const formatNumber = (
	number		: number,
	options?	: Intl.NumberFormatOptions,
	locales?	: Intl.LocalesArgument,
) => (
	new Intl.NumberFormat( locales, options )
		.format( number )
)


/**
 * Clamp the given `input` with the given `min` and `max` value.
 *
 * @param	input	The `input` value to clamp.
 * @param	min		(Optional) The minimum value. Default `0`.
 * @param	max		(Optional) The maximum value. Default `100`.
 * @returns	The clamped value.
 */
export const clamp = ( input: number, min: number = 0, max: number = 100 ) => (
	Math.max( min, Math.min( max, input ) )
)