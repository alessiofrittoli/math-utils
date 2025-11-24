import { convertTo } from '@/conversion'
import { formatNumber } from '.'

export const HumanReadableBitInBytes = {
	'bits'	: 1 / 8,	// 1 bit in bytes (fractional)
	'Kb'	: 1.25e+2,	// 1 Kilobit in bytes
	'Mb'	: 1.25e+5,	// 1 Megabit in bytes
	'Gb'	: 1.25e+8,	// 1 Gigabit in bytes
	'Tb'	: 1.25e+11,	// 1 Terabit in bytes
	'Pb'	: 1.25e+14,	// 1 Petabit in bytes
} as const

export const BitInBytes = {
	...HumanReadableBitInBytes,
	'Kib'	: 128,					// 1 Kibibit in bytes
	'Mib'	: 1.31072e+5,			// 1 Mebibit in bytes
	'Gib'	: 1.34217728e+8,		// 1 Gibibit in bytes
	'Tib'	: 1.37438953472e+11,	// 1 Tebibit in bytes
	'Pib'	: 1.40737488355328e+14,	// 1 Pebibit in bytes
} as const


export const HumanReadableByteInBytes = {
	'bytes'	: 1,		// 1 byte in bytes
	'KB'	: 1e+3,		// 1 Kilobyte in bytes
	'MB'	: 1e+6,		// 1 Megabyte in bytes
	'GB'	: 1e+9,		// 1 Gigabyte in bytes
	'TB'	: 1e+12,	// 1 Terabyte in bytes
	'PB'	: 1e+15,	// 1 Petabyte in bytes
	'EB'	: 1e+18,	// 1 Exabyte in bytes
	'ZB'	: 1e+21,	// 1 Zettabyte in bytes
	'YB'	: 1e+24,	// 1 Yottabyte in bytes
} as const

export const ByteInBytes = {
	...HumanReadableByteInBytes,
	'KiB'	: 1024,					// 1 Kibibyte in bytes
	'MiB'	: 1.048576e+6,			// 1 Mebibyte in bytes
	'GiB'	: 1.073741824e+9,		// 1 Gibibyte in bytes
	'TiB'	: 1.099511627776e+12,	// 1 Tebibyte in bytes
	'PiB'	: 1.125899906842624e+15,// 1 Pebibyte in bytes
	'EiB'	: 1.152921504606847e+18,// 1 Exbibyte in bytes
	'ZiB'	: 1.1805916207174113e+21,// 1 Zebibyte in bytes
	'YiB'	: 1.2089258196146292e+24,// 1 Yobibyte in bytes
} as const


export const InBytes = { ...BitInBytes, ...ByteInBytes } as const


export type HumanReadableBitInBytes		= typeof HumanReadableBitInBytes[ keyof typeof HumanReadableBitInBytes ]
export type BitInBytes					= typeof BitInBytes[ keyof typeof BitInBytes ]
export type HumanReadableByteInBytes	= typeof HumanReadableByteInBytes[ keyof typeof HumanReadableByteInBytes ]
export type ByteInBytes					= typeof ByteInBytes[ keyof typeof ByteInBytes ]
export type InBytes						= typeof InBytes[ keyof typeof InBytes ]


/**
 * Format bytes in a human readable format.
 * 
 * @param bytes		The number of bytes to format.
 * @param bitBased	(Optional) Whether to use bit based outputs. Default: `false`.
 * @param options	The number format options.
 * @param locales	A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects
 * 					that contain one or more language or locale tags.
 * 					If you include more than one locale string,
 * 					list them in descending order of priority so that the first entry is the preferred locale.
 * 					If you omit this parameter, the default locale of the JavaScript runtime is used.
 * 
 * @returns A string representing the formatted size.
 */
export const formatBytes = (
	input		: number,
	bitBased	: boolean = false,
	options		: Intl.NumberFormatOptions = {},
	locales?	: Intl.LocalesArgument,
) => {
	
	options.maximumFractionDigits ||= 3
	
	const units = convertTo( input, { ...HumanReadableBitInBytes, ...HumanReadableByteInBytes } )
	
	const entries = (
		Array.from( units.entries() )
			.filter( ( [ key ] ) => (
				! bitBased
					? key in HumanReadableByteInBytes
					: key in HumanReadableBitInBytes
			) )
	)

	if ( bitBased ) {
		entries.map( ( [, entry ] ) => {
			entry.ratio = entry.ratio * 8
		} )
	}

	const convertedInput	= ! bitBased ? input : input * 8
	const [ unit, entry ]	= entries.at( 0 )!
	let formatted			= `${ formatNumber( entry.value, options, locales ) } ${ unit }`

	for ( let index = 0; index < entries.length; index++ ) {

		const [ unit, entry ]	= entries[ index ]!
		const [, nextEntry ]	= entries[ index + 1 ] || []

		if ( nextEntry && convertedInput >= nextEntry.ratio ) {
			continue
		}

		formatted = `${ formatNumber( entry.value, options, locales ) } ${ unit }`
		break

	}

	return formatted

}