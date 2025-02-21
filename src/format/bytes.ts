import { convertTo } from '@/conversion'
import { formatNumber } from '.'

export const HumanReadableBitInBytes = {
	'bits'	: 1 / 8,	// 1 bit in bytes (fractional)
	'Kb'	: 125,		// 1 Kilobit in bytes
	'Mb'	: 12.5e+4,	// 1 Megabit in bytes
	'Gb'	: 1.25e+8,	// 1 Gigabit in bytes
	'Tb'	: 1.25e+11,	// 1 Terabit in bytes
	'Pb'	: 1.25e+14,	// 1 Petabit in bytes
} as const

export const BitInBytes = {
	...HumanReadableBitInBytes,
	'Kib'	: 128,					// 1 Kibibit in bytes
	'Mib'	: 131_072,				// 1 Mebibit in bytes
	'Gib'	: 134_217_728,			// 1 Gibibit in bytes
	'Tib'	: 137_438_953_472,		// 1 Tebibit in bytes
	'Pib'	: 140_737_488_355_328,	// 1 Pebibit in bytes
} as const


export const HumanReadableByteInBytes = {
	'bytes'	: 1,		// 1 byte in bytes
	'KB'	: 1e+3,		// 1 Kilobyte in bytes
	'MB'	: 1e+6,		// 1 Megabyte in bytes
	'GB'	: 1e+9,		// 1 Gigabyte in bytes
	'TB'	: 1e+12,	// 1 Terabyte in bytes
	'PB'	: 1e+15,	// 1 Petabyte in bytes
} as const

export const ByteInBytes = {
	...HumanReadableByteInBytes,
	'KiB'	: 1024,					// 1 Kibibyte in bytes
	'MiB'	: 1_048_576,			// 1 Mebibyte in bytes
	'GiB'	: 1_073_741_824,		// 1 Gibibyte in bytes
	'TiB'	: 1_099_511_627_776,	// 1 Tebibyte in bytes
	'PiB'	: 1_125_899_906_842_624,// 1 Pebibyte in bytes
} as const


export const InBytes = {
	...BitInBytes,
	...ByteInBytes,
} as const


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