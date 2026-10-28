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
	K extends keyof T = keyof T,
>(
	map: T,
	key: K,
): T => {
	if (!(key in map)) {
		throw new Error(`The provided \`key\` '${String(key)}' doesn't exist in the provided map.`)
	}

	const _map = { ...map }
	const numerator = map[key]

	if (numerator == null || isNaN(numerator)) {
		let message = `The provided '${String(key)}' value is not a number.`
		if (typeof numerator !== 'bigint' && typeof numerator !== 'number') {
			message += ` ${typeof numerator} given.`
		}
		throw new TypeError(message)
	}

	Object.keys(_map).map(mapKey => {
		const denominator = _map[mapKey]!
		let value = numerator / denominator

		// if 0 / 0
		if (isNaN(value)) value = 1
		// if X / 0 || X / -0
		if (value === Infinity || value === -Infinity) value = 0

		;(_map[mapKey] as number) = value
	})

	return _map
}

export type RGBA = [number, number, number, number]

/**
 * Conver hex color to rgba.
 *
 * @param	hex		A valid hex color code.
 * @param	alpha	( Optional ) The alpha value 0~1. If not provided, it will be extracted from the hex color code alpha channel.
 * @returns	The rgba color values. Throw a new Exception if given color is not valid.
 */
export const hexToRGBA = (hex: string, alpha?: number): RGBA => {
	if (!/^#([A-Fa-f0-9]{3}){1,2}([A-Fa-f0-9]{2})?$/.test(hex)) throw new Error('Bad Hex')

	let char: string[]

	// Remove `#` and split into individual characters
	char = hex.substring(1).split('')

	// Expand short hex codes (e.g., `#FFF` → `#FFFFFF`)
	if (char.length === 3) {
		char = [char[0]!, char[0]!, char[1]!, char[1]!, char[2]!, char[2]!]
	}

	// Extract RGB and optional alpha
	const r = parseInt(`${char[0]}${char[1]}`, 16)
	const g = parseInt(`${char[2]}${char[3]}`, 16)
	const b = parseInt(`${char[4]}${char[5]}`, 16)
	const a = alpha || (char.length === 8 ? parseInt(`${char[6]}${char[7]}`, 16) / 255 : 1)

	return [r, g, b, a]
}

/**
 * Conver hex color to rgba.
 *
 * @param	hex		A valid hex color code.
 * @param	alpha	( Optional ) The alpha value 0~1. If not provided, it will be extracted from the hex color code alpha channel.
 * @returns	The rgba color. Throw a new Exception if given color is not valid.
 */
export const hexToRGBAString = (hex: string, alpha?: number): `rgba(${string})` =>
	`rgba(${hexToRGBA(hex, alpha).join(',')})`

/**
 * Convert hex color to ANSI true-color string.
 *
 * @param	hex		A valid hex color code.
 * @param	code	The ANSI code. Usually `38` for text colors. `48` for background colors.
 * @returns The ANSI formatted string.
 */
export const hexToAnsiTrueColor = (hex: string, code: number): string => {
	const [r, g, b] = hexToRGBA(hex)
	return [`\x1b[${code}`, 2, r, g, `${b}m`].join(';')
}
