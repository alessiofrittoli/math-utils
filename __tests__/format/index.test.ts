import { clamp, formatNumber } from '@/format'

describe( 'formatNumber', () => {
	
	it( 'formats with decimals', () => {
		const result = formatNumber( 1234.567, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}, 'en-US' )

		expect( result ).toBe( '1,234.57' )
	} )


	it( 'formats currencies', () => {
		const result = formatNumber( 1000, {
			style			: 'currency',
			currency		: 'USD',
			currencyDisplay	: 'symbol',
		}, 'en-US' )

		expect( result ).toBe( '$1,000.00' )
	} )


	it( 'formats percentages', () => {
		const result = formatNumber( 0.75, {
			style: 'percent',
			minimumFractionDigits: 1,
		}, 'en-US' )

		expect( result ).toBe( '75.0%' )
	} )


	it( 'fallback locales', () => {
		const result = formatNumber( 123456, undefined, [ 'unknown', 'fr-FR' ] )
		expect( result ).toBe( '123 456' )
	} )

} )


describe( 'clamp', () => {

	it( 'clamps the given input using default options', () => {

		expect( clamp( 120 ) ).toBe( 100 )
		expect( clamp( -120 ) ).toBe( 0 )

	} )
	
	
	it( 'clamps the given input using custom options', () => {

		expect( clamp( 120, 20, 50 ) ).toBe( 50 )
		expect( clamp( 10, 20, 50 ) ).toBe( 20 )

	} )

} )