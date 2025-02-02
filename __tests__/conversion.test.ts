import { convertTo, getMapRatio } from '@/conversion'
import { hexToRGBA, hexToRGBAString, hexToAnsi } from '@/conversion'


describe( 'getMapRatio', () => {

	const CacioEPepe = {
		spaghettoni		: 320,
		pecorino		: 200, // pecorino romano DOP is a must
		pepe			: 5,
		portions		: 4,
	}
	
	
	const Carbonara = {
		spaghettoni	: 320,
		guanciale	: 150,
		tuorli		: 6,
		pepe		: 5,
		pecorino	: 50, // pecorino romano DOP is a must
		portions	: 4,
	}


	it( 'computes ratios correctly based on the given key', () => {
		expect( getMapRatio( CacioEPepe, 'spaghettoni' ) )
			.toEqual(
				{
					spaghettoni		: 1,	// 1 to 1
					pecorino		: 1.6,	// 1 to 1.6 ( 320 / 200 )
					pepe			: 64,	// 1 to 64 ( 320 / 5 )
					portions		: 80,	// 1 to 80 ( 320 / 4 )
				}
			)
		
		expect( getMapRatio( CacioEPepe, 'portions' ) )
			.toEqual(
				{
					spaghettoni		: 0.0125,	// 1 to 0.0125 ( 4 / 320 )
					pecorino		: 0.02,	// 1 to 0.02 ( 4 / 200 )
					pepe			: 0.8,	// 1 to 0.8 ( 4 / 5 )
					portions		: 1,	// 1 to 1
				}
			)
	} )


	it( 'returns raw values without rounding', () => {
		const map = { a: 1.5, b: 3, c: 4.5 }
		expect( getMapRatio( map, 'b' ) )
			.toEqual( { a: 2, b: 1, c: 0.6666666666666666 } )
	} )


	it( 'handles zero values in numerator', () => {
		const map = { a: 0, b: 20, c: 40 };
		expect( getMapRatio( map, 'a' ) )
			.toEqual( { a: 1, b: 0, c: 0 } )
	} )
	

	it( 'handles zero values in denominator', () => {
		const map = { a: 10, b: 0, c: 40 };
		expect( getMapRatio( map, 'a' ) )
			.toEqual( { a: 1, b: 0, c: 0.25 } )
	} )


	it( 'does not modify the original map', () => {
		const map		= { a: 10, b: 20, c: 40 }
		const original	= { ...map }
	
		getMapRatio( map, 'b' )
	
		expect( map ).toEqual( original )
	} )


	it( 'throws an Error if the key does not exist in the given map', () => {
		// @ts-expect-error never use onions with Carbonara recipe.
		expect( () => getMapRatio( Carbonara, 'cipolla' ) )
			.toThrow(
		  		'The provided `key` \'cipolla\' doesn\'t exist in the provided map.'
			)
	} )


	it( 'throws a TypeError for invalid numerator', () => {
		expect( () => getMapRatio( { a: NaN, b: 20 }, 'a' ) )
			.toThrow(
				`The provided 'a' value is not a number.`
			)
		
		// @ts-expect-error negative testing
		expect( () => getMapRatio( { a: 'string', b: 20 }, 'a' ) )
			.toThrow(
				`The provided 'a' value is not a number. string given.`
			)
		
		// @ts-expect-error negative testing
		expect( () => getMapRatio( { a: null, b: 20 }, 'a' ) )
			.toThrow(
				`The provided 'a' value is not a number. object given.`
			)
	} )

} )


describe( 'convertTo', () => {

	it( 'supports any object with string index signature and number values as input', () => {
		const InMeters = {
			mile	: 1609.34,
			yard	: 0.9144,
			foot	: 0.3048,
		}
		// converts 100 meters to...
		const result = convertTo( 100, InMeters )
		expect( result.get( 'mile' ).value ).toBe( 0.06213727366498068 )
		expect( result.get( 'yard' ).value ).toBe( 109.36132983377078 )
		expect( result.get( 'foot' ).value ).toBe( 328.0839895013123 )
	} )


	it( 'returns `0` when conversion result is NaN or +/-Infinity', () => {
		const result = convertTo( 100, { a: 0, b: -0 } )
		expect( result.get( 'a' ).value ).toBe( 0 )
	} )
	
	
	it( 'throws a TypeError for invalid ratio value', () => {
		expect( () => convertTo( 100, { a: NaN, b: 20 } ) )
			.toThrow(
				`The provided 'a' ratio is not a number.`
			)
		
		// @ts-expect-error negative testing
		expect( () => convertTo( 100, { a: 'string', b: 20 }, 'a' ) )
			.toThrow(
				`The provided 'a' ratio is not a number. string given.`
			)
		
		// @ts-expect-error negative testing
		expect( () => convertTo( 100, { a: null, b: 20 }, 'a' ) )
			.toThrow(
				`The provided 'a' ratio is not a number. object given.`
			)
	} )

} )


describe( 'hexToRGBA', () => {

	it( 'converts a HEX color string to RGBA values', () => {
		expect( hexToRGBA( '#00A67D6b' ) )
			.toEqual( [ 0, 166, 125, 0.4196078431372549 ] )
	} )

	it( 'converts short hex color codes', () => {
		expect( hexToRGBA( '#000' ) )
			.toEqual( [ 0, 0, 0, 1 ] )
	} )
	
	
	it( 'correctly extracts the alpha channel from the hex color code', () => {
		expect( hexToRGBA( '#00A67D6b' ) )
			.toEqual( [ 0, 166, 125, 0.4196078431372549 ] )
	} )
	
	
	it( 'fallback alpha channel value to 1 if a short hex color code has been provided', () => {
		expect( hexToRGBA( '#FFF' ) )
			.toEqual( [ 255, 255, 255, 1 ] )
	} )
	
	
	it( 'allows custom alpha channel overriding', () => {
		expect( hexToRGBA( '#00A67D6b', 0.5 ) )
			.toEqual( [ 0, 166, 125, 0.5 ] )
	} )
	
	
	it( 'throws an Error if an invalid hex color code has been provided', () => {
		expect( () => hexToRGBA( 'FFF' ) )
			.toThrow( 'Bad Hex' )
		expect( () => hexToRGBA( '#FFFF' ) )
			.toThrow( 'Bad Hex' )
		expect( () => hexToRGBA( '#GGGGGG' ) )
			.toThrow( 'Bad Hex' )
	} )

} )


describe( 'hexToRGBAString', () => {

	it( 'converts hex color code to rgba CSS value', () => {
		expect( hexToRGBAString( '#00A67D6b' ) )
			.toBe( `rgba(0,166,125,0.4196078431372549)` )
	} )

} )


describe( 'hexToAnsi', () => {

	it( 'converts hex color code to ANSI string', () => {
		expect( hexToAnsi( '#00A67D6b', 38 ) )
			.toBe( '\x1b[38;2;0;166;125m' )
	} )

} )